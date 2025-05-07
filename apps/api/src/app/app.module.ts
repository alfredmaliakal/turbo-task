import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule} from '@nestjs/config'
import { TodosModule } from './todos/todos.module';
import { Todo } from './todos/entities/todo.entity';
import { path } from 'path';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data/demo.db',
      entities: [path.join(process.cwd(),'dist/**/*.entity.js')],
      synchronize: true,
    }),
    TodosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
