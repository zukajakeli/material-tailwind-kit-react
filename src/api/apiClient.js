import axios from "axios";

export const BASE_URL = "http://localhost:8080";
export const getToken = () => localStorage.getItem("authToken");
export const getAuthorizationHeader = () => `Bearer ${getToken()}`;

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: {
      toString() {
        return `Bearer ${localStorage.getItem("authToken")}`;
      },
    },
  },
});