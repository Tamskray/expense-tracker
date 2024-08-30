import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchExpenses } from "@utils/expenses/fetchExpenses";

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

export const getExpenses = createAsyncThunk<
  Expense[],
  { userId: number; token: string }
>("expenses/fetch", async ({ userId, token }, { rejectWithValue }) => {
  try {
    const response: Expense[] = await fetchExpenses(userId, token);
    return response;
  } catch (error) {
    return rejectWithValue({
      message: "Failed to fetch expenses",
      err: error,
    });
  }
});

export const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses.push(action.payload);
    },
    removeExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.id,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getExpenses.fulfilled,
      (state, action: PayloadAction<Expense[]>) => {
        state.expenses = action.payload;
      },
    );
  },
});

export const selectExpenses = (state: RootState) => state.expense.expenses;

export const { addExpense, removeExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
