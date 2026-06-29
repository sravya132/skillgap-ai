import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

const authService = {

  login: async (loginData) => {
    const response = await API.post("/api/auth/login", loginData);
    return response.data;
  },

  register: async (registerData) => {
    const response = await API.post("/api/auth/register", registerData);
    return response.data;
  },

};

export default authService;