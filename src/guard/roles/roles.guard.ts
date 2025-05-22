import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { LoginUserPayloadResponse, Role } from 'src/users/types';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    console.log('Role Guard Runs...');

    // Get The Required Roles from the route using reflector
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) return true;

    // Get the user from request which we set in auth guard after login
    const { user }: { user: LoginUserPayloadResponse } = context.switchToHttp().getRequest();

    if (!user) {
      throw new UnauthorizedException({
        message: 'User not found in request. Please Login Again.',
        error: 'UNAUTHORIZED',
      });
    }

    // Check if required role for the route matches logged in user role
    const hasRoleAndMatches = requiredRoles.some((role) => user.role?.includes(role));

    if (!hasRoleAndMatches) {
      throw new ForbiddenException({
        message: 'You do not have permission (roles) to access this resource.',
        error: 'FORBIDDEN',
      });
    }

    return true;
  }
}
