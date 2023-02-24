import React from "react";
import Search from "../features/search";

const Navbar: React.FC = () => {
  return (
    <>
      <header className="py-3 mb-3 border-bottom">
        <div
          className="container-fluid d-grid gap-3 align-items-center"
          style={{
            gridTemplateColumns: "1fr 2fr",
          }}
        >
          <div className="d-flex align-items-center">
            <a href="/" className="h4 text-decoration-none m-0">
              Book Library App
            </a>
            <a
              href="/wishlist"
              className="text-decoration-none h5 m-0 link-primary mx-4"
            >
              Wishlist
            </a>
          </div>
          <Search />
        </div>
      </header>
    </>
  );
};

export default Navbar;
