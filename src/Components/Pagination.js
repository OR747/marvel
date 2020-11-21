import React from "react";

const Pagination = ({ data, offset, setOffset, page, setPage }) => {
  // const pageNumber = [];
  // for (let i = 1; i <= Math.ceil(data.data.total / offset); i++) {
  //   console.log(data.data.total);
  //   pageNumber.push(i);
  // }
  return (
    <div>
      <div className="pagination">
        {data.data.offset > 0 && (
          <button
            className="page-button"
            onClick={() => {
              setOffset(offset - 100);
              setPage(page - 1);
            }}
          >
            Page précédente
          </button>
        )}
        <div className="page">
          <span style={{ width: "30px" }}>{page}</span>
        </div>

        {data.data.offset < data.data.total && (
          <button
            className="page-button"
            onClick={() => {
              setOffset(offset + 100);
              setPage(page + 1);
            }}
          >
            Page Suivante
          </button>
        )}
      </div>
    </div>

    // <div></div>
  );
};

export default Pagination;
