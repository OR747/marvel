import React from "react";

const Pagination = ({ data, offset, setOffset, page, setPage }) => {
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
  );
};

export default Pagination;
