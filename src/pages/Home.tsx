import React from "react";
import Books from "../features/books";
import { useFetch } from "../hooks/useFetch";

const Home: React.FC = () => {
  const URL = "https://www.googleapis.com/books/v1/volumes?q=+intitle";

  const { data, isLoading } = useFetch(URL);

  if (isLoading) return <div>Loading..</div>;

  return (
    <>
      <Books title="For You" books={data.items} />
    </>
  );
};

export default Home;
