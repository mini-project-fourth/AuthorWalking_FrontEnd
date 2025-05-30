import React from "react";
import BookInformationCard from "../../components/BookInformationCard/BookInformationCard";
import mockBook from "../../mock/MockBook";

const BookShelf = () => {
  return (
    <div style={{ padding: 32 }}>
      <BookInformationCard book={mockBook} />
    </div>
  );
};

export default BookShelf;