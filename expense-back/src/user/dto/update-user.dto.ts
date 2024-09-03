import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { CreateExpenseDto } from './create-expense.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  expenses: CreateExpenseDto[];
}
