import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import bookSearch from "../../apis/BookSearch";

const BookSearch = () => {
  const location = useLocation();
  const searchValue = location.state?.searchValue || "";
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (searchValue) {
      bookSearch(searchValue).then(data => {
        setBooks(data.items || []);
      });
    }
  }, [searchValue]);

  return (
    <div>
      <h2>검색 결과: "{searchValue}"</h2>
      <ul>
        {books.map((book, idx) => (
          <li key={idx}>
            <img src={book.image} alt={book.title} style={{height: 50}} />
            <div>{book.title.replace(/<[^>]+>/g, "")}</div>
            <div>{book.author}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookSearch;