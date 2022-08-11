/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import SingleWork from "./Components/Work/SingleWork";

const App = () => (
  <>
    <Routes>
      <Route path="/*" exact="true" element={<LandingPage />} />
      <Route path=":id" exact="true" element={<SingleWork />} />
    </Routes>
  </>
);

export default App;
