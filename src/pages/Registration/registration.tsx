import React, { useContext, useState } from "react";
import { Button, Grid, Link, Paper, TextField } from "@mui/material";

import { AuthContext } from "../../auth/auth";

import "./registration.css"

export default function Registration() {
    const { authenticated, signup, login } = useContext(AuthContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = (event: any) => {
        event.preventDefault();

        signup(name, email, password);
    }

    return (
        <Grid>
            <Paper elevation={10} className="signUpPaper">
                <Grid align="center" className="containerGrid">
                    <Grid className="loginSignupStyle">
                        <Link href="/" color="#828282" underline="none" className="loginSpanStyle" style={{ marginRight: "0.875rem" }}>Login</Link>
                        <Link href="/signup" color="#828282" underline="none" className="signupStyle">Sign Up</Link>
                    </Grid>
                    {/* <Avatar style={{backgroundColor: "#1bbd7e"}}></Avatar> */}
                    <Grid className="logoGridStyle">
                        <h2 className="logoStyle">GlobCart</h2>
                        <span className="logoSpanStyle">.com.br</span>
                    </Grid>
                    <Grid className="formTitleContainer">
                        <span className="formTitleSpan">Sign Up</span>
                    </Grid>
                    <Grid>
                        <TextField
                            required
                            id="outlined-password-input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            label="Name"
                            type="text"
                            helperText="Some important text"
                            className="nameTextField"
                        />
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
                        <Button onClick={handleSignUp} className="signInBtn" variant="contained">Create account</Button>
                    </Grid>
                </Grid>
                <Grid className="alreadySpanStyle">
                    <span>Already have an account?</span>
                    <Link href="/" color="#29B4E0">
                        {'Sign in'}
                    </Link>
                </Grid>
            </Paper>
        </Grid>
    );
}