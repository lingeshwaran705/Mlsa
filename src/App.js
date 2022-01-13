import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Video from "./components/Video";
import Home from "./pages/Home";
import Sidenav from "./components/Sidenav";
import Backdrop from "./components/animations/Backdrop";
import OrganizeEvent from "./components/admin/dashboard/OrganizeEvent";
import UpdateGallery from "./components/admin/dashboard/UpdateGallery";
import Account from "./components/admin/dashboard/account/Account";
import UpdatePastEvent from "./components/admin/dashboard/UpdatePastEvent";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "./components/admin/dashboard/Dashboard";
const Gallery = lazy(() => import("./pages/Gallery"));
const CoreTeam = lazy(() => import("./pages/CoreTeam"));
const PastEvents = lazy(() => import("./pages/PastEvents"));
const Registeration = lazy(() => import("./pages/Registeration"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Admin = lazy(() => import("./pages/Admin"));
const LoginForm = lazy(() => import("./components/admin/LoginForm"));

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
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/video" element={<Video />} />
            // Admin page
            <Route element={<ProtectedRoutes />}>
              <Route path="/Admin" element={<Admin />} />
              <Route path="/Admin/LoginForm" element={<LoginForm />} />
              <Route path="/admin/organize-event" element={<OrganizeEvent />} />
              <Route path="/admin/update-gallery" element={<UpdateGallery />} />
              <Route
                path="/admin/update-past-event"
                element={<UpdatePastEvent />}
              />
              <Route path="/admin/account" element={<Account />} />
              <Route path="/admin/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </Router>
      </React.Suspense>
    </>
  );
}

export default App;
