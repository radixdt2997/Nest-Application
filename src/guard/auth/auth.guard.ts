import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JsonWebTokenError, JwtService } from '@nestjs/jwt';
import type { Request } from 'express';
import { LoginUserPayloadResponse } from 'src/users/types';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('Auth Guard Runs...');

    // Get Request from context
    const request = context.switchToHttp().getRequest<Request>();

    // Extract token from headers
    const token = this.extractTokenFromHeader(request.headers.authorization);

    // Throw error of token is not provided
    if (!token) {
      throw new UnauthorizedException({
        message: 'Token not provided',
        error: 'UNAUTHORIZED',
      });
    }

    try {
      // Verify the user using JWT verify
      const payload: LoginUserPayloadResponse = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });

      // Set the user in request body
      request.user = payload;
    } catch (err) {
      // Specific check for SyntaxError (malformed token)
      if (err instanceof SyntaxError) {
        throw new UnauthorizedException({
          message: 'Malformed token. Please provide a valid token.',
          error: 'MALFORMED_TOKEN',
        });
      }

      // Handle specific errors from jsonwebtoken (e.g., TokenExpiredError)
      if (err instanceof JsonWebTokenError && err.name === 'TokenExpiredError') {
        throw new UnauthorizedException({
          message: 'Token has expired. Please log in again.',
          error: 'TOKEN_EXPIRED',
        });
      }

      if (err instanceof JsonWebTokenError && err.name === 'JsonWebTokenError') {
        throw new UnauthorizedException({
          message: 'Invalid token. Please provide a valid token.',
          error: 'INVALID_TOKEN',
        });
      }

      // Default error handling for other cases
      throw new UnauthorizedException({
        message: 'Invalid or expired token',
        error: 'UNAUTHORIZED',
      });
    }

    return true;
  }

  private extractTokenFromHeader(authHeader?: string): string {
    if (!authHeader) return '';
    const [type, token] = authHeader.split(' ');
    return type === 'Bearer' ? token : '';
  }
}
