import { Injectable } from '@nestjs/common';

export type Transaction = 'income' | 'expense';

export interface Expense {
  id: string;
  description: string;
  amount: number;
  category: string;
  transaction_type: Transaction;
}

export interface User {
  userId: number;
  username: string;
  email: string;
  password: string;
  expenses: Expense[];
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      userId: 1,
      username: 'Jon',
      email: 'sample@example.com',
      password: '1234',
      expenses: [
        {
          id: 'exp1',
          description: 'Coffee',
          amount: 35,
          category: 'Products',
          transaction_type: 'expense',
        },
      ],
    },
    {
      userId: 2,
      username: 'Liza',
      email: 'sample@example.com',
      password: '1234',
      expenses: [
        {
          id: 'exp1',
          description: 'Coffee',
          amount: 35,
          category: 'Products',
          transaction_type: 'expense',
        },
        {
          id: 'exp2',
          description: 'Salary',
          amount: 100,
          category: 'Income',
          transaction_type: 'income',
        },
      ],
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async getExpenses(userId: number): Promise<Expense[]> {
    const user = this.users.find((user) => user.userId === Number(userId));
    return user?.expenses || [];
  }
}
