import React, { useEffect } from "react";
import {
  CardActionArea,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Inner, Menu } from "../styledComponents/HomeStyles";
import { useSelector, useDispatch } from "react-redux";
import { openSidebar } from "../features/home/sideBar";
import { setPage } from "../features/home/Route";
import { useNavigate } from "react-router-dom";
import Layer3d from "./animations/Layer3d";

const menu = [
  { id: 1, icon: "fas fa-home", title: "Home" },
  { id: 2, icon: "fas fa-users", title: "Core Team" },
  { id: 3, icon: "far fa-images", title: "Gallery" },
  { id: 4, icon: "fas fa-award", title: "Past Events" },
  { id: 5, icon: "far fa-calendar-check", title: "Registeration" },
  { id: 6, icon: "fas fa-blog", title: "Blogs" },
];

function Sidenav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sidebar = useSelector((state) => state.sidebar.value);
  const page = useSelector((state) => state.page.value);
  const domain = useSelector((state) => state.domain.value);

  const clickHandler = (p) => {
    dispatch(setPage(p));
    dispatch(openSidebar(false));
    setTimeout(() => {
      navigate(p);
    }, 400);
  };

  useEffect(() => {
    if (!domain.open) {
      sidebar
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "hidden auto");
    }
  }, [sidebar]);

  useEffect(() => {
    if (page === "Core Team") {
      document.body.style.background = "black";
    } else {
      document.body.style.background = "white";
    }
  }, [page]);

  return (
    <>
      <Menu open={sidebar}>
        <List sx={{ width: "100%", zIndex: 5 }}>
          {menu.map((item) => {
            return (
              <Inner active={page} key={item.id} title={item.title}>
                <CardActionArea disableRipple>
                  <ListItem
                    onClick={() =>
                      clickHandler(item.title === "Home" ? "/" : item.title)
                    }
                    sx={{ width: "100%" }}
                  >
                    <a href="#home">
                      <ListItemButton disableGutters>
                        <ListItemIcon>
                          <i className={item.icon}></i>
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                      </ListItemButton>
                    </a>
                  </ListItem>
                </CardActionArea>
              </Inner>
            );
          })}
          <div className="close"></div>
        </List>
        <Layer3d />
      </Menu>
    </>
  );
}

export default React.memo(Sidenav);
