import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { RootState } from "../app/store";
import Books from "../features/books";
import { filterUrl } from "../features/books/filterUrl";
import { IBook } from "../features/books/type";

const BooksSearch: React.FC = () => {
  const [flag, setFlag] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const categoryFilter = useSelector(
    (state: RootState) => state.filter.categories
  );

  const [searchParams] = useSearchParams();
  const searchParameter = searchParams.get("search") || "";

  const URL = filterUrl(
    "https://www.googleapis.com/books/v1/volumes?q=",
    searchParameter || "",
    categoryFilter
  );

  const [books, setBooks] = useState<IBook[]>();

  useEffect(() => {
    setLoading(true);
    fetch(URL).then((response) =>
      response.json().then((data) => {
        if (data.error) {
          setBooks([]);
          return;
        }
        setBooks(data.items);
        setLoading(false);
      })
    );
  }, [searchParameter]);

  if (isLoading || !books) return <div>Loading ...</div>;

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
