import axios from "axios";

const API = "https://loginhierarchymanagementapi.onrender.com";

const getHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

export const getOperations = async () => {
  const response = await axios.get(`${API}/operations`, {
    headers: getHeaders(),
  });

  return response.data;
};

export const createOperation = async (data) => {
  const response = await axios.post(`${API}/operations`, data, {
    headers: getHeaders(),
  });

  return response.data;
};

export const updateOperation = async (id, data) => {
  const response = await axios.put(`${API}/operations/${id}`, data, {
    headers: getHeaders(),
  });

  return response.data;
};

export const deleteOperation = async (id) => {
  const response = await axios.delete(`${API}/operations/${id}`, {
    headers: getHeaders(),
  });

  return response.data;
};
