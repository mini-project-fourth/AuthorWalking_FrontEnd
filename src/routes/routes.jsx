import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Write from "../pages/Write/Write";
import Header from "../layouts/Header/Header";
import BookShelf from "../pages/BookShelf/BookShelf";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import MyPage from "../pages/MyPage/MyPage";
import View from "../pages/View/View";
import BookSearch from "../pages/BookSearch/BookSearch";
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
  {
    path: "/mypage",
    element: (
      <>
        <Header />
        <MyPage />
      </>
    ),
  },
  {
    path: "books/:id",
    element: (
      <>
        <Header />
        <View />
      </>
    )
  },
  {
    path: "books/:id/edit",
    element: (
      <>
        <Header />
        <Write />
      </>
    )
  },
  {
    path: "booksearch",
    element:(
      <>
        <Header />
        <BookSearch />
      </>
    ),
  }
]);

export default router;
