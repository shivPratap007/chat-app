import { AppBar, Box, Toolbar } from "@mui/material";
import { orange } from "../constants/color";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();

  const[isMobile,setIsMobile]=useState(false);
  const[isSearch,setIsSearch]=useState(false);
  const[isNewGroup,setIsNewGroup]=useState(false);
  const[isNotification,setIsNotification]=useState(false);

  function handleMobile() {
    setIsMobile(prev=>!prev);
  }

  function openSearchDialogue() {
    setIsSearch(prev=>!prev);
  }

  function openNewGroup() {
    setIsNewGroup(prev=>!prev);
  }

  function logoutHandler() {
    console.log("Handle Mobile");
  }

  function openNotification() {
    setIsNotification(prev=>!prev);
  }

  const navigateToGroup = () => navigate("/groups");

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: orange }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Chit Chat
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton style={{ color: "white" }} onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconBtn
                title={"Search"}
                onClick={openSearchDialogue}
                icon={<SearchIcon />}
              />
              <IconBtn
                title={"New Group"}
                onClick={openNewGroup}
                icon={<AddIcon />}
              />
              <IconBtn
                title={"Manage Group"}
                onClick={navigateToGroup}
                icon={<GroupAddIcon />}
              />
              <IconBtn
                title={"Open Notification"}
                onClick={openNotification}
                icon={<NotificationsNoneIcon />}
              />
              <IconBtn
                title={"Logout"}
                onClick={logoutHandler}
                icon={<LogoutIcon />}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

function IconBtn({ title, onClick, icon }) {
  return (
    <>
      <Tooltip title={title}>
        <IconButton style={{ color: "white" }} onClick={onClick}>
          {icon}
        </IconButton>
      </Tooltip>
    </>
  );
}
export default Header;
