import React from "react";
import axios from "axios";

const SearchName = ({ setData, offset }) => {
  let str = "";

  return (
    <>
      <div className="search-container">
        <div className="search">
          <input
            placeholder="Searching a character"
            type="search"
            onChange={async (event) => {
              //   Faire la requete si l'utilisateur a entré au moins 2 lettres
              str += event.target.value;
              if (str.length > 2) {
                const response = await axios.get(
                  `https://marvel-backend1.herokuapp.com/characters?name=${event.target.value}&offset=${offset}`
                );

                setData(response.data);
              }
            }}
          ></input>
        </div>
      </div>
    </>
  );
};

export default SearchName;
