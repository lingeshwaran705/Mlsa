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

export default React.memo(MsVideo);

const grow = keyframes`
    to{
        transform:scale(1);
    }
`;

export const VideoWrap = styled.div`
  border-radius: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  video {
    transform: scale(0);
    border-radius: 20px;
    animation: ${grow} 2s ease 1s forwards;
    width: 100%;
    margin: auto;
    @media (max-width: 768px) {
      width: 80%;
    }
    @media (max-width: 620px) {
      width: 90%;
    }
    @media (max-width: 400px) {
      width: 97%;
    }
  }
  @media (max-width: 400px) {
    padding: 20px 0px 20px 0px;
  }
`;
