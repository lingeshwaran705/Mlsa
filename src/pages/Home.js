import React from "react";
import { Wraper, VideoWrap } from "../styledComponents/HomeStyles";
import styled from "styled-components";
import Arrow from "../components/animations/Arrow";
import { Avatar } from "../styledComponents/ProfileCardStyle";
import FloatingActionButton from "../components/FloatingActionButton";
import TypeWriter from "../components/animations/TypeWriter";

function Home() {
  const text = "Welcome to MLSA SREC";

  return (
    <Wraper>
      <FloatingActionButton />

      <Avatar>
        <AvatarImg name="/img/mlsa.jpeg" />
      </Avatar>

      <TypeWriter text={text} />

      <VideoWrap>
        <video
          src="/videos/mlsa.mp4"
          autoPlay
          loop
          muted
          controls
          width="100%"
          height="auto"
        />
      </VideoWrap>
      <Arrow />
    </Wraper>
  );
}

export default Home;

const AvatarImg = styled.div`
  background: ${(props) => `url("${props.name}")`};
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`;
