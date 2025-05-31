import React from "react";
import {Card, CoverImage, Title, Author, Content, DateInfo} from "./styles";
import { useNavigate } from "react-router-dom";

const BookInformationCard = ({ book }) => {
  return (
    <Card >
      <CoverImage 
        src={book.cover_image_url} 
        alt={book.title} 
      />
      <Title>{book.title}</Title>
      <Author>by {book.author}</Author>
      <Content>{book.content}</Content>
      <DateInfo>
        등록일: {new Date(book.create_at).toLocaleDateString()}<br />
        수정일: {new Date(book.update_at).toLocaleDateString()}
      </DateInfo>
    </Card>
  );
};

export default BookInformationCard;