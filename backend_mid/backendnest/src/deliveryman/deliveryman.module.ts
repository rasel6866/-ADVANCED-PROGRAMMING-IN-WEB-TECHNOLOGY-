// src/deliveryman/deliveryman.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliverymanController } from './deliveryman.controller';
import { DeliverymanService } from './deliveryman.service';
import { DeliverymanEntity } from './deliveryman.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeliverymanEntity])],
  controllers: [DeliverymanController],
  providers: [DeliverymanService],
})
export class DeliverymanModule {}