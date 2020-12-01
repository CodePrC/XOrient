import { Module } from '@nestjs/common';
import { UsecaseController } from './usecase.controller';
import { UseCaseService } from './usecase.service';

@Module({
  controllers: [UsecaseController],
  providers: [UseCaseService]
})
export class UsecaseModule {}
