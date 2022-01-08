import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Video from "./components/Video";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import CoreTeam from "./pages/CoreTeam";
import PastEvents from "./pages/PastEvents";
import Registeration from "./pages/Registeration";
import Sidenav from "./components/Sidenav";
import Backdrop from "./components/animations/Backdrop";

function App() {
  return (
    <>
      <Router>
        <Sidenav />
        <Backdrop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Core%20Team" element={<CoreTeam />} />
          <Route path="/Registeration" element={<Registeration />} />
          <Route path="/Past%20Events" element={<PastEvents />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
