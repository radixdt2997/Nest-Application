import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard, Roles, RolesGuard } from 'src/guard';
import { LoginUserDTO, LoginUserPayloadResponse, Role, SignupUserDTO } from './types';
import { User } from './user.decorator';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/signup')
  async signup(@Body() signupUserDTO: SignupUserDTO) {
    return await this.userService.signup(signupUserDTO);
  }

  @Post('/login')
  async login(@Body() loginUserDTO: LoginUserDTO) {
    return await this.userService.login(loginUserDTO);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Get('/profile')
  @Roles(Role.Admin)
  getProfile(@User() user: LoginUserPayloadResponse) {
    return user;
  }
}
