import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { app } from "../../util/firebaseConfig";
import { setAdminUser } from "../../features/admin/user";
import { useDispatch } from "react-redux";

function LoginForm() {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  const [currentUsr, setCurrentUsr] = useState({});
  const [error, setError] = useState();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (data) => {
    setCurrentUsr(data);
  });

  useEffect(() => {
    if (currentUsr) {
      dispatch(
        setAdminUser({ email: currentUsr.email, name: currentUsr.displayName })
      );
    }
  }, [currentUsr]);

  const createUser = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        loginUser.email,
        loginUser.password
      );
      setError(false);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  const googleSignIn = async () => {
    await signInWithPopup(auth, provider);
  };

  const changeHandler = (e) => {
    const target = e.target;
    const name = target.name;
    setLoginUser((prev) => ({ ...prev, [name]: target.value }));
  };

  return (
    <Container>
      <Form onSubmit={createUser}>
        <Avatar>A</Avatar>
        <h3>Admin</h3>
        {error ? <Error>Invalid password or Email</Error> : null}

        <Input
          autoComplete="off"
          name="email"
          onChange={changeHandler}
          placeholder="Email"
          type="text"
        />
        <Input
          autoComplete=""
          name="password"
          onChange={changeHandler}
          placeholder="Password"
          type="password"
        />
        <Input type="submit" />
        <span>or</span>
        <Button onClick={googleSignIn} variant="outlined" sx={{ m: 3 }}>
          Continue with Google
        </Button>
      </Form>
    </Container>
  );
}
// <Button type="button">Continue with Google</Button>;

export default LoginForm;

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: white;
  display: grid;
  place-items: center;
  overflow: auto;
`;

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

const Form = styled.form`
  width: 400px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  box-shadow: 4px 4px 24px rgba(225, 225, 225, 0.2) inset,
    8px 8px 16px rgba(225, 225, 225, 0.3);
  border-radius: 10px;
  padding: 20px;
  border-top: 1px solid rgba(225, 225, 225, 0.2);
  border-left: 1px solid rgba(225, 225, 225, 0.2);

  & h3 {
    font-family: "Roboto slab", serif;
    color: #121212;
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`;

const Input = styled.input`
  width: 90%;
  margin: 20px;
  border: none;
  background: white;
  box-shadow: 2px 2px 8px rgba(225, 225, 225, 0.2) inset,
    4px 4px 8px rgba(225, 225, 225, 0.5);
  padding: 10px 16px;
  border-radius: 5px;
  font-size: 18px;
  border-top: 1px solid rgba(225, 225, 225, 0.2);
  border-left: 1px solid rgba(225, 225, 225, 0.2);

  &:focus {
    outline: 2px solid blue;
  }

  background: ${(props) => (props.type === "submit" ? "dodgerblue" : "")};
  color: ${(props) => (props.type === "submit" ? "white" : "")};
  cursor: ${(props) => (props.type === "submit" ? "pointer" : "")};
`;

const Error = styled.p`
  color: red;
  border: 1px solid red;
  font-size: 16px;
  padding: 7px 20px;
  margin: 10px 0px;
`;
