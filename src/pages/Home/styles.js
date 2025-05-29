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
  max-width: 100%;
`;
export const CardWapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const CardInfo = styled.div`
  display: flex;
  flex-direction: row; 
  flex-wrap: nowrap;    
  gap: 60px;           
  margin-top: 16px;
`;