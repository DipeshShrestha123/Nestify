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
export const getListingById = (id) => api.get(`/listdata/${id}`);
export const getUserData = () => api.get("/auth/me");
export const getAllListings = () => api.get("/listdata");
export const addPost = (data) => api.post("/listdata/addpost", data);
export const updateProfile = (data) => api.put("/listdata/updateprofile", data);

export default api;
