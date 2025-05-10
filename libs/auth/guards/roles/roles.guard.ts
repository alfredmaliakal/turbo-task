import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../../decorators/roles.decorator';
import { Role } from '../../enum/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  jwtService: any;
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const authorizedRole = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    return authorizedRole.some((role) => user.role === role);
  }
}
