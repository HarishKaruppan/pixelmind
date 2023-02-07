import "./card.css";
import { Box, Grid } from "@mui/material";

import React, { useState } from "react";

export const Card = ({ item, selected, setSelected }) => {
  const [winners, setWinners] = useState([]);
  const selectedDiv = (e) => {
    setSelected(item.id);
  };
  return (
    <Grid item xs={12} sm={6} md={4} onClick={selectedDiv}>
      <Box
        className={selected === item.id ? "box selected" : "box"}
        sx={{
          width: 200,
          height: 200,
          backgroundColor: "#cfe2f3",
          "&:hover": {
            backgroundColor: "#009B86",
            opacity: [0.9, 0.8, 0.7],
            color: "#CCCCCC",
          },
        }}
        bgcolor={"#cfe2f3"}
        my={2}
        p={2}
      >
        <p>{item.title}</p>
        <img className="profileImg" src={item.photoUrL} alt="" />
        <button className="button">Select Button</button>
      </Box>
    </Grid>
  );
};
