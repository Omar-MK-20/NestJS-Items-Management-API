import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './items/items.module';

import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [ConfigModule.forRoot(
    {
      isGlobal: true,
      envFilePath: '.env'
    }
  ) ,MongooseModule.forRoot(process.env.mongoUri || 'undefind'), ItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}