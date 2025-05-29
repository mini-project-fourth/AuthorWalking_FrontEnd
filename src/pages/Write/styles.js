import styled from 'styled-components';

export const WriteContainer = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 80px auto 0 auto;
  padding: 32px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WriteImg = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const WriteForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const WriteFormGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const WriteIconLabel = styled.label`
  cursor: pointer;
  color: #1976d2;
  display: flex;
  align-items: center;
`;

export const WriteIcon = styled.span`
  font-size: 2rem;
  font-weight: bold;
  padding: 0 8px;
`;

export const WriteInput = styled.input`
  flex: 1;
  padding: 12px;
  font-size: 1.1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  outline: none;
`;

export const WriteTextArea = styled.textarea`
  flex: 1;
  min-height: 120px;
  padding: 12px;
  font-size: 1.1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  outline: none;
  resize: none; 
  height: 400px;
`;

export const WriteSubmit = styled.button`
  align-self: flex-end;
  padding: 10px 32px;
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #115293;
  }
`;