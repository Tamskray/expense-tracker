import axios from "axios";

import { API_HOST } from "../../constants/api";

export const deleteExpenseFromDB = async (expenseId: number) => {
  try {
    await axios.delete(`${API_HOST}/user/${expenseId}/expense`);
  } catch (error) {
    console.error("Error deleting expense:", error);
    throw error;
  }
};
