import axios from "axios";

import { Expense } from "@store/reducers/expenseSlice";

import { API_HOST } from "../../constants/api";

export const addExpenseToDB = async (userId: number, expense: Expense) => {
  try {
    const response = await axios.post(`${API_HOST}/user/${userId}/expense`, {
      ...expense,
    });

    return response.data;
  } catch (error) {
    console.error("Error adding expense:", error);
    throw error;
  }
};
