import React from "react";
import styled from "styled-components";
import { Container } from "../Dashboard";
import AddAdmin from "./AddAdmin";
import CurrentAccount from "./CurrentAccount";

function Account() {
  return (
    <Container>
      <Card>
        <CurrentAccount />
      </Card>
      <Card>
        <AddAdmin />
      </Card>
    </Container>
  );
}

export default Account;

export const Card = styled.div`
  width: 40%;
  height: 320px;
  box-shadow: 8px 8px 16px rgba(225, 225, 225, 0.2) inset,
    8px 8px 16px rgba(225, 225, 225, 0.3);
  margin: 30px;
  border-radius: 20px;
  cursor: pointer;
  transform: scale(0.97);
  transition: 0.3s;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 900px) {
    width: 70%;
    margin: 30px 0;
  }
  @media (max-width: 620px) {
    width: 90%;
    margin: 30px 0;
  }

  & h3 {
    font-family: "Roboto slab", serif;
    color: #333;
  }

  & h4 {
    color: #555;
    padding: 10px;
  }
`;
