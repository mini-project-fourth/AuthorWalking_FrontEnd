import React, { useState } from "react";
import generateImage from "../../apis/GenerateImage";
import { WriteContainer, WriteForm, WriteTitle, WriteTextArea, WriteSubmit, DivHr, ModalOverlay, ModalContent, ModalTitle, ModalMetadata, ModalImage, ModalDataControlButton, ModalBtnContainer, ModalContentData, ModalCloseButton, HashtagInput, HashTagContainer, HashtagButton, FormDivHr, ProgressCircleContainer } from './styles';
import CircularProgress from'@mui/material/CircularProgress'
import mockBooks from "../../mock/MockBook";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [hashtags, setHashtags] = useState([]);
  const [tag, setTag] = useState("");

const navigate = useNavigate();

  // 이미지 생성 함수
const handleGenerateImage = async () => {
  setLoading(true);
  const prompt = `"${title}"라는 책의 표지를 만들어주세요. 표지 이미지는 실물 3D 이미지가 아닌 웹에 표시되는 형식을 따릅니다. 3D 책 제품의 이미지가 아닌 일러스트 이미지를 리턴하시오.\n책의 내용: ${content}\n따뜻하고 감성적인 일러스트 스타일로, 책의 분위기를 잘 표현해 주세요.`;
  try {
    const url = await generateImage(prompt);
    setImageUrl(url);
    console.log("생성된 이미지 URL:", url);
    console.log("프롬프트:", prompt);
  } catch (e) {
    alert("이미지 생성에 실패했습니다.", e);
  }
  setLoading(false);
};

const handleKeyDown = (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault(); // 줄바꿈 방지
    setHashtags([...hashtags, e.target.value]);
    setTag("");
  }
};

const handleUpload = () => {
  const newBook = {
    book_id: mockBooks.length,
    title: title,
    author: "홍길동",
    content: content,
    cover_image_url: imageUrl,
    create_at: Date.now(),
    update_at: Date.now(),
    hashtag: hashtags,
  }

  // 초기화
  setTitle("");
  setContent("");
  setImageUrl(null);
  setHashtags([]);

  // 리다이렉트
  navigate("/", {state: newBook});
}

  return (
    <WriteContainer>
      <WriteForm>
        <WriteTitle
            type="text"
            placeholder="Title"
            autoFocus={true}
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        <DivHr />
        <WriteTextArea
            placeholder="Content"
            type="text"
            value={content}
            onChange={e => setContent(e.target.value)}
        />
        <WriteSubmit type="button" onClick={() => setShowModal(true)}>
          제출
        </WriteSubmit>
      </WriteForm>
      {showModal && (
        <ModalOverlay onClick={() => setShowModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalImage
              src={imageUrl}
              alt="Test Img" />
            <ModalMetadata>
              <ModalCloseButton onClick={() => setShowModal(false)}>X</ModalCloseButton>
              <ModalTitle>{title}</ModalTitle>
              <ModalContentData>{content}</ModalContentData>
              <FormDivHr />
              <HashTagContainer>
                {
                  hashtags.map((hashtag) => {
                    return (
                      <HashtagButton onClick={() => {
                        setHashtags(hashtags.filter((tag) => tag !== hashtag))
                      }}>
                        # {hashtag}
                      </HashtagButton>
                    )
                  })
                }
                <HashtagInput
                  className="hashtag-input"
                  value={tag} 
                  type="text"
                  onKeyDown={handleKeyDown}
                  onChange={e => setTag(e.target.value)}
                  placeholder="태그를 입력하세요."
                />
              </HashTagContainer>
              <ModalBtnContainer>
                {
                  loading ? (
                    <ProgressCircleContainer>
                      <CircularProgress size="22px" sx={{color: "#DADADA"}}/>
                    </ProgressCircleContainer>
                  ) : (
                    <ModalDataControlButton onClick={() => handleGenerateImage()}>Generate</ModalDataControlButton>
                  )
                }
                <ModalDataControlButton onClick={handleUpload}>Upload</ModalDataControlButton>
              </ModalBtnContainer>
            </ModalMetadata>
          </ModalContent>
        </ModalOverlay>
      )}
    </WriteContainer>
    
  );
};

export default Write;