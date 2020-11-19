import React, { useState, useEffect } from "react";

import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://marvel-backend1.herokuapp.com/characters"
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
    <div>
      <div>toto</div>
      <div className="bloc1">
        {data.data.results.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.thumbnail}</p>
              <p>{item.name}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
