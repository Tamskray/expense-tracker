import axios from "axios";

import { API_HOST } from "../../constants/api";

export const fetchExpenses = async (userId: number, token: string) => {
  try {
    const response = await axios.get(
      `${API_HOST}/auth/expenses/${Number(userId)}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching expenses:", error);
    throw error;
  }
};
