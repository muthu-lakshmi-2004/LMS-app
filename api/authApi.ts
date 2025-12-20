import apiClient from "./apiClient";

export const loginApi = (email: string, password: string) => {
  return apiClient.get(`/user?email=${email}&password=${password}`);
};
