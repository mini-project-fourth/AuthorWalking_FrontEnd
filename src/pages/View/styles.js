import styled from 'styled-components';

export const WriteContainer = styled.div`
  height: 100vh;
  margin: 80px auto 0 auto;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const WriteForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

export const WriteTools = styled.div`
  width: 100%,
  height: 42px;
  background: #EFEFEF;
  display: flex;
  justify-content: end;
  padding: 4px 12px;
  border-radius: 18px;
  position: relative;
`

export const OpenDropdownMenuBtn = styled.button`
  cursor: pointer;
  border: 0px;
  background: transparent;
  z-index: 100;
`

export const DropdownMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  top: 32px;
  right: 0;
  border:rgba(67, 67, 67, 0.8) 0.3px solid;
  box-shadow: 4px 4px 30px 0px rgba(31, 31, 34, 0.1);
  background:rgba(255, 255, 255, 0.85);
  border-radius: 18px;
  padding: 22px;
`

export const DropdownMenuBtn = styled.button`
  display: flex;
  align-content: center;
  background: transparent;
  border: none;
  padding: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
`

export const DropdownMenuTitle = styled.p`
  margin-left: 4px;
`

export const WriteTitle = styled.input`
  height: 80px;
  font-size: 32px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  outline: none;
  background-color: transparent;
  cursor: default;
  padding: 8px 4px;
`;

export const WriteTextArea = styled.textarea`
  margin-top: 24px;
  height: 100%;
  padding: 12px;
  font-size: 18px;
  border: none;
  outline: none;
  resize: none; 
  background-color: transparent;
  cursor: default;
  overflow: auto;
  resize: vertical;

  &::-webkit-scrollbar {
    width: 8px; // 스크롤바 너비
  }

  &::-webkit-scrollbar-track {
    background: none;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(102, 102, 102, 0.76)  /* 스크롤바 색 */
    border-radius: 4px;
    border: none;
  }
`;

export const WriteSubmit = styled.button`
  align-self: flex-end;
  padding: 16px 32px;
  background: #666666;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #666666;
  }
`;

export const DivHr = styled.div`
  background: black;
  height: 0.5px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 30px;
`