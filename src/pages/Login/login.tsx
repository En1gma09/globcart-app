import React, { useContext, useState } from "react";
import { Avatar, Button, Grid, Link, Paper, TextField } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../auth/auth";

import "./login.css";

export default function Login() {
    const { authenticated, login } = useContext(AuthContext);

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = (event: any) => {
        event.preventDefault();

        login(email, password);
    }

    const handleCreate = () => {
        navigate("/signup");
    }

    return (
        <Grid>
            <Paper elevation={10} className="paperStyle">
                <Grid align="center" className="containerGrid">
                    <Grid className="loginSignupStyle">
                        <Link href="#" color="#828282" underline="none" className="loginSpanStyle" style={{ marginRight: "0.875rem" }}>Login</Link>
                        <Link href="/signup" color="#828282" underline="none" className="signupStyle">Sign Up</Link>
                    </Grid>
                    {/* <Avatar style={{backgroundColor: "#1bbd7e"}}></Avatar> */}
                    <Grid className="logoGridStyle">
                        <h2 className="logoStyle">GlobCart</h2>
                        <span className="logoSpanStyle">.com.br</span>
                    </Grid>
                    <Grid className="formTitleContainer">
                        <span className="formTitleSpan">Sign-In</span>
                    </Grid>
                    <Grid>
                        <TextField
                            required
                            id="outlined-password-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            label="Email"
                            type="email"
                            helperText="Some important text"
                            className="emailTextField"
                        />
                        <TextField
                            required
                            id="outlined-password-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            label="Password"
                            type="password"
                            helperText="Some important text"
                            className="passwordTextField"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid className="buttonGrid">
                        <Button onClick={handleClick} className="signInBtn" variant="contained">Sign-In</Button>
                    </Grid>
                </Grid>
            </Paper>
            <Grid align="center" className="newToGridSpan">
                <span>New to GlobCart?</span>
            </Grid>
            <Grid align="center">
                <Button onClick={handleCreate} className="signUpBtn" variant="contained">Create your GlobCart account</Button>
            </Grid>
        </Grid>
    );
}