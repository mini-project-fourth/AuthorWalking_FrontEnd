import React from "react";
import HomeBookInformationCard from "../../components/HomeBookInformationCard/HomeBookInformationCard";
import { SafeView, CardInfo, CardContainer } from "./styles";
import mockBooks from "../../mock/mockBook";
import Fab from '@mui/material/Fab';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from "react-router-dom";
import { CardWapper } from "./styles";

// 배열을 4개씩 나누는 함수
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
      <CardContainer>
        {chunkedBooks.map((books, idx) => (
        <CardWapper>
          <CardInfo key={idx}>
            {books.map((book) => (
              <HomeBookInformationCard key={book.book_id} book={book} />
            ))}
          </CardInfo>
        </CardWapper>
        ))}
      </CardContainer>
      <Fab
        color="primary"
        aria-label="add"
        style={{
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