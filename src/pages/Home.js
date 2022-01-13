import React, { useEffect } from "react";
import Motive from "../components/Motive";
import DomainSelection from "../components/DomainSelection";
import WelcomeCard from "../components/WelcomeCard";
import { setScroll } from "../features/home/scrollSlice";
import { useDispatch } from "react-redux";
import { getDatabase, ref, set, onValue } from "firebase/database";
import styled from "styled-components";
import { db } from "../util/firebaseConfig";
function Home() {
  const dispatch = useDispatch();

  const scrollHandler = () => {
    dispatch(setScroll(window.scrollY));
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  function writeUserData(userId, name, email, imageUrl) {
    set(ref(db, "users/" + userId), {
      username: name,
      email: email,
      profile_picture: imageUrl,
    });
  }

  function readUserData() {
    const userRef = ref(db, "users/" + 1);
    onValue(userRef, (snapshot) => {
      console.log(snapshot.val());
    });
  }

  return (
    <div id="home">
      <WelcomeCard />
      <Motive />
      <DomainSelection />
      <Card>
        <button
          onClick={() =>
            writeUserData("1", "linga", "linga705@gmail.com", "imgurl")
          }
        >
          set value
        </button>
        <button onClick={readUserData}>Get value</button>
      </Card>
    </div>
  );
}

export default Home;

const Card = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
`;
