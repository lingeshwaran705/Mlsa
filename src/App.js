import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Video from "./components/Video";
import Home from "./pages/Home";
import Sidenav from "./components/Sidenav";
import Backdrop from "./components/animations/Backdrop";
const Gallery = React.lazy(() => import("./pages/Gallery"));
const CoreTeam = React.lazy(() => import("./pages/CoreTeam"));
const PastEvents = React.lazy(() => import("./pages/PastEvents"));
const Registeration = React.lazy(() => import("./pages/Registeration"));

function App() {
  return (
    <>
      <React.Suspense fallback="Loading...">
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
      </React.Suspense>
    </>
  );
}

export default App;
