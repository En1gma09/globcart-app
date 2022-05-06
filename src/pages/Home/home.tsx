import React, { useContext } from "react";

import { AuthContext } from "../../auth/auth";

export default function Home() {
    const { authenticated, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

    return (
        <>
            <h1>Home Page</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}