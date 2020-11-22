import React from "react";
import { Link } from "react-router-dom";
const Base = ({ data }) => {
  return (
    <Link
      to={data.data.results.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.id}</p>
          </div>
        );
      })}
    ></Link>
  );
};
export default Base;
