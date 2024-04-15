import { Stack } from "@mui/material";

const Chatlist = ({
    w = "100%",
    chats = [],
    chatId,
    onlineUsers = [],
    newMessageAlert = [{ chatId: "", count: 0 }],
    handleDeleteChat,
  }) => {
  return (
    <Stack width={w} direction={"column"}>
      {chats?.map((data, i) => (
        <div key={i}>{data}</div>
      ))}
    </Stack>
  )
}

export default Chatlist