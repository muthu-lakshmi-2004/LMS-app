import apiClient from "./apiClient";


export const getUserProfile = (id: string) => {
  return apiClient.get(`/user/${id}`);
};



