import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "./animations/Logo";
import DomainCard from "./DomainCard";
import Slide from "./animations/Slide";
import Arrow from "./animations/Arrow";

function Domains() {
  const logoRef = useRef(null);
  const screenPosition = window.innerHeight;
  const [animate, setAnimate] = useState({ logo: false, domain: false });
  const domainRef = useRef(null);

  const handleScroll = () => {
    if (logoRef.current || domainRef.current) {
      const logoPosition = logoRef.current.getBoundingClientRect().top;
      const domainCardPosition = domainRef.current.getBoundingClientRect().top;
      if (logoPosition < screenPosition / 1.2) {
        setAnimate((prev) => ({ ...prev, logo: true }));
      } else {
        setAnimate((prev) => ({ ...prev, logo: false }));
      }
      if (domainCardPosition < screenPosition + 200) {
        setAnimate((prev) => ({ ...prev, domain: true }));
      } else {
        setAnimate((prev) => ({ ...prev, domain: false }));
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
    <Wrap id="domains">
      <Logo
        animate={animate.logo}
        ref={logoRef}
        colorIndex={0}
        text="Domains"
      />
      <Slide animate={animate.domain} ref={domainRef} to="right">
        <DomainCard right img="tech.jpg" title="Technical" />
      </Slide>
      <Slide animate={animate.domain} ref={domainRef}>
        <DomainCard img="nonTech.jpg" title="Non-Technical" />
      </Slide>
      <Arrow link="#home" />
    </Wrap>
  );
}

export default Domains;

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
