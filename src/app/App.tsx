import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navabr";
import Filter from "../features/filters";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid pb-3">
        <div
          className="d-grid gap-3"
          style={{
            gridTemplateColumns: "1fr 3fr",
          }}
        >
          <Filter />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
