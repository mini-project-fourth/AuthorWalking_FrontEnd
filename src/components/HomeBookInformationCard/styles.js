import styled from "styled-components";

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform-origin: center; 
`;

export const CardWrapper = styled.div`
  aspect-ratio: 2 / 3;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 16px;
  position: relative;
  vertical-align: top;
  cursor: pointer;
  overflow: hidden;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
`;

export const CardImage = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;
  min-height: 160px;
  background: #eee;
  border-radius: 0px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
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
  justify-content: space-between;
  align-items: baseline;
`;

export const AuthorInfo = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`

export const AuthorProfile = styled.div`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 10px;
`

export const AuthorName = styled.p`
  color:rgb(77, 77, 77);
  font-size: 14px;
  font-weight: 500;
`

export const CreateDate = styled.span`
  color: #818181;
  font-size: 12px;
`;

export const Content = styled.div`
  font-size: 1rem;
  color: #333;
  text-align: center;
  overflow-wrap: break-word;
  line-height: 1.4;
`;
