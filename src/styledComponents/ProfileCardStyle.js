import styled from "styled-components";

export const Wrap = styled.section`
  background: black;
  height: 100vh;
  width: 100vw;
  overflow: initial;
  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    background: linear-gradient(30deg, #2196f3, darkorchid, darkorchid);
    transform: translate(-50%, -50%);
    width: 400px;
    height: 450px;
    border-radius: 50%;
    z-index: 0;
  }

  &::after {
    content: "";
    position: fixed;
    bottom: 5%;
    right: 0;
    background: linear-gradient(to right bottom, #f00, #f0f);
    transform: translateX(55%);
    width: 400px;
    height: 400px;
    border-radius: 50%;
    z-index: 0;
  }

  @media (min-width: 1230px) {
    height: ${(props) => (props.leads ? "100vh" : "auto")};
  }
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  padding-top: 10px;
`;

export const Main = styled(InnerWrapper)`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background: rgb(255, 255, 255, 0.2);
  width: 300px;
  height: 450px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 8px 8px 16px 0px rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(225, 225, 225, 0.3);
  border-left: 1px solid rgba(225, 225, 225, 0.3);
  @media (max-width: 310px) {
    width: 250px;
  }
  & i {
    color: rgba(225, 225, 225, 0.8);
  }
  & i:hover {
    color: white;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Heading = styled.p`
  text-align: center;
  padding: 70px 20px 20px 20px;
  font-size: 30px;
  font-family: "Roboto Slab", serif;
  font-weight: 600;
  color: white;
  letter-spacing: 2px;
  word-spacing: 5px;
  z-index: 1;
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 7px;
  margin: 16px auto 20px auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

export const AvatarImg = styled.div`
  background: ${(props) => `url("/profileImg/${props.name}")`};
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`;

export const Name = styled.p`
  letter-spacing: 2px;
  color: white;
  font-size: 20px;
`;

export const Description = styled.p`
  color: rgba(225, 225, 225, 0.9);
  line-height: 24px;
  padding: 10px 0px;
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  margin: 20px auto 10px auto;
`;
