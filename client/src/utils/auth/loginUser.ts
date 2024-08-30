import axios from "axios";

import { API_HOST } from "../../constants/api";

interface LoginResponse {
  access_token: string;
  userId: number;
  username: string;
  email: string;
}

export const loginUser = async (
  name: string,
  email: string,
  password: string,
): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(`${API_HOST}/auth/login`, {
    username: name,
    email,
    password,
  });

  return response.data;
};
