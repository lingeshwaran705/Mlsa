import React from "react";
import styled, { keyframes, css } from "styled-components";
import DomainCard from "./DomainCard";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { setDomain, setOpen } from "../features/home/domain";

function Domains() {
  const domain = useSelector((state) => state.domain.value);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(setOpen(false));
    document.body.style.overflow = "hidden auto";
  };

  return (
    <Container isOpen={domain.open}>
      <Header>
        <IconButton onClick={clickHandler} sx={{ color: "white" }}>
          <ArrowBackIcon
            sx={{ fill: "white", height: "30px", width: "30px" }}
          />
        </IconButton>
      </Header>
      {domain.data.map((item) => {
        return <DomainCard {...item} />;
      })}
    </Container>
  );
}

export default Domains;

const Header = styled.header`
  padding: 10px;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 50px;
  background: #121212;
  color: white;
  display: flex;
  aling-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  position: fixed;
  top: 0;
  bottom: 0;
  right: ${(props) => (props.isOpen ? "0" : "100%")};
  transition: 0.6s;
  z-index: 3;
`;
