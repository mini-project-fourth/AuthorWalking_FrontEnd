import React from "react";
import HomeBookInformationCard from "../../components/HomeBookInformationCard/HomeBookInformationCard";
import { SafeView, Title, CardRow, CardContainer } from "./styles";
import mockBooks from "../../mock/MockBook";
import Fab from "@mui/material/Fab";
import CreateIcon from "@mui/icons-material/Create";
import { useLocation, useNavigate } from "react-router-dom";

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const newBook = location.state;
  const bookToShow = newBook ? [newBook, ...mockBooks] : mockBooks

  const chunkedBooks = chunkArray(bookToShow, 4);

  return (
    <SafeView>
      <Title>나의 책장</Title>
      <CardContainer>
        {chunkedBooks.map((books, index) => (
          <CardRow key={index}>
            {books.map((book, bookIndex) => (
              <HomeBookInformationCard key={bookIndex} book={book} />
            ))}
          </CardRow>
        ))}
      </CardContainer>
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: "fixed",
          bottom: 70,
          right: 70,
          zIndex: 1000,
        }}
        onClick={() => navigate("/write")}
      >
        <CreateIcon />
      </Fab>
    </SafeView>
  );
};

export default Home;