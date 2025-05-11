import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './../../../../../libs/data/dto/task/create-task.dto';
import { UpdateTaskDto } from '../../../../../libs/data/dto/task/update-task.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'libs/auth/decorators/roles.decorator';
import { Role } from 'libs/auth/enum/role.enum';
import { RolesGuard } from 'libs/auth/guards/roles/roles.guard';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  //only Admin and Editor Can create a task
  @Roles(Role.ADMIN, Role.EDITOR)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  @Roles(Role.ADMIN, Role.EDITOR)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Roles(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
