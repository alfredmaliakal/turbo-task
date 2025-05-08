import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {

  constructor(@InjectRepository(Task) private readonly taskReposistory: Repository<Task>){}

  async create(createTaskDto: CreateTaskDto) {
    const task = this.taskReposistory.create(createTaskDto);
    return await this.taskReposistory.save(task);
  }

  findAll() {
    return this.taskReposistory.find();
    
  }

  findOne(id: number) {
    return" this.taskReposistory.findOne( Tas);"
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
