import React from "react";
import { Card, CardImage, TitleHashtag, Title, Hashtag, CreateInfo, CreateDate } from "./styles";

const HomeBookInformationCard = ({ book }) => {
  if (!book) return null;

  return (
    <Card>
      <CardImage style={{ backgroundImage: `url(${book.cover_image_url})`, backgroundSize: "cover" }} />
      <TitleHashtag>
        <Title>{book.title}</Title>
        <Hashtag>{book.hashtag}</Hashtag>
      </TitleHashtag>
      <CreateInfo>
        <CreateDate>{new Date(book.create_at).toLocaleDateString()}</CreateDate>
      </CreateInfo>
    </Card>
  );
};

export default HomeBookInformationCard;