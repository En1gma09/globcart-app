import React, { useContext } from "react";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import App from "../App";

import { Registration, Login, Home, Products } from "../pages";

import { AuthProvider, AuthContext } from "../auth/auth";

export default function AppRoutes() {
    const Private = ({ children }: any) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return <div className="loading">Carregando...</div>
        }

        if (!authenticated) {
            return <Navigate to="/" />;
        }

        return children;
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Registration />} />
                    {/* <Route path="/" element={<App />} /> */}
                    <Route path="/home" element={<Private><Home /></Private>} />
                    <Route path="/products" element={<Private><Products /></Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}