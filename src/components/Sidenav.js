import React, { useEffect } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Footer, Inner, Menu } from "../styledComponents/HomeStyles";
import { useSelector, useDispatch } from "react-redux";
import { openSidebar } from "../features/home/sideBar";
import { setPage } from "../features/home/Route";
import { useNavigate } from "react-router-dom";
import RandomQuote from "./RandomQuote";

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
        <List sx={{ width: "100%" }}>
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
        <Footer>
          <div className="glass">
            <RandomQuote />
            <IconButton
              onClick={() => dispatch(openSidebar(false))}
              sx={{ color: "white" }}
            >
              <i className="fas fa-arrow-right"></i>{" "}
            </IconButton>
          </div>
        </Footer>
      </Menu>
    </>
  );
}

export default React.memo(Sidenav);
