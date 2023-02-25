import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { setSortBy } from "../../filterSlice";
import RadioSelectInput from "../inputs/RadioSelectInput";

const FilterSortByBox: React.FC = () => {
  const sortByValues = useSelector((state: RootState) => state.filter.sortBy);
  const dispatch = useDispatch();

  return (
    <div className="mx-1 my-2">
      <h6 className="my-2">Sort By:- </h6>
      <div className="mx-1">
        <RadioSelectInput
          label="Date"
          selectValues={["new", "old"]}
          value={{
            radio: "date",
            order: sortByValues.order,
          }}
          checked={sortByValues.currentValue === "date"}
          onChangeRadio={(e) =>
            dispatch(
              setSortBy({
                ...sortByValues,
                currentValue: e.target.value,
              })
            )
          }
          onChangeSelect={(e) =>
            dispatch(
              setSortBy({
                ...sortByValues,
                order: e.target.value,
              })
            )
          }
        />
        <RadioSelectInput
          label="Rating"
          selectValues={["high to low", "low to high"]}
          value={{
            radio: "rating",
            order: sortByValues.order,
          }}
          checked={sortByValues.currentValue === "rating"}
          onChangeRadio={(e) =>
            dispatch(
              setSortBy({
                ...sortByValues,
                currentValue: e.target.value,
              })
            )
          }
          onChangeSelect={(e) =>
            dispatch(
              setSortBy({
                ...sortByValues,
                order: e.target.value,
              })
            )
          }
        />
        <RadioSelectInput
          label="Popularity"
          selectValues={["high to low", "low to high"]}
          value={{
            radio: "popularity",
            order: sortByValues.order,
          }}
          checked={sortByValues.currentValue === "popularity"}
          onChangeRadio={(e) =>
            dispatch(
              setSortBy({
                ...sortByValues,
                currentValue: e.target.value,
              })
            )
          }
          onChangeSelect={(e) =>
            dispatch(
              setSortBy({
                ...sortByValues,
                order: e.target.value,
              })
            )
          }
        />
      </div>
    </div>
  );
};

export default FilterSortByBox;
