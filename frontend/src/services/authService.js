import axios from "axios";

const API = "https://loginhierarchymanagementapi.onrender.com";

export const loginUser = async (userData) => {
  const response = await axios.post(`${API}/login`, userData);

  return response.data;
};
