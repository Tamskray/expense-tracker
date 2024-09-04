import { IsNotEmpty, IsNumber, IsString, IsEnum } from 'class-validator';

export enum TransactionType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export class CreateExpenseDto {
  @IsString({ message: 'Must be a string' })
  @IsNotEmpty({ message: 'Description is required' })
  description: string;

  @IsNumber({}, { message: 'Must be a number' })
  @IsNotEmpty({ message: 'Amount is required' })
  amount: number;

  @IsString({ message: 'Must be a string' })
  @IsNotEmpty({ message: 'Category is required' })
  category: string;

  @IsNotEmpty({ message: 'Required' })
  @IsEnum(TransactionType, { message: 'Must be either "income" or "expense"' })
  transaction_type: TransactionType;
}
