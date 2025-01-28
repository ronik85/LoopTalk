import {
    Close as CloseIcon,
    Dashboard as DashboardIcon,
    ExitToApp as ExitToAppIcon,
    Groups as GroupsIcon,
    ManageAccounts as ManageAccountsIcon,
    Menu as MenuIcon,
    Message as MessageIcon,
} from "@mui/icons-material";
import {
    Box,
    Drawer,
    IconButton,
    Stack,
    Typography,
    styled,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import { Link as LinkComponent, Navigate, useLocation } from "react-router-dom";
import { grayColor, matBlack } from "../../constants/color";

const Link = styled(LinkComponent)`
  text-decoration: none;
  border-radius: 2rem;
  padding: 1rem 2rem;
  color: black;
  &:hover {
    color: rgba(0, 0, 0, 0.54);
  }
`;

const adminTabs = [
    {
        name: "Dashboard",
        path: "/admin/dashboard",
        icon: <DashboardIcon />,
    },
    {
        name: "Users",
        path: "/admin/users",
        icon: <ManageAccountsIcon />,
    },
    {
        name: "Chats",
        path: "/admin/chats",
        icon: <GroupsIcon />,
    },
    {
        name: "Messages",
        path: "/admin/messages",
        icon: <MessageIcon />,
    },
];

const Sidebar = () => {
    const location = useLocation();
    console.log(location);
    // const dispatch = useDispatch();

    const logoutHandler = () => {
        // dispatch(adminLogout());
        console.log("logout");
    };

    return (
        <Stack direction={"column"} p={"3rem"} spacing={"3rem"}>
            <Typography variant="h5" textTransform={"uppercase"}>
                Loop Talk
            </Typography>

            <Stack spacing={"1rem"}>
                {adminTabs.map((tab) => (
                    <Link
                        key={tab.path}
                        to={tab.path}
                        sx={
                            location.pathname === tab.path && {
                                bgcolor: matBlack,
                                color: "white",
                                ":hover": { color: "white" },
                            }
                        }
                    >
                        <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                            {tab.icon}

                            <Typography>{tab.name}</Typography>
                        </Stack>
                    </Link>
                ))}

                <Link onClick={logoutHandler}>
                    <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                        <ExitToAppIcon />
                        <Typography>Logout</Typography>
                    </Stack>
                </Link>
            </Stack>
        </Stack>
    );
};
const isAdmin = true
const AdminLayout = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);
    const handleMobile = () => {
        setIsMobile((prev) => !prev);
    };
    const handleClose = () => setIsMobile(false);

    if (!isAdmin) return <Navigate to="/admin" />;

    return (
        <Grid container minHeight={"100vh"}>
            <Box
                sx={{
                    display: { xs: "block", md: "none" },
                    position: "fixed",
                    right: "1rem",
                    top: "1rem",
                }}
            >
                <IconButton onClick={handleMobile}>
                    {isMobile ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
            </Box>

            <Grid
                size={{ md: 4, lg: 3 }}
                sx={{ display: { xs: "none", md: "block" } }}
            >
                <Sidebar />
            </Grid>

            <Grid
                size={{ md: 8, lg: 9, xs: 12 }}
                sx={{
                    bgcolor: grayColor,
                }}
            >
                {children}
            </Grid>

            <Drawer
                sx={{
                    display: {
                        xs: "block",
                        sm: "none",
                    },
                }}
                open={isMobile}
                onClose={handleClose}
            >
                <Sidebar />
            </Drawer>
        </Grid>
    );
};

export default AdminLayout;
