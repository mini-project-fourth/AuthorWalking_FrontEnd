import React from "react";
import { CardWrapper, CardInner, CardFront, CardBack, CardImage, TitleHashtag, Title, Hashtag, CreateInfo, CreateDate, Content } from "./styles";
import { useNavigate } from "react-router-dom";

const HomeBookInformationCard = ({ book }) => {
  if (!book) return null;
  const navigate = useNavigate();

  return (
    <CardWrapper
      onClick={() => {
        console.log(book.book_id)
        navigate(`/books/${book.book_id}`, {state: {book,}})
      }}  
    >
      <CardInner>
        <CardFront>
          <CardImage style={{ backgroundImage: `url(${book.cover_image_url})`, backgroundSize: "cover" }} />
          <TitleHashtag>
            <Title>{book.title}</Title>
            <Hashtag>{book.hashtag}</Hashtag>
          </TitleHashtag>
          <CreateInfo>
            <CreateDate>{new Date(book.create_at).toLocaleDateString()}</CreateDate>
          </CreateInfo>
        </CardFront>
        <CardBack>
          <Content>{book.content}</Content>
        </CardBack>
      </CardInner>
    </CardWrapper>
  );
};

export default HomeBookInformationCard;