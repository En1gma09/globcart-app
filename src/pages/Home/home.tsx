import React, { useContext } from "react";
import ProductCard from "../../components/ProductCard";

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { AuthContext } from "../../auth/auth";

import "./home.css";

export default function Home() {
    const pages = ['Orders', 'Products'];
    const settings = ['Profile', 'Account', 'Home', 'Logout'];

    const { authenticated, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

    // return (
    //     <>
    //         <h1>Home Page</h1>
    //         <button onClick={handleLogout}>Logout</button>
    //     </>
    // );

    return (
        <>
            Home
        </>
    );
}