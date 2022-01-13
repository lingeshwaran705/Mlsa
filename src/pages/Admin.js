import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { app } from "../util/firebaseConfig";

import Dashboard from "../components/admin/dashboard/Dashboard";
import LoginForm from "../components/admin/LoginForm";

function Admin() {
  return (
    <Wraper>
      <Dashboard />
    </Wraper>
  );
}

export default Admin;

const Wraper = styled.div`
  background: white;
  width: 100%;
  height: auto;
`;
