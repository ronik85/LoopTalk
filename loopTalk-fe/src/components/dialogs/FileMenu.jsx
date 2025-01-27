import { ListItemText, Menu, MenuItem, MenuList, Tooltip } from "@mui/material";
import React, { useRef } from "react";
import {
    AudioFile as AudioFileIcon,
    Image as ImageIcon,
    UploadFile as UploadFileIcon,
    VideoFile as VideoFileIcon,
} from "@mui/icons-material";
import toast from "react-hot-toast";

const FileMenu = ({ anchorE1 }) => {

    const closeFileMenu = () => console.log("close file menu");

    return (
        // <Menu open={true} onClose={closeFileMenu}>
        //     <div
        //         style={{
        //             width: "10rem",
        //         }}
        //     >
        //         <MenuList>
        //             <MenuItem onClick={selectImage}>
        //                 <Tooltip title="Image">
        //                     <ImageIcon />
        //                 </Tooltip>
        //                 <ListItemText style={{ marginLeft: "0.5rem" }}>Image</ListItemText>
        //                 <input
        //                     type="file"
        //                     multiple
        //                     accept="image/png, image/jpeg, image/gif"
        //                     style={{ display: "none" }}
        //                     onChange={(e) => fileChangeHandler(e, "Images")}
        //                     ref={imageRef}
        //                 />
        //             </MenuItem>

        //             <MenuItem onClick={selectAudio}>
        //                 <Tooltip title="Audio">
        //                     <AudioFileIcon />
        //                 </Tooltip>
        //                 <ListItemText style={{ marginLeft: "0.5rem" }}>Audio</ListItemText>
        //                 <input
        //                     type="file"
        //                     multiple
        //                     accept="audio/mpeg, audio/wav"
        //                     style={{ display: "none" }}
        //                     onChange={(e) => fileChangeHandler(e, "Audios")}
        //                     ref={audioRef}
        //                 />
        //             </MenuItem>

        //             <MenuItem onClick={selectVideo}>
        //                 <Tooltip title="Video">
        //                     <VideoFileIcon />
        //                 </Tooltip>
        //                 <ListItemText style={{ marginLeft: "0.5rem" }}>Video</ListItemText>
        //                 <input
        //                     type="file"
        //                     multiple
        //                     accept="video/mp4, video/webm, video/ogg"
        //                     style={{ display: "none" }}
        //                     onChange={(e) => fileChangeHandler(e, "Videos")}
        //                     ref={videoRef}
        //                 />
        //             </MenuItem>

        //             <MenuItem onClick={selectFile}>
        //                 <Tooltip title="File">
        //                     <UploadFileIcon />
        //                 </Tooltip>
        //                 <ListItemText style={{ marginLeft: "0.5rem" }}>File</ListItemText>
        //                 <input
        //                     type="file"
        //                     multiple
        //                     accept="*"
        //                     style={{ display: "none" }}
        //                     onChange={(e) => fileChangeHandler(e, "Files")}
        //                     ref={fileRef}
        //                 />
        //             </MenuItem>
        //         </MenuList>
        //     </div>
        // </Menu>
        <></>
    )
}

export default FileMenu
