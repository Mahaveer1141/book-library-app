import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../app/store";
import { setWishList } from "../bookSlice";
import { BookType } from "../types";
import { showBookTitle } from "../utils";

interface IProps {
  book: BookType;
}

const Book: React.FC<IProps> = ({ book }) => {
  const wishListBooks = useSelector((state: RootState) => state.books.wishList);

  const dispatch = useDispatch();

  const containBook = wishListBooks.some(
    (wishListBook) => wishListBook.id === book.id
  );

  function handleClick() {
    let updatedList;
    if (!containBook) {
      updatedList = [...wishListBooks, book];
    } else {
      updatedList = wishListBooks.filter((wb) => wb.id !== book.id);
    }
    dispatch(setWishList(updatedList));
  }

  return (
    <div className="book-container bg-white border rounded-3 p-3 d-flex flex-column align-items-center">
      <Link to={`/books/${book?.id}`} className="book-link">
        <img
          src={book?.volumeInfo?.imageLinks?.smallThumbnail}
          alt="Book Cover"
        />
        <h5 className="mt-1">{showBookTitle(book?.volumeInfo?.title)}</h5>
        <p className="mt-1">
          {book?.volumeInfo?.authors && book?.volumeInfo?.authors[0]}
        </p>
        <p className="mt-1 mb-2">
          Rating:- {book?.volumeInfo?.averageRating || "NA"}
        </p>
      </Link>
      <button className="btn btn-secondary mt-auto" onClick={handleClick}>
        {!containBook ? "Add to Wishlist" : "Remove"}
      </button>
    </div>
  );
};

export default Book;
