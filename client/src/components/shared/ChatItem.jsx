import { Link } from "../styles/StyledComponents";
import { Box, Stack } from "@mui/material";
import Typography from "@mui/material";
import { memo } from "react";
const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChatOpen,
}) => {
  return (
    <div>
      <Link onContextMenu={(e)=>handleDeleteChatOpen(e,_id, groupChat)}>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            padding: "1rem",
            backgroundColor: sameSender ? "black" : "unset",
            color: sameSender ? "white" : "unset",
            position: "relative",
          }}
        >
            {/* Avatar Card */}
            <Stack>
                <Typography>{name}</Typography>
                {newMessageAlert && (
                    <Typography>{newMessageAlert.count} New Message</Typography>
                )}
            </Stack>
            {
                isOnline && <Box sx={{
                    width:"10px",
                    height:"10px",
                    borderRadius:"50%",
                    backgroundColor:"green",
                    position:"absolute",
                    top:"50%",
                    right:"1rem",
                    transform:"translateY(-50%)"
                }}>

                </Box>
            }
        </div>
      </Link>
    </div>
  );
};

export default memo(ChatItem);
