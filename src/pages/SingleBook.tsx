import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBook } from "../features/books/type";
import { useFetch } from "../hooks/useFetch";

const SingleBook: React.FC = () => {
  const [flag, setFlag] = useState(false);
  const { id } = useParams();

  const URL = `https://www.googleapis.com/books/v1/volumes/${id}`;

  const { data, isLoading } = useFetch(URL);
  const book: IBook = data;

  const authors: string[] = book?.volumeInfo?.authors || [];
  const categories: string[] = book?.volumeInfo?.categories || [];

  const [wishListBooks, setWishList] = useState<IBook[]>([]);

  useEffect(() => {
    const data: IBook[] = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishList(data);
  }, [flag]);

  if (isLoading) return <div>Loading...</div>;

  const containBook = wishListBooks.some(
    (wishListBook) => wishListBook.id === book.id
  );

  function handleClick() {
    let updatedList;
    if (!containBook) {
      updatedList = [...wishListBooks, book];
    } else {
      updatedList = wishListBooks.filter(
        (wishListBook) => wishListBook.id !== book?.id
      );
    }
    setFlag(!flag);
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
  }

  return (
    <div className="bg-light border rounded-3 p-4">
      <div className="books-scroll">
        <div className="d-flex">
          <img
            src={book?.volumeInfo?.imageLinks?.smallThumbnail}
            alt="Book Cover"
          />
          <div className="ms-2 d-flex flex-column justify-content-center">
            <h5 className="mt-1 mb-2">{book.volumeInfo.title}</h5>
            <p className="mb-2">Page Count:- {book.volumeInfo.pageCount}</p>
            <p className="mb-2">
              Authors:-
              {authors.map((author: string, index: number) => (
                <span className="h6" key={index}>
                  {" "}
                  {author}
                  {index === authors.length - 1 ? "" : ", "}
                </span>
              ))}
            </p>
            <button
              className="btn btn-secondary mt-2"
              style={{ maxWidth: "200px" }}
              onClick={handleClick}
            >
              {!containBook ? "Add to Wishlist" : "Remove"}
            </button>
          </div>
        </div>
        <div className="mt-4">
          <h6 className="mt-1">
            Publisher:-
            <span> {book.volumeInfo.publisher}</span>
          </h6>
        </div>
        <div className="mt-4">
          <h6 className="mb-2">
            Published Date:- <span> {book.volumeInfo.publishedDate}</span>
          </h6>
        </div>
        <div className="mt-4">
          <h6 className="mt-1">
            Rating :- {book?.volumeInfo?.averageRating || "NA"}
          </h6>
        </div>
        <div className="mt-4">
          <h6 className="mt-1">Description :- </h6>
          <p className="ms-2">{book.volumeInfo.description}</p>
        </div>
        <div className="mt-4">
          <h6 className="mt-1">Categories :- </h6>
          <ul className="mt-1">
            {categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h6 className="mt-1">
            Find at :- <a href={book.volumeInfo.infoLink}>Google Books</a>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
