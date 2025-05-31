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
  aspect-ratio: 2 / 3;
  min-width: 200px;
  max-width: 240px;
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
  padding: 12px;
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
  border-radius: 0px;
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
  font-size: 18px;
  margin: 8px 0px;
  font-weight: bold;
`;

export const HashtagWrapper = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  white-space: nowrap;
`

export const Hashtag = styled.span`
  display: inline-block;
  color: #414141;
  font-size: 14px;
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
  font-size: 12px;
`;

export const Content = styled.div`
  font-size: 1rem;
  color: #333;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
`;
