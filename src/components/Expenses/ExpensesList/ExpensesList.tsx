import type { FC } from "react";

import { Expense } from "@store/reducers/expenseSlice";

import { useTranslation } from "react-i18next";

import ExpenseItem from "../ExpenseItem/ExpenseItem";

import styles from "./ExpenseList.module.css";

interface ExpensesListProps {
  expenses: Expense[];
}

const ExpensesList: FC<ExpensesListProps> = ({ expenses }) => {
  const { t } = useTranslation();

  if (!expenses.length) {
    return <h2>{t("emptyTransactions")}</h2>;
  }

  return (
    <>
      <div className={styles.history}>
        <h2>{t("history")}</h2>
        <hr />
      </div>
      <div className={styles["expense-list-container"]}>
        {expenses.map((item) => (
          <ExpenseItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default ExpensesList;
