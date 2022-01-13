import React from "react";
import styled from "styled-components";
import { dashboardContent } from "../../../data/Admin";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const clickHandler = (page) => {
    navigate(page);
  };
  return (
    <Container>
      {dashboardContent.map((item) => {
        return (
          <Card key={item.id} onClick={() => clickHandler(item.page)}>
            {item.img ? <Img src={item.img} /> : null}
            <h2>{item.title}</h2>
          </Card>
        );
      })}
    </Container>
  );
}

export default Dashboard;

const Card = styled.section`
  width: 280px;
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
  & h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    font-family: "Roboto slab", serif;
    color: rgba(0, 0, 0, 0.6);
    transition: 0.3s;
  }
  &:hover {
    transform: scale(1);
    h2 {
      color: black;
      letter-spacing: 1px;
    }
  }
  @media (max-width: 400px) {
    width: 90%;
    margin: 30px 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Img = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  object-position: center;
  border-radius: 20px 20px 0 0;
`;
