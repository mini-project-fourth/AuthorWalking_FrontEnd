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
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);  // 검은 반투명 배경
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: black;
  color: white;
  padding: 24px 32px;
  border-radius: 12px;
  max-width: 75%;
  height: 50%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  position: relative;
`;

export const ModalImage = styled.img`
  min-width: 45%;
  min-height: 100%;
  background-color: grey;
`

export const ModalMetadata = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 45%;
  min-height: 100%;
  margin: 0px 24px;
`

export const ModalTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 12px;
`

export const ModalContentData = styled.p`
  font-size: 16px;
  display: block;
  min-width: 100%;
  max-height: 140px;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const ModalBtnContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-left: 4%;
  gap: 8px;
`

export const ModalDataControlButton = styled.button`
  width: 138px;
  height: 54px;
  border-radius: 32px;
  background: #DADADA;
  border: 2px solid #DADADA;
  cursor: pointer;
  transition: ease-out 0.2s;

  &:hover {
    background: black;
    color: #DADADA;
  }
`

export const ModalCloseButton = styled.button`
  cursor: pointer;
  min-width: 24px;
  min-height: 24px;
  border-radius: 50%;
  background: #DADADA;
  color: black;
  font-weight: bold;
  position: absolute;
  right: 12px;
  top: 12px;
  border: 2px solid #DADADA;
  text-align: center;
  transition: ease-out 0.2s;

  &:hover {
    background: black;
    color: #DADADA;
  }
`

export const HashTagContainer = styled.div`
  max-height: 120px;
  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &:: -webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 4px;
    border: none;
  }
`

export const HashtagButton = styled.button`
  display: inline;
  height: 36px;
  background: #5A5A5A;
  color: white;
  border-radius: 32px;
  border: none;
  padding: 4px 8px;
  margin: 4px 4px;
  cursor: pointer;
`

export const HashtagInput = styled.input`
  display: inline;
  background: none;
  color: white;
  box-shadow: none;
  border: none;

  &:focus {
    outline: none;
  }
`
export const FormDivHr = styled.div`
  background: rgba(255, 255, 255, 0.7);
  height: 1px;
  width: 128px;
  margin: 0px;
  padding: 0px;
`

export const ProgressCircleContainer = styled.div`
  width: 138px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
`