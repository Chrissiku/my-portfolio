/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import SingleWork from "./Components/Work/SingleWork";
import PageNotFound from "./Components/ErrorPages/404";

const App = () => (
  <>
    <Routes>
      <Route path="/" exact="true" element={<LandingPage />} />
      <Route path="/work/:title" exact="true" element={<SingleWork />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </>
);

export default App;
