import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import Grid from "@mui/material/Grid2";
import ChatList from "../specific/ChatList";
import { samplechats } from "../../constants/SampleData";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";

const AppLayout = (WrappedComponent) => {

    return (props) => {
        const params = useParams();
        const chatId = params.chatId;
        const handleDeleteChat = (e, chatId, groupChat) => {
            // e.preventDefault()
            // dispatch(setIsDeleteMenu(true));
            // dispatch(setSelectedDeleteChat({ chatId, groupChat }));
            // deleteMenuAnchor.current = e.currentTarget;
            console.log("delete chat");
        };

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
                        <ChatList
                            w="70vw"
                            chats={samplechats}
                            chatId={chatId}
                            handleDeleteChat={handleDeleteChat}
                        // newMessagesAlert={newMessagesAlert}
                        // onlineUsers={onlineUsers}
                        />
                    </Grid>
                    <Grid
                        size={{ sm: 8, md: 5, lg: 6, xs: 12 }}
                        sx={{
                            display: { xs: "none", sm: "block" },
                        }}
                        height={"100%"}
                    >
                        <WrappedComponent {...props} />
                    </Grid>
                    <Grid
                        size={{ md: 4, lg: 3 }}
                        sx={{
                            display: { xs: "none", md: "block" },
                            bgcolor: "rgba(0,0,0,0.85)",
                        }}
                        height={"100%"}
                    >
                        <Profile />
                    </Grid>
                </Grid>
            </>
        );
    };
};

export default AppLayout;
