import React, { useEffect, useState } from "react";
import HomeBookInformationCard from "../../components/HomeBookInformationCard/HomeBookInformationCard";
import { SafeView, Title, CardRow, CardContainer } from "./styles";
import Fab from "@mui/material/Fab";
import CreateIcon from "@mui/icons-material/Create";
import { useNavigate } from "react-router-dom";
import { getBooks } from "../../apis/Book";
import { getUserInfo } from "../../apis/UserInfo";

const chunkArray = (array, size) => {
  if (!Array.isArray(array)) return [];
  if (!Array.isArray(array)) return [];
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const Home = () => {
  const navigate = useNavigate();
  const [booksToShow, setBooksToShow] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));

    const fetchBooks = async () => {
      try {
        // 사용자 정보 먼저 가져오기
        const userInfo = await getUserInfo();
        setUserId(userInfo.id);
        console.log("내 userId:", userInfo.id);

        // 전체 책 목록 가져오기
        const data = await getBooks();
        console.log("전체 책 목록:", data);

        // 내 userId와 일치하는 책만 필터링
        const myBooks = Array.isArray(data)
          ? data.filter((book) => {
              const isMine = book.user && book.user.id === userInfo.id;
              console.log(
                `책ID: ${book.id}, 책 userId: ${book.user?.id}, 내 userId: ${userInfo.id}, isMine: ${isMine}`
              );
              return isMine;
            })
          : [];
        setBooksToShow(myBooks);
        console.log("내 책만 필터링 결과:", myBooks);
      } catch (e) {
        setBooksToShow([]);
      }
    };
    fetchBooks();
  }, []);

  const chunkedBooks = chunkArray(booksToShow, 4);

  return (
    <SafeView>
      <Title>나의 책장</Title>
      <CardContainer>
        {chunkedBooks.map((books, index) => (
          <CardRow key={index}>
            {books.map((book, bookIndex) => (
              <HomeBookInformationCard key={bookIndex} book={book} token={token} />
            ))}
          </CardRow>
        ))}
      </CardContainer>
      <Fab
        aria-label="add"
        sx={{
          background: "#666666",
          color: "#fff",
          position: "fixed",
          bottom: 70,
          right: 70,
          zIndex: 1000,
          "&:hover": {
            color: "#666666",
          },
        }}
        onClick={() => navigate("/write")}
      >
        <CreateIcon />
      </Fab>
    </SafeView>
  );
};

export default Home;