import {
    AttachFile as AttachFileIcon,
    Send as SendIcon,
} from "@mui/icons-material";
import { IconButton, Skeleton, Stack } from "@mui/material";
import React, {
    Fragment,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import AppLayout from '../components/layout/AppLayout';
import { InputBox } from "../components/styles/StyledComponent";
import { grayColor, orange } from "../constants/color";
import FileMenu from "../components/dialogs/FileMenu";
import { sampleMessage } from "../constants/SampleData";
import MessageComponent from "../components/shared/MessageComponent";

const Chat = () => {
    const containerRef = useRef(null)

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("submit")
    }

    const user = {
        _id: 'sdfsdfsdf',
        name: "John Doe",
    }

    return (
        <Fragment>
            <Stack
                ref={containerRef}
                boxSizing={"border-box"}
                padding={"1rem"}
                spacing={"1rem"}
                bgcolor={grayColor}
                height={"90%"}
                sx={{
                    overflowX: "hidden",
                    overflowY: "auto",
                }}
            >
                {
                    sampleMessage.map((message, index) => (
                        <MessageComponent message={message} user={user} key={message._id} />
                    ))
                }
            </Stack>
            <form
                style={{
                    height: "10%",
                }}
                onSubmit={submitHandler}
            >
                <Stack
                    direction={"row"}
                    height={"100%"}
                    padding={"1rem"}
                    alignItems={"center"}
                    position={"relative"}
                >
                    <IconButton
                        sx={{
                            position: "absolute",
                            left: "1.5rem",
                            rotate: "30deg",
                        }}
                    // onClick={handleFileOpen}

                    >
                        <AttachFileIcon />
                    </IconButton>

                    <InputBox
                        placeholder="Type Message Here..."
                    // value={message}
                    // onChange={messageOnChange}
                    />

                    <IconButton
                        type="submit"
                        sx={{
                            rotate: "-30deg",
                            bgcolor: orange,
                            color: "white",
                            marginLeft: "1rem",
                            padding: "0.5rem",
                            "&:hover": {
                                bgcolor: "error.dark",
                            },
                        }}
                    >
                        <SendIcon />
                    </IconButton>
                </Stack>
            </form>
            <FileMenu />
        </Fragment>
    )
}

export default AppLayout(Chat)
