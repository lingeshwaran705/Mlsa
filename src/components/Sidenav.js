import React, { useEffect } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Inner, Menu, CloseIcon } from "../styledComponents/HomeStyles";
import { useSelector, useDispatch } from "react-redux";
import { openSidebar } from "../features/home/sideBar";
import { setPage } from "../features/home/Route";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Layer3d from "./animations/Layer3d";

const menu = [
  { id: 1, icon: "fas fa-home", title: "Home" },
  { id: 2, icon: "fas fa-users", title: "Core Team" },
  { id: 3, icon: "far fa-images", title: "Gallery" },
  { id: 4, icon: "fas fa-award", title: "Past Events" },
  { id: 5, icon: "far fa-calendar-check", title: "Registeration" },
];

function Sidenav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sidebar = useSelector((state) => state.sidebar.value);
  const page = useSelector((state) => state.page.value);

  const clickHandler = (p) => {
    navigate(p);

    setTimeout(() => {
      dispatch(setPage(p));
      dispatch(openSidebar(false));
    }, 400);
  };

  useEffect(() => {
    sidebar
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "hidden auto");
  }, [sidebar]);

  return (
    <>
      <Menu open={sidebar}>
        <List sx={{ width: "100%", zIndex: 5 }}>
          {menu.map((item) => {
            return (
              <Inner active={page} key={item.id} title={item.title}>
                <ListItem
                  onClick={() =>
                    clickHandler(item.title === "Home" ? "/" : item.title)
                  }
                  sx={{ width: "100%" }}
                  button
                >
                  <ListItemIcon>
                    <i className={item.icon}></i>
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
              </Inner>
            );
          })}
          <div className="close"></div>
        </List>
        <Layer3d />
        <CloseIcon>
          <IconButton
            onClick={() => dispatch(openSidebar(false))}
            sx={{ color: "white" }}
          >
            <ArrowForwardIcon sx={{ width: "25px" }} />
          </IconButton>
        </CloseIcon>
      </Menu>
    </>
  );
}

export default React.memo(Sidenav);
