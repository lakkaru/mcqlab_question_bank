// import logo from './logo.svg';
// import './App.css';
// import AddQuestion from './layouts/questionNavBox/QuestionNavBox';
import { Route, Routes } from "react-router-dom";
import Home from "./layouts/home/Home";
import { Box } from "@mui/material";
import AddQuestion from "./layouts/addQuestions/AddQuestion";
// import { useState } from "react";

function App() {
  return (
    <Box sx={{ mt: 3 }}>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/addQuestion"} element={<AddQuestion />} />
      </Routes>
    </Box>
  );
}

export default App;
