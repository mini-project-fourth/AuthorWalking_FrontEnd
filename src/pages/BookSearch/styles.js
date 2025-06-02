import styled from "styled-components";

export const SafeView = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 84px;
  margin-bottom: 40px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 400;
  margin: 18px 0px;
  text-align: center;
  align-self: flex-start;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 16px 18px; 
  padding: 0 32px;
  width: 100%;
  box-sizing: border-box;
`;