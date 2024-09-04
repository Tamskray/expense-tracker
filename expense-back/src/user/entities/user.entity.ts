import { AbstractEntity } from 'src/database/abstract.entity';
import { BeforeInsert, Column, Entity, OneToMany, Unique } from 'typeorm';
import { Expense } from './expenses.entity';
import * as bcrypt from 'bcrypt';

@Entity()
@Unique(['email'])
export class User extends AbstractEntity<User> {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @OneToMany(() => Expense, (expense) => expense.user, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  expenses: Expense[];
}
