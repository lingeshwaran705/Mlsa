import React, { useContext } from "react";
import styled from "styled-components";
import TextSlider from "./animations/TextSlider";
import { Context } from "./animations/Glass";

const obj = {
  title: "We are here to",
  content: [
    { id: 1, text: "Help to build yourself" },
    { id: 2, text: "Teach you in an interactive manner " },
    { id: 3, text: "Show you the right way" },
    { id: 4, text: "Change your life" },
  ],
};

function Info(props) {
  const animate = useContext(Context);
  return (
    <Container>
      <h1>{obj.title}</h1>
      <ul>
        {obj.content.map((item) => {
          return (
            <TextSlider animate={animate} {...props} id={item.id} key={item.id}>
              {item.text}
            </TextSlider>
          );
        })}
      </ul>
    </Container>
  );
}

export default Info;

const Container = styled.section`
  color: white;
  width: 100% !important;
  & h1 {
    text-align: center;
    padding: 10px;
    background: -webkit-linear-gradient(left, blue, cyan);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-family: "Roboto slab", serif;
    font-size: 25px;
  }
  overflow: hidden;
`;
