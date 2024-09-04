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
  transaction_type: string;

  @ManyToOne(() => User, (user) => user.expenses, { onDelete: 'CASCADE' })
  user: User;
}
