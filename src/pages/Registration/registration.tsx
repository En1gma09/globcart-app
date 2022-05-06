import { Grid, Link, Paper } from "@mui/material";
import React from "react";

export default function Registration() {
    return (
        <Grid>
            <Paper elevation={10} className="paperStyle">
                <Grid align="center" className="containerGrid">
                    <Grid className="loginSignupStyle">
                        <Link href="/" color="#828282" underline="none" className="loginSpanStyle" style={{ marginRight: "0.875rem"}}>Login</Link>
                        <Link href="/signup" color="#828282" underline="none" className="signupStyle">Sign Up</Link>
                    </Grid>
                    {/* <Avatar style={{backgroundColor: "#1bbd7e"}}></Avatar> */}
                    <Grid className="logoGridStyle">
                        <h2 className="logoStyle">GlobCart</h2>
                        <span className="logoSpanStyle">.com.br</span>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
}