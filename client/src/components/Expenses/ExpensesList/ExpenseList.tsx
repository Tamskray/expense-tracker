import type { FC } from "react";
import { FixedSizeList as List } from "react-window";

import { Expense } from "@store/reducers/expenseSlice";

import ExpenseItem from "../ExpenseItem/ExpenseItem";

import styles from "./ExpenseList.module.css";

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList: FC<ExpenseListProps> = ({ expenses }) => {
  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => (
    <div style={style} className={styles["expense-list-container"]}>
      <ExpenseItem key={expenses[index].id} item={expenses[index]} />
    </div>
  );

  return (
    <List height={500} itemCount={expenses.length} itemSize={80} width={650}>
      {Row}
    </List>
  );
};

export default ExpenseList;
