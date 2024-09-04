import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { addExpenseToDB } from "@utils/expenses/addExpense";
import { deleteExpenseFromDB } from "@utils/expenses/deleteExpense";
import { fetchExpenses } from "@utils/expenses/fetchExpenses";

import type { RootState } from "../store";

export type Transaction = "income" | "expense";

export interface Expense {
  id?: number;
  description: string;
  amount: number;
  category: string;
  transaction_type: Transaction;
}

interface AddExpensePaylod {
  userId: number;
  expense: Expense;
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

export const addExpense = createAsyncThunk<Expense, AddExpensePaylod>(
  "expenses/addExpense",
  async ({ userId, expense }, { rejectWithValue }) => {
    try {
      const response = await addExpenseToDB(userId, expense);
      console.log(response);

      return response;
    } catch (error) {
      return rejectWithValue({
        message: "Failed to fetch expenses",
        err: error,
      });
    }
  },
);

export const deleteExpense = createAsyncThunk<number, { expenseId: number }>(
  "expenses/deleteExpense",
  async ({ expenseId }, { rejectWithValue }) => {
    try {
      await deleteExpenseFromDB(expenseId);
      return expenseId;
    } catch (error) {
      return rejectWithValue({
        message: "Failed to delete expense",
        err: error,
      });
    }
  },
);

export const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getExpenses.fulfilled,
        (state, action: PayloadAction<Expense[]>) => {
          state.expenses = action.payload;
        },
      )
      .addCase(
        addExpense.fulfilled,
        (state, action: PayloadAction<Expense>) => {
          state.expenses.push(action.payload);
        },
      )
      .addCase(
        deleteExpense.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.expenses = state.expenses.filter(
            (expense) => expense.id !== action.payload,
          );
        },
      );
  },
});

export const selectExpenses = (state: RootState) => state.expense.expenses;

export default expenseSlice.reducer;
