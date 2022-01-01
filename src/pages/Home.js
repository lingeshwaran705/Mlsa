import React from "react";
import { Wraper } from "../styledComponents/HomeStyles";
import { Pending } from "../styledComponents/HomeStyles";

function Home() {
  return (
    <Wraper>
      <Pending>
        Home page is still in production go to another page by clicking the menu
        bar on the top right
      </Pending>
    </Wraper>
  );
}

export default Home;
