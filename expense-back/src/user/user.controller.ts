import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateExpenseDto } from './dto/create-expense.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Get(':email')
  async findOneByEmail(@Param('email') email: string) {
    return this.userService.findOneByEmail(email);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @Post(':id/expense')
  async addExpense(
    @Param('id') userId: number,
    @Body() createExpenseDto: CreateExpenseDto,
  ) {
    return this.userService.addExpense(userId, createExpenseDto);
  }

  @Get(':id/expenses')
  async getExpenses(@Param('id') userId: number) {
    return this.userService.getExpenses(userId);
  }

  @Delete(':id/expense')
  async removeExpense(@Param('id') id: number) {
    return this.userService.deleteExpense(id);
  }
}
