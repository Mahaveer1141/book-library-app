import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { RootState } from "../app/store";
import { BookList } from "../features/books";
import { filterUrl } from "../features/books/services/filterUrl";
import { IBook } from "../features/books/type";

const BooksSearch: React.FC = () => {
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
      <BookList title="Results" books={books} />
    </>
  );
};

export default BooksSearch;
