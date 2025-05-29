import React from "react";
import HomeBookInformationCard from "../../components/HomeBookInformationCard/HomeBookInformationCard";
import { SafeView, CardInfo, CardContainer } from "./styles";
import mockBooks from "../../mock/mockBook";

const Home = () => {
  return (
    <SafeView>
      <CardContainer>
      <CardInfo>
        {mockBooks.map((book) => (
          <HomeBookInformationCard key={book.book_id} book={book} />
        ))}
      </CardInfo>
      </CardContainer>
    </SafeView>
  );
};

export default Home;