import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";

export type Transaction = "income" | "expense";

export interface Expense {
  id: string;
  description: string;
  amount: number;
  category: string;
  transaction_type: Transaction;
  //   date: string;
}

export interface ExpenseInitialState {
  expenses: Expense[];
}

const initialState: ExpenseInitialState = {
  expenses: [],
};

export const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses.push(action.payload);
    },
    removeExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.id
      );
    },
  },
});

export const selectExpenses = (state: RootState) => state.expense.expenses;

export const { addExpense, removeExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
