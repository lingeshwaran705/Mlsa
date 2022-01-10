import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "./animations/Logo";
import DomainCard from "./DomainCard";
import Arrow from "./animations/Arrow";
import { useDispatch } from "react-redux";
import { setDomain, setOpen } from "../features/home/domain";
import Domains from "./Domains";

function DomainSelection() {
  const logoRef = useRef(null);
  const screenPosition = window.innerHeight;
  const [animate, setAnimate] = useState(false);
  const dispatch = useDispatch();

  const handleScroll = () => {
    if (logoRef.current) {
      const logoPosition = logoRef.current.getBoundingClientRect().top;
      if (logoPosition < screenPosition) {
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

  const clickHandler = (type) => {
    dispatch(setOpen(true));
    dispatch(setDomain(type));
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <Wrap id="domains">
        <Logo animate={animate} ref={logoRef} colorIndex={0} text="Domains" />
        <DomainCard
          onClick={() => clickHandler("technical")}
          right
          img="tech.jpg"
          title="Technical"
        />
        <DomainCard
          onClick={() => clickHandler("nonTechnical")}
          img="nonTech.jpg"
          title="Non-Technical"
        />
        <Arrow link="#home" />
        <Domains />
      </Wrap>
    </>
  );
}

export default DomainSelection;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
