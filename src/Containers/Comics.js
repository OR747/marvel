import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchTitle from "../Components/SearchTitle";
import Pagination from "../Components/Pagination";

const Comics = ({ offset, setOffset, page, setPage }) => {
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
    <div>
      <div className="titre">
        <h1>DISCOVER OUR COMICS</h1>
      </div>
      <SearchTitle data={data} setData={setData} offset={offset}></SearchTitle>

      <div className="bloc2">
        {data.data.results.map((item, index) => {
          return (
            <div>
              <img
                src={item.thumbnail.path + "." + item.thumbnail.extension}
                alt=""
              />
              <p>{item.title}</p>
            </div>
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
export default Comics;
