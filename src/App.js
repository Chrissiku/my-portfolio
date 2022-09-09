/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LandingPage from "./Components/LandingPage";
import PageNotFound from "./Components/ErrorPages/404";

const App = () => (
  <>
    <Routes>
      <Route path="/" exact="true" element={<LandingPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </>
);

export default App;
