import React from "react";
import {
  Container,
  Logo,
  BarIcon,
  NavBar,
  NavLink,
} from "../styledComponents/HomeStyles";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { openSidebar } from "../features/home/sideBar";
import { setPage } from "../features/home/Route";
import { useNavigate } from "react-router-dom";
const Sidenav = React.lazy(() => import("./Sidenav"));

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const page = useSelector((state) => state.page.value);

  const clickHandler = (p) => {
    navigate(p);
    dispatch(setPage(p));
  };

  return (
    <React.Suspense fallback="Loading...">
      <Container>
        <Logo>MLSA</Logo>
        <NavBar>
          {["Home", "Core Team", "Gallery", "Past Events"].map((item) => {
            return (
              <NavLink
                key={item}
                active={page}
                title={item}
                onClick={() => clickHandler(item)}
              >
                {" "}
                {item}
              </NavLink>
            );
          })}
        </NavBar>
        <BarIcon>
          <IconButton
            onClick={() => dispatch(openSidebar(true))}
            sx={{ color: "white" }}
          >
            <MenuIcon sx={{ fill: "white" }} />
          </IconButton>
        </BarIcon>
        <Sidenav />
      </Container>
    </React.Suspense>
  );
}

export default React.memo(Navbar);
