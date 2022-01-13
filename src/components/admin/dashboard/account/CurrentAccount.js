import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { app } from "../../../../util/firebaseConfig";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ButtonGroup } from "@mui/material";

function CurrentAccount() {
  const user = useSelector((state) => state.admin.value);
  const auth = getAuth(app);
  const navigate = useNavigate();

  const logOut = async () => {
    await signOut(auth);
    navigate("/admin/loginform");
  };

  return (
    <>
      <Avatar>A</Avatar>
      <h3>{user.name}</h3>
      <h4>{user.email}</h4>
      <main>
        <Button onClick={logOut}>sign Out</Button>
      </main>
    </>
  );
}

export default React.memo(CurrentAccount);

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  box-shadow: 4px 4px 16px rgba(225, 225, 225, 0.2) inset,
    8px 8px 16px rgba(225, 225, 225, 0.3);
  margin: 20px;
  border-radius: 50%;
  font-family: "Roboto slab", serif;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 800;
  color: #ccc;
`;
