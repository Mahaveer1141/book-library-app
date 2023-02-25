import React from "react";

import "../filter.css";
import FilterSearchBox from "./categories/FilterSearchBox";
import FilterRatingBox from "./categories/FilterRatingBox";
import FilterSortByBox from "./categories/FilterSortByBox";
import FilterPublishDate from "./categories/FilterPublishDate";
import { useDispatch } from "react-redux";
import { clearFilter } from "../filterSlice";

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-light border rounded-3 p-4 filter-containter">
      <div className="d-flex align-items-center mb-4">
        <h4 className="m-0">Filters</h4>
        <p
          className="my-0 ms-auto text-danger"
          onClick={() => dispatch(clearFilter())}
        >
          Clear All
        </p>
      </div>
      <FilterSearchBox />
      <FilterSortByBox />
      <FilterRatingBox />
      <FilterPublishDate />
    </div>
  );
};

export default Filter;
