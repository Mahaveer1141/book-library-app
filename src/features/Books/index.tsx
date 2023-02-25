import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Book from "./components/Book";
import "./book.css";
import { filterBooks } from "./services/filterBook";
import { IBook } from "./type";

interface IProps {
  title: string;
  books: IBook[];
}

const Books: React.FC<IProps> = ({ title, books }) => {
  const filters = useSelector((state: RootState) => state.filter);
  const filteredBooks = filterBooks(books, filters);
  const [wishListToggle, setWishListToggle] = useState(false);

  return (
    <div className="bg-light border rounded-3 p-4">
      <h3>{title}: </h3>
      <div className="d-grid gap-3 book-list books-scroll">
        {filteredBooks?.length === 0 ? (
          <div>No Books</div>
        ) : (
          <>
            {filteredBooks?.map((book, index) => (
              <Book
                book={book}
                key={index}
                wishListToggle={wishListToggle}
                setWishListToggle={() => setWishListToggle((prev) => !prev)}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Books;
