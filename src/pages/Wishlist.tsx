import React from "react";
import BookList from "../features/books/components/BookList";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const WishlistRoute: React.FC = () => {
  const wishListBooks = useSelector((state: RootState) => state.books.wishList);

  return (
    <>
      <BookList title="Wishlist" books={wishListBooks} />
    </>
  );
};

export default WishlistRoute;
