import React from "react";
import Motive from "../components/Motive";
import DomainSelection from "../components/DomainSelection";
import WelcomeCard from "../components/WelcomeCard";

function Home() {
  return (
    <div id="home">
      <WelcomeCard />
      <Motive />
      <DomainSelection />
    </div>
  );
}

export default Home;
