// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeliverymanModule } from './deliveryman/deliveryman.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliverymanEntity } from './deliveryman/deliveryman.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',                    // <= change
      password: '1234',                   // <= change
      database: 'store_management_db',         // <= change
      entities: [DeliverymanEntity],
      synchronize: true,           // dev only
    }),
    DeliverymanModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}