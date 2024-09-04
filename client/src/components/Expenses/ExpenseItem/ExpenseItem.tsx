import type { FC } from "react";

import { Expense, deleteExpense } from "@store/reducers/expenseSlice";

import { useAppDispatch } from "@hooks/redux";

import styles from "./ExpenseItem.module.css";

interface ExpenseItemProps {
  item: Expense;
}

const ExpenseItem: FC<ExpenseItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleRemoveExpense = () => {
    if (item.id) dispatch(deleteExpense({ expenseId: item.id }));
  };

  const containerBackground =
    item.transaction_type === "income" ? styles.income : styles.expense;

  const deleteBtnColor =
    item.transaction_type === "income"
      ? styles["delete-buttob-income"]
      : styles["delete-buttob-expense"];

  return (
    <>
      <div
        className={`${styles["expense-item-container"]} ${containerBackground}`}
      >
        <div className={styles["expense-item-info"]}>
          <h2 className={styles.category}>{item.category}</h2>
          <h3 className={styles.description}>{item.description}</h3>
        </div>

        <h2 className={styles.amount}>
          {item.transaction_type === "income" ? <span>+</span> : <span>-</span>}
          {item.amount}
        </h2>

        <button
          className={`${styles["delete-button"]}  ${deleteBtnColor}`}
          onClick={() => handleRemoveExpense()}
        >
          &times;
        </button>
      </div>
    </>
  );
};

export default ExpenseItem;
