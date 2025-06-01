import React, { useEffect, useState } from "react";
import generateImage from "../../apis/GenerateImage";
import { WriteContainer, WriteForm, WriteTitle, WriteTextArea, WriteSubmit, DivHr, ModalOverlay, ModalContent, ModalTitle, ModalMetadata, ModalImage, ModalDataControlButton, ModalBtnContainer, ModalContentData, ModalCloseButton, HashtagInput, HashTagContainer, HashtagButton, FormDivHr, ProgressCircleContainer } from './styles';
import CircularProgress from '@mui/material/CircularProgress';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getBook, postBook, putBook } from "../../apis/Book";
import { getUserInfo } from "../../apis/UserInfo";

const Write = () => {
  const { id } = useParams();
  const location = useLocation();
  const editMode = location.pathname.includes("edit");

  const [book, setBook] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [hashtags, setHashtags] = useState([]);
  const [tag, setTag] = useState("");
  
  const navigate = useNavigate();

  // set data if editmode
  useEffect(() => {
    const fetchBook = async () => {
      const book = await getBook(id);
      if (book) {
        setBook(book);
        setTitle(book.title);
        setContent(book.contents);
        setHashtags(book.hashTags.map((hashtag) => hashtag.tagName));
        setImageUrl(book.cover);
      }
    };
    if (editMode) {
      fetchBook();
    }
  }, [editMode, id]);

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

  // Enter로 해시태그 입력
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (e.target.value !== "") {
        setHashtags([...hashtags, e.target.value.trim()]);
        setTag("");
      }
    }
  };

  const handleUpload = async () => {
    setUploading(true);
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    let newBook;
    if (editMode) {
      newBook = {
        title,
        author: book.author,
        contents: content,
        cover: imageUrl,
        hashTags: hashtags
      };
      console.log("수정 요청 데이터:", newBook);
      console.log("수정 요청 헤더:", config.headers);
      await putBook(newBook, book.id, config);
    } else {
      // 서버에서 사용자 정보 받아와서 author에 넣기
      let username = "홍길동";
      try {
        const userInfo = await getUserInfo();
        username = userInfo.username;
      } catch (e) {
        alert("사용자 정보를 불러올 수 없습니다.");
        setUploading(false);
        return;
      }
      newBook = {
        title,
        author: username,
        contents: content,
        cover: imageUrl,
        hashTags: hashtags ? hashtags : [],
      };
      console.log("등록 요청 데이터:", newBook);
      console.log("등록 요청 헤더:", config.headers);
      await postBook(newBook, config);
    }

    // 초기화
    setTitle("");
    setContent("");
    setImageUrl(null);
    setHashtags([]);
    setUploading(false);

    // 리다이렉트
    navigate("/");
  };

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

      {/* Modal */}
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
                  hashtags.map((hashtag, idx) => {
                    return (
                      <HashtagButton 
                        key={`${hashtag}-${idx}`}
                        onClick={() => {
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
                {
                  uploading ? (
                    <ProgressCircleContainer>
                      <CircularProgress size="22px" sx={{color: "#DADADA"}}/>
                    </ProgressCircleContainer>
                  ) : (
                    <ModalDataControlButton onClick={handleUpload}>Upload</ModalDataControlButton>
                  )
                }
              </ModalBtnContainer>
            </ModalMetadata>
          </ModalContent>
        </ModalOverlay>
      )}
    </WriteContainer>
  );
};

export default Write;