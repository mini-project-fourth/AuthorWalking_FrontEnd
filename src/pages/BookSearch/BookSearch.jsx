import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BookInformationCard from "../../components/BookInformationCard/BookInformationCard";
import { SafeView, Title, CardContainer } from "./styles";

const BookSearch = () => {
  const location = useLocation();
  const searchValue = location.state?.searchValue || "";
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (searchValue) {
      import("../../apis/BookSearch").then(({ default: bookSearch }) => {
        bookSearch(searchValue).then(data => {
          const mappedBooks = (data?.items || []).map((item, idx) => ({
            id: idx,
            title: item.title.replace(/<[^>]+>/g, ""),
            author: item.author,
            cover: item.image,
            contents: item.description,
            pubdate: item.pubdate,
            hashTags: [],
          }));
          setBooks(mappedBooks);
        });
      });
    }
  }, [searchValue]);

  return (
    <SafeView>
      <Title>검색 결과: "{searchValue}"</Title>
      <CardContainer>
        {books.map((book) => (
          <div
            key={book.id}
            style={{
              flex: "1 1 calc(25% - 36px)",
              minWidth: "260px",
              maxWidth: "320px",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <BookInformationCard book={book} />
          </div>
        ))}
      </CardContainer>
    </SafeView>
  );
};

export default BookSearch;