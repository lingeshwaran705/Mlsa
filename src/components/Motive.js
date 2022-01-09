import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Logo from "./animations/Logo";
import Fade from "./animations/Fade";
import { Column, Row, Image } from "../styledComponents/HomeStyles";
import Glass from "./animations/Glass";
import Arrow from "./animations/Arrow";

function HomeCard() {
  const logoRef = useRef(null);
  const fadeRef = useRef(null);
  const screenPosition = window.innerHeight;
  const [animate, setAnimate] = useState({ logo: false, fade: false });
  const objective =
    "The main objective of this community is to create an enormous platform for the students to learn, apply and develop new applications across various domain to enhance the knowledge of the students so that in one fine day they can handle the problems with suitable solutions in real-time.";

  const handleScroll = () => {
    if (logoRef.current && fadeRef.current) {
      const logoPosition = logoRef.current.getBoundingClientRect().top;
      const glassPosition = fadeRef.current.getBoundingClientRect().top;
      if (logoPosition < screenPosition - 20) {
        setAnimate((prev) => ({ ...prev, logo: true }));
      } else {
        setAnimate((prev) => ({ ...prev, logo: false }));
      }
      if (glassPosition < screenPosition) {
        setAnimate((prev) => ({ ...prev, fade: true }));
      } else {
        setAnimate((prev) => ({ ...prev, fade: false }));
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
    <Card id="motive">
      <Logo
        animate={animate.logo}
        ref={logoRef}
        colorIndex={1}
        text="Objective"
      />
      <Glass animate={animate.fade} ref={fadeRef}>
        {objective}
      </Glass>
      <Arrow link="#domains" />
    </Card>
  );
}

export default HomeCard;

const Card = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
