import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import bcryptjs from 'bcryptjs';
import { PrismaService } from 'src/prisma.service';
import { LoginUserDTO, SignupAPIResponse, SignupUserDTO } from './types';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async signup(payload: SignupUserDTO): Promise<SignupAPIResponse> {
    // Check if user already exists
    const existingUser = await this.prisma.user.findFirst({
      where: {
        email: payload.email,
      },
    });

    // Return error if user already exists
    if (existingUser) {
      throw new BadRequestException({
        message: 'User Already Exists',
        error: 'BAD_REQUEST',
      });
    }

    // Save user password in encrypted format
    const hash = await this.generateEncryptedPassword(payload.password, 10);

    // Save user in DB with encrypted password
    payload.password = hash;
    const user = await this.prisma.user.create({
      data: payload,
      // Return Id and Email only
      select: {
        id: true,
        email: true,
      },
    });

    return user;
  }

  async login(payload: LoginUserDTO): Promise<{ accessToken: string }> {
    // Find user based on email
    const user = await this.prisma.user.findFirst({
      where: {
        email: payload.email,
      },
    });

    // No user then return invalid error
    if (!user) {
      throw new UnauthorizedException({ message: 'Not Authorized', error: 'UNAUTHORIZED' });
    }

    // Decrypt password from DB and match with user provided password
    const isMatched = await this.generateDecryptedPassword(payload.password, user.password);

    // If not match then send invalid ID or Password error
    if (!isMatched) {
      throw new UnauthorizedException({
        message: 'Invalid Email or Password',
        error: 'UNAUTHORIZED',
      });
    }

    // Return JWT access token
    const accessToken = this.jwtService.sign(
      {
        email: user.email,
        id: user.id,
        role: user.role,
      },
      { expiresIn: '1d' }
    );

    return { accessToken };
  }

  async generateEncryptedPassword(plainText: string, saltRounds: number) {
    return await bcryptjs.hash(plainText, saltRounds);
  }

  async generateDecryptedPassword(plainText: string, hash: string) {
    return bcryptjs.compare(plainText, hash);
  }
}
