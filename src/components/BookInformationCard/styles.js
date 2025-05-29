import styled from 'styled-components';

export const Card = styled.div`
  width: 320px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  background: #fff;
  padding: 24px;
  margin: 16px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CoverImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: 1.3rem;
  margin: 8px 0 4px 0;
`;

export const Author = styled.p`
  color: #1976d2;
  margin: 0 0 12px 0;
  font-weight: bold;
`;

export const Content = styled.p`
  font-size: 1rem;
  color: #444;
  margin-bottom: 12px;
`;

export const DateInfo = styled.div`
  font-size: 0.85rem;
  color: #aaa;
  margin-top: 8px;
`;
