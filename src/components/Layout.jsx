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
import Avatar from "@mui/material/Avatar";
import { Toolbar } from "@mui/material";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

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
      <AppBar
        position="fixed"
        elevation={0}
        // color="primary"
        sx={{
          width: `calc(100% - 240px)`,
          marginLeft: "240px",
        }}
      >
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>
            Today is the {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography sm={{ align: "right" }}>Asim khan</Typography>
          <Avatar src="/mario-av.png" sx={{ marginLeft: "10px" }} />
        </Toolbar>
      </AppBar>
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
        <div style={{ marginTop: "100px" }}></div>
        <div>{children}</div>
      </MyStyledComponent>
    </div>
  );
}
