import React from "react";

const Base = ({ data }) => {
  return (
    <div>
      <div className="bloc0">
        {data.data.results.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.id}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Base;
