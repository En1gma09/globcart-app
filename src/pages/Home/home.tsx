import React, { useContext } from "react";

import { AuthContext } from "../../auth/auth";

import "./home.css";

export default function Home() {
    const { authenticated, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}