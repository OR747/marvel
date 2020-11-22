import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import SearchName from "../Components/SearchName";
import Pagination from "../Components/Pagination";

const Home = ({ offset, setOffset, name, setName, page, setPage }) => {
  const [data, setData] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
      <div className="search">
        <SearchName
          name={name}
          setName={setName}
          data={data}
          setData={setData}
          offset={offset}
        ></SearchName>
      </div>

      <div className="bloc1">
        {data.data.results.map((element, index) => {
          return (
            <>
              <Link
                to={"/characters/" + element.id + "/comics"}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <img
                  src={
                    element.thumbnail.path + "." + element.thumbnail.extension
                  }
                  alt="Marvel characters"
                />

                <h2>{element.name}</h2>
              </Link>
            </>
          );
        })}
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
