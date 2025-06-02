import React from "react";
import {
  CardWrapper,
  CardInner,
  CardFront,
  CardBack,
  CardImage,
  TitleHashtag,
  Title,
  Hashtag,
  CreateInfo,
  CreateDate,
  Content,
  HashtagWrapper,
  Author,
} from "./styles";
import { useNavigate } from "react-router-dom";

const BookInformationCard = ({ book }) => {
  if (!book) return null;
  const navigate = useNavigate();

  return (
    <CardWrapper
      onClick={() => {
        console.log(book.id);
        navigate(`/books/${book.id}`, { state: { book } });
      }}
    >
      <CardInner>
        <CardFront>
          <CardImage
            style={{
              backgroundImage: `url(${book.cover})`,
              backgroundSize: "cover",
            }}
          />
          <TitleHashtag>
            <Title>{book.title}</Title>
            <HashtagWrapper>
              {(book.hashTags || []).map((tag, idx) => (
                <Hashtag key={`hashtag:${book.id}-${idx}`}>
                  # {tag.tagName}
                </Hashtag>
              ))}
            </HashtagWrapper>
          </TitleHashtag>
          <CreateInfo>
            <Author>
              {book.author ? `저자: ${book.author}` : "저자 정보 없음"}
            </Author>
            <CreateDate>
              {book.pubdate
                ? (() => {
                    const str = book.pubdate.toString();
                    if (str.length === 8) {
                      return `${str.slice(0, 4)}.${str.slice(4, 6)}.${str.slice(
                        6,
                        8
                      )}`;
                    } else if (str.length === 6) {
                      return `${str.slice(0, 4)}.${str.slice(4, 6)}`;
                    } else if (str.length === 4) {
                      return str;
                    }
                    return str;
                  })()
                : "출간일 정보 없음"}
            </CreateDate>
          </CreateInfo>
        </CardFront>
        <CardBack>
          <Content>{book.contents}</Content>
        </CardBack>
      </CardInner>
    </CardWrapper>
  );
};

export default BookInformationCard;
