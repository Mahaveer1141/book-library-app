import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { setSearchParameters } from "./searchSlice";

const Search: React.FC = () => {
  const [showHistory, setShowHistory] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const searchHistory: string[] = JSON.parse(
    localStorage.getItem("searchHistory") || "[]"
  ).slice(0, 5);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    dispatch(setSearchParameters({ searchTitle: searchTitle.trim() }));
    localStorage.setItem(
      "searchHistory",
      JSON.stringify([searchTitle.trim(), ...searchHistory])
    );
    inputRef.current?.blur();

    navigate({ pathname: "/books", search: `?search=${searchTitle.trim()}` });
    e.preventDefault();
  }

  return (
    <div className="d-flex align-items-center">
      <form onSubmit={handleSubmit} className="w-100 me-3" role="search">
        <input
          ref={inputRef}
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          onBlur={() => setShowHistory("")}
          onFocus={() => setShowHistory("show")}
          type="search"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
        />
        <div
          className={"dropdown-menu my-2 " + showHistory}
          aria-labelledby="dropdownMenuButton"
        >
          {searchHistory.map((searchTitle, index) => (
            <a
              href={`/books?search=${searchTitle}`}
              className="dropdown-item"
              key={index}
            >
              {searchTitle}
            </a>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Search;
