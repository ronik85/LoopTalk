import { Skeleton, Stack } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";

const LayoutLoader = () => {
    return (
        <Grid container spacing={"1rem"}>
            <Grid
                size={{ sm: 4, md: 3 }}
                sx={{
                    display: { xs: "none", sm: "block" },
                }}
                height={"100%"}
            >
                <Skeleton variant="rectangular" height={"100vh"} />
            </Grid>
            <Grid size={{ sm: 8, md: 5, lg: 6, xs: 12 }} height={"100%"}>
                <Stack spacing={"1rem"}>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <Skeleton key={index} variant="rounded" height={"5rem"} />
                    ))}
                </Stack>
            </Grid>
            <Grid
                size={{ md: 4, lg: 3 }}
                height={"100%"}
                sx={{
                    display: { xs: "none", md: "block" },
                }}
            >
                <Skeleton variant="rectangular" height={"100vh"} />
            </Grid>
        </Grid>
    );
};

export { LayoutLoader };
