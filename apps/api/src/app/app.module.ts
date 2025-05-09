import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule} from '@nestjs/config'
import { Task } from './tasks/entities/task.entity';
import { TasksModule } from './tasks/tasks.module';
import path = require("path")


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './libs/data/sqlite/demo.db',
      entities: [Task],
      synchronize: true,
    }),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
