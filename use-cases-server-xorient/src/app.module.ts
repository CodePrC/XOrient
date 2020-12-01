import { Module } from '@nestjs/common';
import { UsecaseModule } from './usecase/usecase.module';

@Module({
  imports: [UsecaseModule]
})
export class AppModule {}
