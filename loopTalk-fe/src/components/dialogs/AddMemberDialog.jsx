import {
    Button,
    Dialog,
    DialogTitle,
    Skeleton,
    Stack,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";

const AddMemberDialog = ({ chatId, isLoading = false, addMember, isLoadingAddMember }) => {
    const [selectedMembers, setSelectedMembers] = useState([])
    const [members, setMembers] = useState(sampleUsers)

    const selectMemberHandler = (id) => {
        if (selectedMembers.includes(id)) {
            setSelectedMembers(selectedMembers.filter((i) => i !== id));
        } else {
            setSelectedMembers([...selectedMembers, id]);
        }
    };

    const closeHandler = () => {
        setSelectedMembers([])
        setMembers([])
    }
    const addMemberSubmitHandler = () => {
        closeHandler()
    }

    return (
        <Dialog open onClose={closeHandler}>
            <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
                <DialogTitle textAlign={"center"}>Add Member</DialogTitle>

                <Stack spacing={"1rem"}>
                    {isLoading ? (
                        <Skeleton />
                    ) :
                        members.length > 0 ? (
                            members.map((i) => (
                                <UserItem
                                    key={i._id}
                                    user={i}
                                    handler={selectMemberHandler}
                                    isAdded={selectedMembers.includes(i._id)}
                                />
                            ))
                        ) : (
                            <Typography textAlign={"center"}>No Friends</Typography>
                        )}
                </Stack>

                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-evenly"}
                >
                    <Button color="error"
                        onClick={closeHandler}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={addMemberSubmitHandler}
                        variant="contained"
                    // disabled={isLoadingAddMembers}
                    >
                        Submit Changes
                    </Button>
                </Stack>
            </Stack>
        </Dialog>
    )
}

export default AddMemberDialog
