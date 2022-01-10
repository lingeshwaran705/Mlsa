import React, { useEffect, useState } from "react";
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
  const [v, setV] = useState(false);
  useEffect(() => {
    const interval = setTimeout(() => {
      setV(true);
    }, 4800);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Wraper>
        <Logo animate={true} colorIndex={0} text="MLSA SREC" />
        <Row>
          <Column>
            <Fade delay="6s" animate={true} heading>
              <HighLight>
                Hello! <span>Challenger</span>
              </HighLight>
            </Fade>
            <Fade delay="6s" animate={true} para>
              {text}
            </Fade>
          </Column>
          <Column>{v ? <MsVideo animate={true} /> : null}</Column>
        </Row>

        <Greetings animate={true} />

        <FloatingActionButton />

        <Arrow link="#motive" />
      </Wraper>
    </>
  );
}

export default React.memo(WelcomeCard);
