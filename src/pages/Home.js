import React, { useEffect, useState } from "react";
import { Wraper, VideoWrap, Text } from "../styledComponents/HomeStyles";
import styled from "styled-components";
import Arrow from "../components/animations/Arrow";
import { Avatar } from "../styledComponents/ProfileCardStyle";
import FloatingActionButton from "../components/FloatingActionButton";
import Greeting from "../components/Greeting";

function Home() {
  var i = 0;
  var [text, setText] = useState("");
  const txt = "Welcome to MLSA SREC";

  useEffect(() => {
    setTimeout(() => {
      setInterval(() => {
        if (i <= txt.length - 1) {
          setText((prev) => prev + txt[i]);
          i++;
        }
      }, 150);
    }, 200);
  }, []);

  return (
    <Wraper>
      <FloatingActionButton />
      <Avatar>
        <AvatarImg name="/img/mlsa.jpeg" />
      </Avatar>

      <Text id="type">{text}</Text>
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
