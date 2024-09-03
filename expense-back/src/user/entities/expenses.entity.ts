import { AbstractEntity } from 'src/database/abstract.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Expense extends AbstractEntity<Expense> {
  @Column()
  description: string;

  @Column()
  amount: number;

  @Column()
  category: string;

  @Column()
  // { type: 'enum', enum: ['income', 'expense'] }
  transaction_type: string;

  @ManyToOne(() => User, (user) => user.expenses)
  user: User;
}
