import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import {
    Dialog,
    DialogTitle,
    InputAdornment,
    List,
    Stack,
    TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import UserItem from "../shared/UserItem";
import { sampleUsers } from "../../constants/SampleData";


const Search = () => {

    const [users, setUsers] = useState(sampleUsers);
    const search = useInputValidation("");

    const addFriendHandler = async (id) => {
        console.log(id);
    };

    const searchCloseHandler = () => console.log("close");
    return (
        <Dialog open={true} onClose={searchCloseHandler}>
            <Stack p={"2rem"} direction={"column"} width={"25rem"}>
                <DialogTitle textAlign={"center"}>Find People</DialogTitle>
                <TextField
                    label=""
                    value={search.value}
                    onChange={search.changeHandler}
                    variant="outlined"
                    size="small"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />

                <List>
                    {users.map((i) => (
                        <UserItem
                            user={i}
                            key={i._id}
                            handler={addFriendHandler}
                            // handlerIsLoading={isLoadingSendFriendRequest}
                        />
                    ))}
                </List>
            </Stack>
        </Dialog>
    )
}

export default Search
