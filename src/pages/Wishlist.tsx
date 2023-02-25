import React, { useEffect, useState } from "react";
import { IBook } from "../features/books/type";
import BookList from "../features/books/components/BookList";

const WishlistRoute: React.FC = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  useEffect(() => {
    const wishtListBooks = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setBooks(wishtListBooks);
  }, []);
  return (
    <>
      <BookList title="Wishlist" books={books} />
    </>
  );
};

export default WishlistRoute;
