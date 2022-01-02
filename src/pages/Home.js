import React from "react";
import { Wraper, VideoWrap } from "../styledComponents/HomeStyles";
import { Pending } from "../styledComponents/HomeStyles";
import styled from "styled-components";
import FloatingActionButton from "../components/FloatingActionButton";
import Tilt from "react-parallax-tilt";
function Home() {
  return (
    <Wraper>
      <Tilt>
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
      </Tilt>
    </Wraper>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
  color: white;
`;

export default Home;
