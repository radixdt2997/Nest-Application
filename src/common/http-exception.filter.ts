import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

interface ErrorResponse {
  message: string;
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();
    const request = host.switchToHttp().getRequest<Request>();
    const status = exception.getStatus();
    const message = exception.getResponse();

    this.logger.error(`Error status: ${status}, message: ${message['message'] || message}`);

    const isErrorResponse = (message: unknown): message is ErrorResponse =>
      typeof message === 'object' && message !== null && 'message' in message;

    const errorMessage = isErrorResponse(message) ? message.message : message;

    response.status(status).json({
      statusCode: status,
      message: errorMessage,
      error: HttpStatus[status],
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
    });
  }
}
