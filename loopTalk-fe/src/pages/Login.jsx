import React from "react";
import { Container, Paper } from "@mui/material";

const Login = () => {
    return (
        <Container
            component={"main"}
            maxWidth={"xs"}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 4,
                }}
            >
                
            </Paper>
        </Container>
    );
};

export default Login;
