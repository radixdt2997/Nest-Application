import { Module } from '@nestjs/common';
import { AppModule } from './app/app.module';
import { CatModule } from './cats/cat.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [AppModule, CatModule, HealthModule],
})
export class MainModule {}
