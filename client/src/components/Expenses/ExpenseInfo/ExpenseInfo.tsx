import type { FC } from "react";

import { selectExpenses } from "@store/reducers/expenseSlice";

import { useAppSelector } from "@hooks/redux";

import { useTranslation } from "react-i18next";

import styles from "./ExpenseInfo.module.css";

const ExpenseInfo: FC = () => {
  const { t } = useTranslation();
  const expenses = useAppSelector(selectExpenses);
  // const userName = useAppSelector((state) => state.user.name);

  const totalIncome = expenses
    .filter((expense) => expense.transaction_type === "income")
    .reduce((sum, expense) => sum + expense.amount, 0);

  const totalExpenses = expenses
    .filter((expense) => expense.transaction_type === "expense")
    .reduce((sum, expense) => sum + expense.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <>
      {/* <h2>Hello {userName}</h2> */}
      <div className={styles["balance-title"]}>
        <h2>{t("balance")}</h2>
        <h1>{balance.toFixed(2)} ₴</h1>
      </div>
      <div className={styles["general-info-container"]}>
        <div>
          <span>{t("income")}</span>
          <h2 className={styles.income}>{totalIncome.toFixed(2)} ₴</h2>
        </div>
        <div>
          <span>{t("expense")}</span>
          <h2 className={styles.expense}>{totalExpenses.toFixed(2)} ₴</h2>
        </div>
      </div>
    </>
  );
};

export default ExpenseInfo;
