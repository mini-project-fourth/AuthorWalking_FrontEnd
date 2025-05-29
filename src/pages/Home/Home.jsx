import React from "react";
import HomeBookInformationCard from "../../components/HomeBookInformationCard/HomeBookInformationCard";
import { SafeView, Title, CardRow, CardContainer } from "./styles";
import mockBooks from "../../mock/mockBook";
import Fab from "@mui/material/Fab";
import CreateIcon from "@mui/icons-material/Create";
import { useNavigate } from "react-router-dom";

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const Home = () => {
  const navigate = useNavigate();
  const chunkedBooks = chunkArray(mockBooks, 4);

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
    </SafeView>
  );
};

export default Home;
