import React, { useRef, useEffect, useState } from "react";
import { Wraper, Row, Column, HighLight } from "../styledComponents/HomeStyles";
import Arrow from "./animations/Arrow";
import FloatingActionButton from "./FloatingActionButton";
import Logo from "./animations/Logo";
import Greetings from "./Greetings";
import MsVideo from "./MsVideo";
import Fade from "./animations/Fade";

function WelcomeCard() {
  const text =
    " You want to upgrade your carrer, but you struggle in that? Don't worry, you are in the right place. We are here to improve your knowledge and make you a valuable person in this society.";
  const logoRef = useRef(null);
  const fadeRef = useRef(null);
  const screenPosition = window.innerHeight;
  const [v, setV] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (animate) {
      const interval = setTimeout(() => {
        setV(true);
      }, 4800);

      return () => {
        clearInterval(interval);
      };
    }
  }, [animate]);

  const handleScroll = () => {
    if (window.scrollY < screenPosition / 1.2) {
      setAnimate(true);
    } else {
      setAnimate(false);
      setV(false);
    }
  };

  useEffect(() => {
    setAnimate(true);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Wraper>
        <Logo animate={animate} ref={logoRef} colorIndex={0} text="MLSA SREC" />
        <Row>
          <Column>
            <Fade delay="6s" animate={animate} ref={fadeRef} heading>
              <HighLight>
                Hello! <span>Challenger</span>
              </HighLight>
            </Fade>
            <Fade delay="6s" a animate={animate} para>
              {text}
            </Fade>
          </Column>
          <Column>{v ? <MsVideo animate={animate} /> : null}</Column>
        </Row>

        <Greetings animate={animate} />

        <FloatingActionButton />

        <Arrow link="#motive" />
      </Wraper>
    </>
  );
}

export default WelcomeCard;
