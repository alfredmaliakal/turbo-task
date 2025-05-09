import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './../../../../../libs/data/dto/task/create-task.dto';
import { UpdateTaskDto } from '../../../../../libs/data/dto/task/update-task.dto';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private readonly taskReposistory: Repository<Task>
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    const task = this.taskReposistory.create(createTaskDto);
    return await this.taskReposistory.save(task);
  }

  findAll() {
    return this.taskReposistory.find();
  }

  async findOne(id: number) {
    const oneTask = await this.taskReposistory.findOneBy({
      id: id,
    });
    return oneTask;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    await this.taskReposistory.update(id, updateTaskDto);

    const updatedTask = await this.taskReposistory.findOne({ where: { id } });
    return updatedTask;
  }

  async remove(id: number) {
    const deleteTask = await this.taskReposistory.delete(id);
    return deleteTask;
  }
}
