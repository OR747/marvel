import React, { useEffect, useState } from "react";
import axios from "axios";

const Comics = () => {
  const [data, setData] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://marvel-backend1.herokuapp.com/comics"
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    console.log("Rentre dans le useEffect");
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="bloc2">
      {data.data.results.map((item, index) => {
        return (
          <div>
            <div>key={index}</div>
            <img
              src={item.thumbnail.path + "." + item.thumbnail.extension}
              alt=""
            />

            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{item.variants}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Comics;
