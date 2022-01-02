import React, { useEffect, useState } from "react";
import { Wraper, VideoWrap, Text } from "../styledComponents/HomeStyles";
import styled from "styled-components";

function Home() {
  var i = 0;
  var [text, setText] = useState("");
  const txt = "Welcome to MLSA";

  useEffect(() => {
    setInterval(() => {
      if (i <= txt.length - 1) {
        setText((prev) => prev + txt[i]);
        i++;
      }
    }, 100);
  }, []);

  return (
    <Wraper>
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
    </Wraper>
  );
}

export default Home;
