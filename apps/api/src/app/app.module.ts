import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule} from '@nestjs/config'
import { TodosModule } from './todos/todos.module';
import { Todo } from './todos/entities/todo.entity';
import { Task } from './tasks/entities/task.entity';
import { TasksModule } from './tasks/tasks.module';
import { OrganisationsModule } from './organisations/organisations.module';
import path = require("path")
import { Organisation } from './organisations/entities/organisation.entity';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data/demo.db',
      entities: [Task],
      synchronize: true,
    }),
    TodosModule,
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
