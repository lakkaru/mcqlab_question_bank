import { Box} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function QuestionNumberBlock({ number, color, subject, year }) {
 
  return (
    <Box
      sx={{
        display: "inline-block",
        m: 1,
        border: "2px solid black",
        borderRadius:'3px',
        textAlign:'center',
        backgroundColor:color,
        width: "1.2rem",
        height: "1.3rem",
      }}
      
    >
      <Link to={''} state={{ number, subject, year }}>{number}</Link>
    </Box>
  );
}
