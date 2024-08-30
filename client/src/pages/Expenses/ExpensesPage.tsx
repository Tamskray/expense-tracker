import type { FC } from "react";

import { selectExpenses } from "@store/reducers/expenseSlice";

import { useAppSelector } from "@hooks/redux";

import ExpenseForm from "@components/Expenses/AddExpenseForm/ExpenseForm/ExpenseForm";
import ExpenseInfo from "@components/Expenses/ExpenseInfo/ExpenseInfo";
import ExpensesListContainer from "@components/Expenses/ExpensesList/ExpensesListContainer";

const ExpensesPage: FC = () => {
  const expenses = useAppSelector(selectExpenses);

  return (
    <>
      <ExpenseInfo />
      <ExpenseForm />
      <ExpensesListContainer expenses={expenses} />
    </>
  );
};

export default ExpensesPage;
