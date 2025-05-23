import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Role } from '../common.types';

export class SignupUserDTO {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsNotEmpty()
  @IsString()
  email!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;

  @IsEnum(Role)
  @IsOptional()
  role?: Role;
}
