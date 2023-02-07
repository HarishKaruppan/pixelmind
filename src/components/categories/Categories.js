import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Category } from "../category/Category";
import "./categories.css";

export const Categories = () => {
  // State
  const [data, setData] = useState([]);

  // Fetch request
  useEffect(() => {
    const fetchReq = async () => {
      fetch("http://localhost:8080/api/getBallotData", { mode: "cors" })
        .then((res) => res.json())
        .then((data) => setData(data.items))
        .catch((error) => console.log(error));
    };
    fetchReq();
    // return () => {
    //   second
    // }
  }, []);

  return (
    <div className="categories">
      <div className="grid">
        {data.map((each, i) => {
          return <Category key={each.id} eachObj={each} />;
        })}
      </div>
    </div>
  );
};
