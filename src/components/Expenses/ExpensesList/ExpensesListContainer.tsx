import type { FC } from "react";

import { Expense } from "@store/reducers/expenseSlice";

import { useTranslation } from "react-i18next";

import ExpenseList from "./ExpenseList";

import styles from "./ExpenseList.module.css";

interface ExpensesListProps {
  expenses: Expense[];
}

const ExpensesListContainer: FC<ExpensesListProps> = ({ expenses }) => {
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
        <ExpenseList expenses={expenses} />
      </div>
    </>
  );
};

export default ExpensesListContainer;
