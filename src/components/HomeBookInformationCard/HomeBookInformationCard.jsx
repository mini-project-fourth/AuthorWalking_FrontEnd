import React from "react";
import { CardWrapper, CardInner, CardFront, CardBack, CardImage, TitleHashtag, Title, Hashtag, CreateInfo, CreateDate, Content, HashtagWrapper } from "./styles";
import { useNavigate } from "react-router-dom";

const HomeBookInformationCard = ({ book }) => {
  if (!book) return null;
  const navigate = useNavigate();

  return (
    <CardWrapper
      onClick={() => {
        console.log(book.id)
        navigate(`/books/${book.id}`, {state: {book}})
      }}  
    >
      <CardInner>
        <CardFront>
          <CardImage style={{ backgroundImage: `url(${book.cover})`, backgroundSize: "cover" }} />
          <TitleHashtag>
            <Title>{book.title}</Title>
            <HashtagWrapper>
              {book.hashTags.map((tag, idx) => {
                return (
                  <Hashtag key={`hashtag:${book.id}-${idx}`}># {tag.tagName}</Hashtag>
                )
              })}
            </HashtagWrapper>
          </TitleHashtag>
          <CreateInfo>
            <CreateDate>{new Date(book.createAt).toLocaleDateString()}</CreateDate>
          </CreateInfo>
        </CardFront>
        <CardBack>
          <Content>{book.contents}</Content>
        </CardBack>
      </CardInner>
    </CardWrapper>
  );
};

export default HomeBookInformationCard;