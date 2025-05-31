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
  padding: 22px;
  position: absolute;
  top: 24px;
  right: 0;
  border: #434343 0.3px solid;
  background: white;
  border-radius: 18px;
`

export const DropdownMenuBtn = styled.button`
  background: transparent;
  border: none;
  padding: 4px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
`
// Dropdown menu 안 메뉴 버튼 만들기!!!

export const WriteTitle = styled.input`
  height: 80px;
  font-size: 32px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  outline: none;
  background-color: transparent;
  cursor: default;
`;

export const WriteTextArea = styled.textarea`
  height: 60%;
  padding: 12px;
  font-size: 18px;
  border: none;
  outline: none;
  resize: none; 
  background-color: transparent;
  cursor: default;
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