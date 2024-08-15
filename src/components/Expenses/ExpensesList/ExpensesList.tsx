import type { FC } from "react";

import { Expense } from "../../../store/reducers/expenseSlice";

import ExpenseItem from "../ExpenseItem/ExpenseItem";

import styles from "./ExpenseList.module.css";

interface ExpensesListProps {
  expenses: Expense[];
}

const ExpensesList: FC<ExpensesListProps> = ({ expenses }) => {
  if (!expenses.length) {
    return <h2>No expenses yet</h2>;
  }

  return (
    <div className={styles["expense-list-container"]}>
      {expenses.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ExpensesList;
