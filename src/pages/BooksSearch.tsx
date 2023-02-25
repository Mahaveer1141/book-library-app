import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { RootState } from "../app/store";
import { BookList } from "../features/books";
import { filterUrl } from "../features/books/services/filterUrl";
import { useFetch } from "../hooks/useFetch";

const BooksSearch: React.FC = () => {
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

  const { data, isLoading } = useFetch(URL, null, {
    dependacyArray: [searchParameter],
  });

  if (isLoading) return <div>Loading ...</div>;

  return (
    <>
      <BookList title="Results" books={data.error ? [] : data.items} />
    </>
  );
};

export default BooksSearch;
