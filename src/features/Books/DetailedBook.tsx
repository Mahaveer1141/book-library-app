import React from "react";
import { showBookTitle } from "./utils";

const Book: React.FC = () => {
  return (
    <div className="book-container bg-white border rounded-3 p-3 d-flex flex-column align-items-center">
      <img
        src="http://books.google.com/books/content?id=UjG8qXVRSSQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        alt="Book Cover"
      />
      <h5 className="mt-1">{showBookTitle("title")}</h5>
      <p className="mt-1">Author</p>
      <p className="mt-1">Rating</p>
      <button className="btn btn-secondary mt-2">Add to Wishlist</button>
    </div>
  );
};

export default Book;
