import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import Grid from "@mui/material/Grid2";

const AppLayout = (WrappedComponent) => {
    return (props) => {
        return (
            <>
                <Title />
                <Header />
                <Grid container height={"calc(100vh - 4rem)"}>
                    <Grid
                        size={{ sm: 4, md: 3 }}
                        sx={{
                            display: { xs: "none", sm: "block" },
                        }}
                        height={"100%"}
                    >
                        <div>first</div>
                    </Grid>
                    <Grid
                        size={{ sm: 8, md: 5, lg: 6, xs: 12 }}
                        sx={{
                            display: { xs: "none", sm: "block" },
                        }}
                        height={"100%"}
                    >
                        <div>second</div>
                    </Grid>
                    <Grid
                        size={{ md: 4, lg: 3 }}
                        sx={{
                            display: { xs: "none", md: "block" },
                            bgcolor: "rgba(0,0,0,0.85)",
                        }}
                        height={"100%"}
                    >
                        <div>Third</div>
                    </Grid>
                </Grid>
            </>
        );
    };
};

export default AppLayout;
