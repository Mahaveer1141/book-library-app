import React, { useState } from "react";
import Books from "../features/books";
import { useFetch } from "../hooks/useFetch";

const Home: React.FC = () => {
  const URL = "https://www.googleapis.com/books/v1/volumes?q=+intitle";
  const [flag, setFlag] = useState(false);

  const { data, isLoading } = useFetch(URL);

  if (isLoading) return <div>Loading..</div>;

  return (
    <>
      <Books
        title="For You"
        books={data.items}
        changeFlag={() => setFlag((prev) => !prev)}
        flag={flag}
      />
    </>
  );
};

export default Home;
