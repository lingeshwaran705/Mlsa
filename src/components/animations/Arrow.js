import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styled, { keyframes } from "styled-components";
import { IconButton } from "@mui/material";

function Arrow() {
  return (
    <Wrap>
      <IconButton sx={{ color: "white" }}>
        <KeyboardArrowDownIcon
          sx={{ fill: "white", width: "60px", height: "40px" }}
        />
      </IconButton>
    </Wrap>
  );
}

export default Arrow;

const Bounce = keyframes`
    0%{
        transform:translate(0px);
    }
    50%{
        transform:translate(0px);
    }
    100%{
        transform:translate(0px);
    }
    30%{
        transform:translateY(7px);
    }
    80%{
        transform:translateY(3px);
    }
`;

const Wrap = styled.div`
  position: absolute;
  bottom: 30px;
  animation: ${Bounce} 1.5s infinite;
  display: none;
  @media (max-width: 550px) {
    display: block;
  }
`;
