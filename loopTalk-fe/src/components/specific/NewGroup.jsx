import { useInputValidation } from "6pp";
import {
    Button,
    Dialog,
    DialogTitle,
    Skeleton,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import UserItem from "../shared/UserItem";
import { sampleUsers } from "../../constants/SampleData";
import toast from "react-hot-toast";


const NewGroup = () => {
    const groupName = useInputValidation("");
    const [selectedMembers, setSelectedMembers] = useState([]);
    const selectMemberHandler = (id) => {
        if (selectedMembers.includes(id)) {
            setSelectedMembers(selectedMembers.filter((i) => i !== id));
        } else {
            setSelectedMembers([...selectedMembers, id]);
        }
    };

    const submitHandler = () => {
        console.log("submit");
    };

    const closeHandler = () => {
        console.log("close");
    };

    return (
        <Dialog onClose={closeHandler} open={true}>
            <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"2rem"}>
                <DialogTitle textAlign={"center"} variant="h4">
                    New Group
                </DialogTitle>

                <TextField
                    label="Group Name"
                    value={groupName.value}
                    onChange={groupName.changeHandler}
                />

                <Typography variant="body1">Members</Typography>

                <Stack>
                    {
                        // isLoading ? (
                        //     <Skeleton />
                        // ) : (
                        sampleUsers?.map((i) => (
                            <UserItem
                                user={i}
                                key={i._id}
                                handler={selectMemberHandler}
                                isAdded={selectedMembers.includes(i._id)}
                            />
                        ))
                        // )
                    }
                </Stack>

                <Stack direction={"row"} justifyContent={"space-evenly"}>
                    <Button
                        variant="text"
                        color="error"
                        size="large"
                        onClick={closeHandler}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={submitHandler}
                    // disabled={isLoadingNewGroup}
                    >
                        Create
                    </Button>
                </Stack>
            </Stack>
        </Dialog>
    )
}

export default NewGroup
