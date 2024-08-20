import type { FC } from "react";
import { Link } from "react-router-dom";

import { selectExpenses } from "@store/reducers/expenseSlice";

import { useAppSelector } from "@hooks/redux";

import ExpenseForm from "@components/Expenses/AddExpenseForm/ExpenseForm/ExpenseForm";
import ExpenseInfo from "@components/Expenses/ExpenseInfo/ExpenseInfo";
import ExpensesList from "@components/Expenses/ExpensesList/ExpensesList";

const ExpensesPage: FC = () => {
  const expenses = useAppSelector(selectExpenses);

  return (
    <>
      <ExpenseInfo />
      <ExpenseForm />
      <ExpensesList expenses={expenses} />

      <Link to="/login">
        <b>Login</b>
      </Link>
    </>
  );
};

export default ExpensesPage;
