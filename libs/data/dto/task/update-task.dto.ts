import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  title: string;
  description: string;
  type: string;
  orgId: number;
  status: number;
  createUser: number;
  createdAt: Date;
}
