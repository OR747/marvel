import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function Search() {
  const [search, setSearch] = useState({});

  return (
    <div>
      <div className="App">
        <input
          type="text"
          id="comics"
          name="name"
          placeholder="search"
          value={search}
          onChange={(ev) => {
            setSearch(ev.target.value);
          }}
        />
      </div>
      <button
        onClick={async () => {
          try {
            const response = await axios.get(
              "https://marvel-backend1.herokuapp.com/characters?name=" + name
            );
            console.log(response.data);
            setData(response.data);
          } catch (error) {
            console.log(error.response);
          }
        }}
      >
        Valider
      </button>

      {data.data.results ? (
        <div>
          <img src={data.url} /> <p>{data.explanation}</p>
        </div>
      ) : (
        <p>On arrive !</p>
      )}
    </div>
  );
}

export default Search;
