import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule} from '@nestjs/config'
import { Task } from './tasks/entities/task.entity';
import { TasksModule } from './tasks/tasks.module';
import path = require("path")
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AuditModule } from './audit/audit/audit.module';



@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '../demo.db',
      entities: [Task,User],
      synchronize: true,
    }),
    TasksModule,
    UsersModule,
    AuthModule,
    AuditModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
