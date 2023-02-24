import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Search: React.FC = () => {
  const [showHistory, setShowHistory] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const searchHistory: string[] = JSON.parse(
    localStorage.getItem("searchHistory") || "[]"
  ).slice(0, 5);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
        <div className="dropdown">
          <input
            ref={inputRef}
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            // onBlur={() => setShowHistory("")}
            onFocus={() => setShowHistory("show")}
            type="search"
            className="form-control dropdown-toggle"
            placeholder="Search..."
          />
          <div
            className={"dropdown-menu my-2 " + showHistory}
            onBlur={() => setShowHistory("")}
          >
            {searchHistory.map((searchTitle, index) => (
              <Link
                onClick={() => setSearchTitle(searchTitle)}
                to={`/books?search=${searchTitle}`}
                className="dropdown-item"
                key={index}
              >
                {searchTitle}
              </Link>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
