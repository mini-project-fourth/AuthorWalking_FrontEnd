import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 24px;
  max-width: 100%;
  margin: 0 auto;
`;

export const Card = styled.div`
  width: 200px;
  height: 320px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin: 16px 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 100%;
  min-height: 160px;
  background: #eee;
  margin: 0 12px 12px 12px;
  border-radius: 8px;
  background-position: center;
  background-repeat: no-repeat;
`;

export const TitleHashtag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  width: 100%;
`;

export const Title = styled.h3`
  font-size: 1.1rem;
  margin: 0 0 4px 0;
  font-weight: bold;
`;

export const Hashtag = styled.span`
  color: #414141;
  font-size: 0.95rem;
`;

export const CreateInfo = styled.div`
  margin-top: 8px;
  width: 100%;
  display: flex;
  justify-content: flex-end; 
`;

export const CreateDate = styled.span`
  color: #818181;
  font-size: 0.9rem;
`;