import React from "react";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  console.log("Current Page:", page, "Total Pages:", pages);

  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Link
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
          >
            <span
              className="btn btn-dark px-3 py-1 mx-2"
              active={x + 1 === page}
            >
              {x + 1}
            </span>
          </Link>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
