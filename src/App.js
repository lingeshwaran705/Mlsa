import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Video from "./components/Video";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import CoreTeam from "./pages/CoreTeam";
import PastEvents from "./pages/PastEvents";
import Navbar from "./components/Navbar";
import Registeration from "./pages/Registeration";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<Video />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Core%20Team" element={<CoreTeam />} />
          <Route path="/Registeration" element={<Registeration />} />
          <Route path="/Past%20Events" element={<PastEvents />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
