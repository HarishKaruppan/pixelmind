import React, { useState, useEffect } from "react";
import "./category.css";
import { Box, Grid } from "@mui/material";
import { Card } from "../card/Card";

export const Category = ({ eachObj }) => {
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    const allWithClass = Array.from(
      document.getElementsByClassName("selected")
    );
    const last = allWithClass.map((value) => value.textContent);
    console.log(last);
  }, [selected]);
  return (
    <>
      <h1>{eachObj.title}</h1>
      <Grid container spacing={2} my={2}>
        {eachObj.items.map((item, i) => {
          return (
            <Card
              key={item.id}
              item={item}
              selected={selected}
              setSelected={setSelected}
            />
          );
        })}
      </Grid>
    </>
  );
};
