import React from "react";
import { Wraper, VideoWrap, HighLight } from "../styledComponents/HomeStyles";
import styled from "styled-components";
import Arrow from "../components/animations/Arrow";
import FloatingActionButton from "../components/FloatingActionButton";
import TypeWriter from "../components/animations/TypeWriter";
import Logo from "../components/animations/Logo";
import Greetings from "../components/Greetings";
import MsVideo from "../components/MsVideo";
import Fade from "../components/animations/Fade";

function Home() {
  const text = "Welcome to MLSA SREC";

  return (
    <Wraper>
      <Logo text="MLSA SREC" />

      <Fade text="MLSA SREC Welcomes You" />

      <MsVideo />

      <FloatingActionButton />

      <Greetings />

      <Arrow />
    </Wraper>
  );
}

export default Home;
