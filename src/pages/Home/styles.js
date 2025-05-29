import styled from "styled-components";

export const SafeView = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 64px);
  padding-top: 64px;
  
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 72px;
`;
export const CardInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 16px;
`;
