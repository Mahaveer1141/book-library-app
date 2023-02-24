import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { RootState } from "../app/store";
import Books from "../features/books";
import { filterUrl } from "../features/books/filterUrl";
import { IBook } from "../features/books/type";

const BooksSearch: React.FC = () => {
  const [flag, setFlag] = useState(false);
  const searchParamter = useSelector(
    (state: RootState) => state.search.searchParameter
  );

  const [searchParams] = useSearchParams();

  const categoryFilter = useSelector(
    (state: RootState) => state.filter.categories
  );

  const URL = filterUrl(
    "https://www.googleapis.com/books/v1/volumes?q=",
    searchParams.get("search") || "",
    categoryFilter
  );

  console.log(URL);

  const [books, setBooks] = useState<IBook[]>();

  useEffect(() => {
    fetch(URL).then((response) =>
      response.json().then((data) => {
        if (data.error) {
          setBooks([]);
          return;
        }
        setBooks(data.items);
      })
    );
  }, [categoryFilter]);

  if (!books) return <div>Loading ...</div>;

  return (
    <>
      <Books
        title="Results"
        books={books}
        flag={flag}
        changeFlag={() => setFlag(!flag)}
      />
    </>
  );
};

export default BooksSearch;
