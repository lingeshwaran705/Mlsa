import { CardActionArea } from "@mui/material";
import React from "react";
import styled from "styled-components";

function DomainCard(props) {
  return (
    <Wrap>
      <CardActionArea
        sx={{
          color: "rgba(0,0,225,0.6)",
          borderRadius: "10px",
          backdropFilter: "blur(10px)",
        }}
      >
        <Container {...props}>
          <Avatar>
            <AvatarImg src={props.img} />
          </Avatar>
          <Content>{props.title}</Content>
        </Container>
      </CardActionArea>
    </Wrap>
  );
}

export default DomainCard;

const Wrap = styled.div`
  width: 90%;
  margin: 0 30px;
  backdrop-filter: blur(5px);
  @media (max-width: 768px) {
    margin: 30px auto;
  }
`;

const Container = styled.div`
  width: 100%;
  background: linear-gradient(
    130deg,
    rgba(225, 225, 225, 0.1),
    rgba(225, 225, 225, 0.2)
  );
  color: white;
  text-align: center;
  border-top: 1px solid rgba(225, 225, 225, 0.3);
  border-left: 1px solid rgba(225, 225, 225, 0.3);
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 20px;
  position: relative;
  &:hover {
    box-shadow: 0 0 16px rgba(0, 0, 225, 0.4);
  }
  @media (min-width: 768px) {
    flex-direction: column;
  }
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: ${(props) => (props.right ? "0%" : "100%")};
    background: linear-gradient(-150deg, blue, cyan);
    transform: translate(-50%, -50%);
    width: 150px;
    height: 100%;
    border-radius: ${(props) =>
      props.right ? "10px 50% 50% 10%" : "50% 10% 10% 50%"};
    z-index: -1;
    @media (min-width: 768px) {
      border-radius: 50%;
      height: 200px;
      width: 200px;
      top: 50%;
      left: 50%;
      background: linear-gradient(150deg, cyan, blue);
    }
  }
`;

const AvatarImg = styled.div`
  background: ${(props) => `url("/img/${props.src}")`};
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
`;

const Content = styled.span`
  padding-left: 20px;
  font-size: 20px;
  font-family: "Roboto slab", serif;
  letter-spacing: 1px;
  margin: auto;
  @media (min-width: 768px) {
    padding: 30px;
  }
`;
