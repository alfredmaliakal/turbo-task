import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../../../../../../libs/auth/enum/role.enum';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text', enum: Role, default: Role.VIEWER })
  role: Role;

  @Column()
  orgId: number;
}
