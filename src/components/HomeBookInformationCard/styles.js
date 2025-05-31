import styled from "styled-components";

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform-origin: center center; 
`;

export const CardWrapper = styled.div`
  perspective: 1000px;
  width: 200px;
  height: 320px;
  margin: 16px 0;
  display: inline-block;
  vertical-align: top;
  cursor: pointer;

  &:hover ${CardInner} {
    transform: rotateY(180deg);
  }
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
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

export const HashtagWrapper = styled.div`
  width: 100%;
`

export const Hashtag = styled.span`
  display: inline;
  color: #414141;
  font-size: 0.95rem;
  margin: 0px 4px;
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

export const Content = styled.div`
  font-size: 1rem;
  color: #333;
  text-align: center;
  word-break: keep-all;
`;
