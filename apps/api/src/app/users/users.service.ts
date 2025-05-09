import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../../../../libs/data/dto/user/create-user.dto';
import { UpdateUserDto } from '../../../../../libs/data/dto/user/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const task = this.userRepository.create(createUserDto);
    return await this.userRepository.save(task);
  }

  async findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    const oneTask = await this.userRepository.findOneBy({
      id: id,
    });
    return oneTask;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(id, updateUserDto);

    const updatedTask = await this.userRepository.findOne({ where: { id } });
    return updatedTask;
  }

  async remove(id: number) {
    const deleteTask = await this.userRepository.delete(id);
    return deleteTask;
  }
}
