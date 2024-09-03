import { AbstractEntity } from 'src/database/abstract.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Expense } from './expenses.entity';

@Entity()
export class User extends AbstractEntity<User> {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Expense, (expense) => expense.user, { cascade: true })
  expenses: Expense[];
}
