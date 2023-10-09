import React from "react";
import QuestionNumberBlock from "../../components/QuestionNumberBlock";
import { Box } from "@mui/material";

export default function QuestionNavBox({ subject, year, addedQuestions }) {
  // const subject = "Chemistry";
  // const year = 2022;
  

  const questions = [];
  for (let i = 1; i <= 50; i++) {
    questions.push(i);
  }
  //   console.log(questions);

  return (
    <Box sx={{ maxWidth: "350px" }}>
      {questions.map((val, key) => {
        const color = addedQuestions.includes(val) ? "green" : "";
        return (
          <QuestionNumberBlock
            key={key}
            number={val}
            color={color}
            subject={subject}
            year={year}
          />
        );
      })}
    </Box>
  );
}
