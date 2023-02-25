import React, { useEffect, useState } from "react";
import { IBook } from "../features/books/type";
import BookList from "../features/books/components/BookList";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const WishlistRoute: React.FC = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  const wishListToggle = useSelector(
    (state: RootState) => state.book.wishListToggle
  );

  useEffect(() => {
    const wishtListBooks = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setBooks(wishtListBooks);
  }, [wishListToggle]);

  return (
    <>
      <BookList title="Wishlist" books={books} />
    </>
  );
};

export default WishlistRoute;
