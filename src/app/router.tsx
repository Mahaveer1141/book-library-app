import { createBrowserRouter } from "react-router-dom";
import BooksSearch from "../pages/BooksSearch";
import Home from "../pages/Home";
import SingleBook from "../pages/SingleBook";
import Wishlist from "../pages/Wishlist";
import App from "./App";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <BooksSearch />,
      },
      {
        path: "/books/:id",
        element: <SingleBook />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);

export default router;
