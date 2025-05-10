export class CreateTaskDto {
  title!: string;
  description!: string;
  type!: string;
  orgId!: number;
  status!: number;
  createUser!: number;
  createdAt!: Date;
}
