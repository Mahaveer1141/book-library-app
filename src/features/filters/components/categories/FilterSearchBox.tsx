import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { setCategories } from "../../filterSlice";
import CheckboxInput from "../inputs/CheckboxInput";

const FilterSearchBox: React.FC = () => {
  const categoriesValues = useSelector(
    (state: RootState) => state.filter.categories
  );
  const dispatch = useDispatch();

  return (
    <div className="mx-1 my-2">
      <h6 className="my-2">Search By:- </h6>
      <div className="mx-1">
        <CheckboxInput
          label="Title"
          value={categoriesValues.title}
          onChange={() =>
            dispatch(
              setCategories({
                ...categoriesValues,
                title: !categoriesValues.title,
              })
            )
          }
        />
        <CheckboxInput
          label="Author"
          value={categoriesValues.author}
          onChange={() =>
            dispatch(
              setCategories({
                ...categoriesValues,
                author: !categoriesValues.author,
              })
            )
          }
        />
        <CheckboxInput
          label="Category"
          value={categoriesValues.category}
          onChange={() =>
            dispatch(
              setCategories({
                ...categoriesValues,
                category: !categoriesValues.category,
              })
            )
          }
        />
        <CheckboxInput
          label="Publisher"
          value={categoriesValues.publisher}
          onChange={() =>
            dispatch(
              setCategories({
                ...categoriesValues,
                publisher: !categoriesValues.publisher,
              })
            )
          }
        />
      </div>
    </div>
  );
};

export default FilterSearchBox;
