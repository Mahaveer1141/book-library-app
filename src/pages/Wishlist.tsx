import React, { useEffect, useState } from "react";
import Books from "../features/books";
import { IBook } from "../features/books/type";

const Wishlist: React.FC = () => {
  const [wishListBooks, setWishListBooks] = useState<IBook[]>([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const data: IBook[] = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishListBooks(data);
  }, [flag]);

  return (
    <>
      <Books
        title="My Wishilist"
        books={wishListBooks}
        changeFlag={() => {
          setFlag((prev) => !prev);
        }}
        flag={flag}
      />
    </>
  );
};

export default Wishlist;
