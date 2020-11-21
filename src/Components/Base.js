import React from "react";
import { Link } from "react-router-dom";
const Base = ({ data }) => {
  return (
    <div className="bloc0">
      <Link
        to={data.data.results.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.id}</p>
            </div>
          );
        })}
      ></Link>
    </div>
  );
};
export default Base;
