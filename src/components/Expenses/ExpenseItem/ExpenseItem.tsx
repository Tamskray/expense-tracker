import type { FC } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { Expense, removeExpense } from "../../../store/reducers/expenseSlice";

import styles from "./ExpenseItem.module.css";

interface ExpenseItemProps {
  item: Expense;
}

const ExpenseItem: FC<ExpenseItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleRemoveExpense = () => {
    dispatch(removeExpense(item));
    console.log("Removed");
  };

  const containerBackground =
    item.transaction_type === "income" ? styles.income : styles.expense;

  return (
    <>
      <div
        onClick={() => handleRemoveExpense()}
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
      </div>
    </>
  );
};

export default ExpenseItem;
