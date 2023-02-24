import React from "react";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Navbar from "../components/Navabr";
import Filter from "../features/filters";
import BooksSearch from "../pages/BooksSearch";
import Home from "../pages/Home";
import SingleBook from "../pages/SingleBook";
import Wishlist from "../pages/Wishlist";
import router from "./router";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="container-fluid pb-3">
          <div
            className="d-grid gap-3"
            style={{
              gridTemplateColumns: "1fr 3fr",
            }}
          >
            <Filter />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<BooksSearch />} />
              <Route path="/books/:id" element={<SingleBook />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
