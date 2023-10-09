import React from "react";
import { Link, useLocation } from "react-router-dom";
// import { useSubject } from "../../context/SubjectYearContext";
import { Box, Typography } from "@mui/material";
import QuestionNavBox from "../questionNavBox/QuestionNavBox";

export default function AddQuestion() {
  let { state } = useLocation();
  const addedQuestions = [1, 5, 2, 7, 8];
  return (
    <Box>
      <Link to={"/"}>Home</Link>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Typography>
          You are adding Questions of <b>{state.subject}</b> in <b>{state.year}</b> paper.
        </Typography>
        <QuestionNavBox
          subject={state.subject}
          year={state.year}
          addedQuestions={addedQuestions}
        />
      </Box>
    </Box>
  );
}
