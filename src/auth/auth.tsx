import React, { useState, useEffect, createContext } from "react";

import { useNavigate } from "react-router-dom";

import { api, createSession, signUp } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);
    }, []);

    const signup = async (name: string, email: string, password: string) => {
        const response = await signUp(name, email, password);
        const registeredUser = response.data;

        setUser(registeredUser);
        navigate("/");
    }

    const login = async (email: string, password: string) => {
        const response = await createSession(email, password);

        const loggedUser = response.data.user;
        const token = response.data.token;

        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", token);

        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        setUser(loggedUser);
        navigate("/home");

    };

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        api.defaults.headers.common["Authorization"] = "";

        setUser(null);
        navigate("/")
    };

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, loading, signup, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}