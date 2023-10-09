import React, { useState } from "react";
import SelectBox from "../../components/SelectBox";
import { Box, Button, Typography } from "@mui/material";
// import QuestionNavBox from "../questionNavBox/QuestionNavBox";
import { Link } from "react-router-dom";

export default function Home() {
  const [subject, setSubject] = useState("Cehm");
  const [year, setYear] = useState(2021);

  const subjects = ["Physics", "Chemistry", "Biology"];
  const years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013];

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Typography>
          Please select the subject and the paper year.
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <SelectBox
            width={200}
            name="Subject"
            items={subjects}
            sx={{ display: "inline" }}
            setItem={setSubject}
          />
          <SelectBox width={200} name="Year" items={years} setItem={setYear} />
          <Button component={Link} to={"/addQuestion"} state={{ subject, year }} variant="contained">
            {" "}
            {/* <Link to={"/addQuestion"} state={{ subject, year }}> */}
              Go
            {/* </Link> */}
          </Button>
        </Box>
        {/* <QuestionNavBox subject={subject} year={year}/> */}
      </Box>
    </Box>
  );
}
