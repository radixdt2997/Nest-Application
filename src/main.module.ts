import { Module } from '@nestjs/common';
import { AppModule } from './app/app.module';
import { CatModule } from './cats/cats.module';
import { HealthModule } from './health/health.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AppModule, HealthModule, CatModule, UsersModule],
})
export class MainModule {}
