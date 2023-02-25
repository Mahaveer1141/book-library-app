import React from "react";
import { BookList } from "../features/books";
import { useFetch } from "../hooks/useFetch";

const Home: React.FC = () => {
  const URL = "https://www.googleapis.com/books/v1/volumes?q=+intitle";

  const { data, isLoading } = useFetch(URL);

  if (isLoading) return <div>Loading..</div>;

  return (
    <>
      <BookList title="For You" books={data.items} />
    </>
  );
};

export default Home;
