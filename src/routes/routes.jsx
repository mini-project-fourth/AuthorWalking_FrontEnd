import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Write from "../pages/Write/Write";
import Header from "../layouts/Header/Header";
import BookShelf from "../pages/BookShelf/BookShelf";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: "/write",
    element: (
      <>
        <Header />
        <Write />
      </>
    ),
  },
  {
    path: "/bookshelf",
    element: (
      <>
        <Header />
        <BookShelf />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Header />
        <Login />
      </>
    ),
  },
    {
    path: "/signup",
    element: (
      <>
        <Header />
        <SignUp />
      </>
    ),
  },
]);

export default router;
