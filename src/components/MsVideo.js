import React from "react";
import styled, { keyframes } from "styled-components";

function MsVideo() {
  return (
    <div>
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
    </div>
  );
}

export default MsVideo;

const grow = keyframes`
    to{
        transform:scale(1);
    }
`;

export const VideoWrap = styled.div`
  width: 90%;
  border-radius: 20px;
  margin: 60px auto;
  video {
    transform: scale(0);
    border-radius: 20px;
    animation: ${grow} 2s ease 4s forwards;
  }
  @media (min-width: 768px) {
    width: 700px;
  }
`;
