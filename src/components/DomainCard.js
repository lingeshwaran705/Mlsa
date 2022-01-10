import { CardActionArea } from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Slide from "./animations/Slide";
import { useSelector } from "react-redux";

function DomainCard(props) {
  const screenPosition = window.innerHeight;
  const domain = useSelector((state) => state.domain.value);
  const [animate, setAnimate] = useState(true);
  const domainCardRef = useRef(null);

  const handleScroll = () => {
    if (domainCardRef.current) {
      const domainCardPosition =
        domainCardRef.current.getBoundingClientRect().top;
      if (domainCardPosition < screenPosition) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Slide
      animate={props.animation ? domain.open : animate}
      ref={domainCardRef}
      {...props}
    >
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
    </Slide>
  );
}

export default DomainCard;

const Wrap = styled.div`
  width: 90%;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    margin: 30px auto;
    width: 90%;
  }
  & > button {
    @media (min-width: 768px) {
      height: 400px !important;
      width: 300px !important;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.3);
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
      display: none;
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
  @media (min-width: 768px) {
    border-radius: 0;
  }
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
  @media (min-width: 768px) {
    border-radius: 0;
    width: 100%;
    height: 50%;
  }
  @media (max-width: 325px) {
    width: 80px;
    height: 80px;
  }
  flex-shrink: 0;
`;

const Content = styled.span`
  padding-left: 20px;
  font-size: 20px;
  font-family: "Roboto slab", serif;
  letter-spacing: 1px;
  margin: auto;
  @media (min-width: 768px) {
    padding: 30px 0;
  }
  @media (max-width: 325px) {
    font-size: 18px;
    letter-spacing: 0;
  }
`;
