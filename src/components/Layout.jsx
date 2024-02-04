import React from "react";
import { styled } from "@mui/system";
import { Drawer, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Toolbar } from "@mui/material";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { useNavigate, useNavigation } from "react-router-dom";

const MyStyledComponent = styled("div")({
  backgroundColor: "#f9f9f9",
  width: "100%",
  position: "relative", // Make sure to set the position to relative
  zIndex: 1, // Set a higher zIndex for the main content
});

const DrawerComponent = styled("div")({
  width: "240px",
  position: "fixed", // Set the position to fixed
  zIndex: 2, // Set a lower zIndex for the Drawer content
});
const drawerWidth = 240;
export default function Layout({ children }) {
  const navigate = useNavigate();
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];
  return (
    <div style={{ display: "flex" }}>
      {/* app bar */}
      <div>app bar</div>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <div>
          <Typography variant="h5">Legends Notes</Typography>
        </div>

        {/* links/list section */}
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} onClick={() => navigate(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <MyStyledComponent>
        <div>{children}</div>
      </MyStyledComponent>
    </div>
  );
}
