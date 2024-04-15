import { AppBar, Box, Toolbar } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";

import { orange } from "../constants/color";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Suspense, lazy, useState } from "react";
const SearchDialogue = lazy(() => import("../specific/Search.jsx"));
const NotificationDialogue = lazy(() =>
  import("../specific/Notifications.jsx")
);
const NewGroupDialogue = lazy(() => import("../specific/NewGroup.jsx"));

const Header = () => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  function handleMobile() {
    setIsMobile((prev) => !prev);
  }

  function openSearchDialogue() {
    setIsSearch((prev) => !prev);
  }

  function openNewGroup() {
    setIsNewGroup((prev) => !prev);
  }

  function logoutHandler() {
    console.log("Handle Mobile");
  }

  function openNotification() {
    setIsNotification((prev) => !prev);
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
              <IconBtn
                title={"Menu"}
                onClick={handleMobile}
                icon={<MenuIcon />}
              />
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
      {isSearch && (
        <Suspense
          fallback={
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
            ></Backdrop>
          }
        >
          <SearchDialogue />
        </Suspense>
      )}
      {isNotification && (
        <Suspense
          fallback={
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
            ></Backdrop>
          }
        >
          <NotificationDialogue />
        </Suspense>
      )}

      {isNewGroup && (
        <Suspense
          fallback={
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
            ></Backdrop>
          }
        >
          <NewGroupDialogue />
        </Suspense>
      )}
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
