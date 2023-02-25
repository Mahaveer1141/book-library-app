import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { setRating } from "../../filterSlice";
import CheckboxInput from "../inputs/CheckboxInput";

const FilterRatingBox: React.FC = () => {
  const ratingValues = useSelector((state: RootState) => state.filter.rating);
  const dispatch = useDispatch();

  return (
    <div className="mx-1 my-2">
      <h6 className="my-2">Rating :- </h6>
      <div className="mx-1">
        <CheckboxInput
          label="1 ⭐️ to 2 ⭐️"
          value={ratingValues.onetotwo}
          onChange={() =>
            dispatch(
              setRating({ ...ratingValues, onetotwo: !ratingValues.onetotwo })
            )
          }
        />
        <CheckboxInput
          label="2 ⭐️ to 3 ⭐️"
          value={ratingValues.twotothree}
          onChange={() =>
            dispatch(
              setRating({
                ...ratingValues,
                twotothree: !ratingValues.twotothree,
              })
            )
          }
        />
        <CheckboxInput
          label="3 ⭐️ to 4 ⭐️"
          value={ratingValues.threetofour}
          onChange={() =>
            dispatch(
              setRating({
                ...ratingValues,
                threetofour: !ratingValues.threetofour,
              })
            )
          }
        />
        <CheckboxInput
          label="4 ⭐️ to 5 ⭐️ "
          value={ratingValues.fourtofive}
          onChange={() =>
            dispatch(
              setRating({
                ...ratingValues,
                fourtofive: !ratingValues.fourtofive,
              })
            )
          }
        />
      </div>
    </div>
  );
};

export default FilterRatingBox;
