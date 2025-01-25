import {
    Avatar,
    Button,
    Dialog,
    DialogTitle,
    ListItem,
    Skeleton,
    Stack,
    Typography,
} from "@mui/material";
import React, { memo } from "react";
import { sampleNotifications } from "../../constants/SampleData";


const Notifications = () => {
    const closeHandler = () => console.log("close");
    const friendRequestHandler = ({ _id, accept }) => {
        console.log(accept);
    }
    return (
        <Dialog open={true} onClose={closeHandler}>
            <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
                <DialogTitle>Notifications</DialogTitle>

                {/* {isLoading ? (
                    <Skeleton />
                ) : ( */}
                <>
                    {sampleNotifications.length > 0 ? (
                        sampleNotifications?.map(({ sender, _id }) => (
                            <NotificationItem
                                sender={sender}
                                _id={_id}
                                handler={friendRequestHandler}
                                key={_id}
                            />
                        ))
                    ) : (
                        <Typography textAlign={"center"}>0 notifications</Typography>
                    )}
                </>
                {/* )} */}
            </Stack>
        </Dialog>
    )
}

const NotificationItem = memo(({ sender, _id, handler }) => {
    const { name, avatar } = sender;
    return (
        <ListItem>
            <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={"1rem"}
                width={"100%"}
            >
                <Avatar />

                <Typography
                    variant="body1"
                    sx={{
                        flexGlow: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "100%",
                    }}
                >
                    {`${name} sent you a friend request.`}
                </Typography>

                <Stack
                    direction={{
                        xs: "column",
                        sm: "row",
                    }}
                >
                    <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
                    <Button color="error" onClick={() => handler({ _id, accept: false })}>
                        Reject
                    </Button>
                </Stack>
            </Stack>
        </ListItem>
    );
});


export default Notifications
