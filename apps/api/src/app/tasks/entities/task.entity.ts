import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn } from 'typeorm';

@Entity({ name: 'tasks' })
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  type: string;

  @Column()
  status: number;

  @Column()
  orgId: number;

  @Column()
  createUser: number;

  @CreateDateColumn()
  createdAt: Date;
}
