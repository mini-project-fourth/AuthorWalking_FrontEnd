import React, { useEffect, useState } from "react";
import { CardWrapper, CardInner, CardFront, CardBack, CardImage, TitleHashtag, Title, Hashtag, CreateInfo, CreateDate, Content, HashtagWrapper, AuthorInfo, AuthorProfile, AuthorName } from "./styles";
import { useNavigate } from "react-router-dom";

const HomeBookInformationCard = ({ book }) => {
  if (!book) return null;
  const navigate = useNavigate();
  const [userColor, setUserColor] = useState("#000000");

  useEffect(() => {
    if(book){
      setUserColor(getRandomHexColor(book.author));
    }
  }, [book])

  const getRandomHexColor = (str) => {
    let hash = 0;
    for(let i = 0; i<str.length;i++){
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = (hash & 0x00ffffff).toString(16).padStart(6, '0');
    return `#${color}`
  }

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
        </CardFront>
        <CardBack>
          <Content>{book.contents}</Content>
        </CardBack>
      </CardInner>
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
        <AuthorInfo>
          <AuthorProfile style={{background:userColor}} />
          <AuthorName>{book.author}</AuthorName>
        </AuthorInfo>
        <CreateDate>{new Date(book.createAt).toLocaleDateString()}</CreateDate>
      </CreateInfo>
    </CardWrapper>
  );
};

export default HomeBookInformationCard;