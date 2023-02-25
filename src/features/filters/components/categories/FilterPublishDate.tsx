import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { setPublishedDate } from "../../filterSlice";

const FilterPublishDate: React.FC = () => {
  const publishDateValues = useSelector(
    (state: RootState) => state.filter.publishedDate
  );
  const dispatch = useDispatch();

  return (
    <div className="mx-1 my-3">
      <h6 className="my-2">Published Date :-</h6>
      <div className="mx-1">
        <div className="mb-1">
          <label className="me-1">from: </label>
          <input
            className="form-control"
            type="date"
            value={publishDateValues.from}
            onChange={(e) =>
              dispatch(
                setPublishedDate({
                  ...publishDateValues,
                  from: e.target.value,
                })
              )
            }
          />
        </div>
        <div className="mb-1">
          <label className="me-1">to: </label>
          <input
            className="form-control"
            type="date"
            min={publishDateValues.from}
            value={publishDateValues.to}
            onChange={(e) =>
              dispatch(
                setPublishedDate({
                  ...publishDateValues,
                  to: e.target.value,
                })
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FilterPublishDate;
