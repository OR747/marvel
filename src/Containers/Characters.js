import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState();

  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-backend1.herokuapp.com/characters/${id}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    console.log("Rentre dans le useEffect");
    fetchData();
  }, [id]);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="bloc1">
      {data.data.results.map((item, index) => {
        return (
          <div>
            <img
              src={item.thumbnail.path + "." + item.thumbnail.extension}
              alt=""
            />
            <p>{item.name}</p>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Characters;
