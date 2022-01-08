import React, { useState, useRef, useEffect } from "react";
import { Wraper, Row, Column, HighLight } from "../styledComponents/HomeStyles";
import Arrow from "../components/animations/Arrow";
import FloatingActionButton from "../components/FloatingActionButton";
import Logo from "../components/animations/Logo";
import Greetings from "../components/Greetings";
import MsVideo from "../components/MsVideo";
import Fade from "../components/animations/Fade";
import Motive from "../components/Motive";
import Domains from "../components/Domains";

function Home() {
  const objective =
    "The main objective of this community is to create an enormous platform for the students to learn, apply and develop new applications across various domain to enhance the knowledge of the students so that in one fine day they can handle the problems with suitable solutions in real-time.";
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
    <div id="home">
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
              You want to upskill yourself but you can't able to do that? Don't
              worry you are in the right place. We are here to improve your
              knowledge and make you a valuable person in this society.
            </Fade>
          </Column>
          <Column>{v ? <MsVideo animate={animate} /> : null}</Column>
        </Row>

        <Greetings animate={animate} />

        <FloatingActionButton />

        <Arrow link="#motive" />
      </Wraper>
      <Motive />
      <Domains />
    </div>
  );
}

export default Home;
