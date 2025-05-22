import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import type { Request, Response } from 'express';

interface ErrorResponse {
  message: string;
}
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();
    const request = host.switchToHttp().getRequest<Request>();
    const status = exception.getStatus();
    const message = exception.getResponse();

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
