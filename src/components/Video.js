import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

function Video() {
  const video = useSelector((state) => state.video.value);
  return (
    <Wrap>
      <video src={`/videos/${video}`} controls width="100%" height="100%" />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
  color: white;
`;

export default React.memo(Video);
