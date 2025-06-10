import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:8080";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Send cookies on cross-origin requests
});

// Endpoint functions
export const signIn = (data) => api.post("/auth/signin", data);
export const signUp = (data) => api.post("/auth/signup", data);

export default api;
