import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Write from '../pages/Write/Write';
import Header from '../layouts/Header/Header';
import BookShelf from '../pages/BookShelf/BookShelf';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: '/write',
    element: (
      <>
        <Header />
        <Write />
      </>
    ),
  },
  {
    path: '/bookshelf',
    element:(
      <>
        <Header />
        <BookShelf/>
      </>
    )
  },

]);

export default router;