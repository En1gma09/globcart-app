import axios from "axios";

export const api = axios.create({
    baseURL: "https://localhost:7016",
});

export const signUp = async (name: string, email: string, password: string) => {
    return api.post("/api/users", { name, email, password });
}

export const createSession = async (email: string, password: string) => {
    return api.post("/api/auth/token", { email, password });
}

export const getUsers = async () => {
    return api.get("/api/users");
}

export const getProducts = async () => {
    return await api.get("/api/products");
}