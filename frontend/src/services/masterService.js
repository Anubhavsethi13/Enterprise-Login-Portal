import axios from "axios";

const API = "https://loginhierarchymanagementapi.onrender.com";

const getHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

export const getMasters = async () => {
  const response = await axios.get(`${API}/masters`, {
    headers: getHeaders(),
  });

  return response.data;
};

export const createMaster = async (data) => {
  const response = await axios.post(`${API}/masters`, data, {
    headers: getHeaders(),
  });

  return response.data;
};

export const updateMaster = async (id, data) => {
  const response = await axios.put(`${API}/masters/${id}`, data, {
    headers: getHeaders(),
  });

  return response.data;
};

export const deleteMaster = async (id) => {
  const response = await axios.delete(`${API}/masters/${id}`, {
    headers: getHeaders(),
  });

  return response.data;
};
