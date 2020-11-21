import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Base from "../Components/Base";
import axios from "axios";
import SearchName from "../Components/SearchName";
import Pagination from "../Components/Pagination";

const Home = ({ offset, setOffset, name, setName, page, setPage }) => {
  const [data, setData] = useState("");

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
  }, [offset, name, setData, setIsLoading]);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      <div className="titre">
        <h1>DISCOVER OUR CHARACTERS</h1>
      </div>
      <SearchName
        name={name}
        setName={setName}
        data={data}
        setData={setData}
        offset={offset}
      ></SearchName>

      <div className="bloc1">
        {data.data.results.map((item, index) => {
          return (
            <div>
              <img
                src={item.thumbnail.path + "." + item.thumbnail.extension}
                alt=""
              />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <div>
        <Base data={data} />
      </div>
      <Pagination
        offset={offset}
        setOffset={setOffset}
        data={data}
        page={page}
        setPage={setPage}
      ></Pagination>
    </div>
  );
};
export default Home;
