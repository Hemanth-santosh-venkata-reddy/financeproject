import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Finance_Login from "../../pages/Finance_Login";
import Groups from "../../pages/Groups";
import NoMatch from '../NoMatch';
import Header from "../Header";
import GroupsDetails from "../../pages/GroupsDetails"
const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
        <Routes>
        <Route path="/" element={<Finance_Login />}/>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Groups" element={<Groups/>}/>
          <Route path="/GroupsDetails" element={<GroupsDetails/>}/>
          <Route path="*" element={<NoMatch/>}/>
          </Routes>
    </BrowserRouter>
    </>
  );
};

export default Routing;
