import axios from "axios";

const API = "https://loginhierarchymanagementapi.onrender.com";

const getHeaders = () => {
  const token = localStorage.getItem("token");

  return {
    Authorization: `Bearer ${token}`,
  };
};

export const getUsers = async (page = 1) => {
  const response = await axios.get(`${API}/users?page=${page}&limit=5`, {
    headers: getHeaders(),
  });

  return response.data;
};

export const createUser = async (userData) => {
  const response = await axios.post(`${API}/users`, userData, {
    headers: getHeaders(),
  });

  return response.data;
};

export const deleteUser = async (userId) => {
  const response = await axios.delete(`${API}/users/${userId}`, {
    headers: getHeaders(),
  });

  return response.data;
};

export const updateUser = async (userId, userData) => {
  const response = await axios.put(`${API}/users/${userId}`, userData, {
    headers: getHeaders(),
  });

  return response.data;
};
