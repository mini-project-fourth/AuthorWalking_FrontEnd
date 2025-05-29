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

export const WriteTitle = styled.input`
  height: 80px;
  font-size: 32px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  outline: none;
  background-color: transparent;
`;

export const WriteTextArea = styled.textarea`
  height: 60%;
  padding: 12px;
  font-size: 18px;
  border: none;
  outline: none;
  resize: none; 
  background-color: transparent;
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