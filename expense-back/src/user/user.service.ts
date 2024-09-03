import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Expense } from './entities/expenses.entity';
import { CreateExpenseDto } from './dto/create-expense.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = new User({
      ...createUserDto,
    });
    await this.entityManager.save(user);
  }

  async findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: number) {
    return this.usersRepository.findOne({
      where: { id },
      relations: { expenses: true },
    });
  }

  async findOneByEmail(email: string) {
    return this.usersRepository.findOneBy({ email });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOneBy({ id });

    user.name = updateUserDto.name;
    user.email = updateUserDto.email;
    user.password = updateUserDto.password;

    const expenses = updateUserDto.expenses.map(
      (createExpenseDto) => new Expense(createExpenseDto),
    );

    user.expenses = expenses;

    await this.entityManager.save(user);
  }

  async remove(id: number) {
    await this.usersRepository.delete({ id });
  }

  async addExpense(userId: number, createExpenseDto: CreateExpenseDto) {
    const user = await this.usersRepository.findOneBy({ id: userId });

    const expense = new Expense({
      ...createExpenseDto,
      user,
    });

    await this.entityManager.save(expense);
  }

  async getExpenses(userId: number) {
    const user = await this.usersRepository.findOne({
      where: { id: userId },
      relations: { expenses: true },
    });
    return user.expenses || [];
  }
}
