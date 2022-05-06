import axios from "axios";

export const api = axios.create({
    baseURL: "https://localhost:7016",
});

export const createSession = async (email: string, password: string) => {
    return api.post('/api/auth/token', { email, password });
}