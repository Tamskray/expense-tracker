import type { FC } from "react";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux";

import { selectExpenses } from "../../store/reducers/expenseSlice";

import ExpensesList from "../../components/Expenses/ExpensesList/ExpensesList";
import ExpenseForm from "../../components/Expenses/AddExpenseForm/ExpenseForm";

const ExpensesPage: FC = () => {
  const expenses = useAppSelector(selectExpenses);
  const userName = useAppSelector((state) => state.user.name);

  const totalIncome = expenses
    .filter((expense) => expense.transaction_type === "income")
    .reduce((sum, expense) => sum + expense.amount, 0);

  const totalExpenses = expenses
    .filter((expense) => expense.transaction_type === "expense")
    .reduce((sum, expense) => sum + expense.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <>
      <h2>Hello {userName}</h2>
      <h2>Your balance</h2>
      <h1>{balance} ₴</h1>
      <h2>Income: {totalIncome}</h2>
      <h2>Expense: {totalExpenses}</h2>

      <ExpenseForm />

      <ExpensesList expenses={expenses} />

      <Link to="/login">
        <b>Login</b>
      </Link>
    </>
  );
};

export default ExpensesPage;
