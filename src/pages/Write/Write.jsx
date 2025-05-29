import React, { useState } from "react";
import generateImage from "../../apis/GenerateImage";
import { WriteContainer, WriteForm, WriteFormGroup, WriteInput, WriteTextArea, WriteSubmit, WriteIconLabel, WriteIcon } from './styles';
import handleGenerateImage from "../../hooks/hooks";
const Write = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 이미지 생성 함수
const handleGenerateImage = async () => {
  setLoading(true);
  const prompt = `"${title}"라는 책의 표지 이미지를 만들어주세요.\n책의 내용: ${content}\n따뜻하고 감성적인 일러스트 스타일로, 책의 분위기를 잘 표현해 주세요.`;
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

  return (
    <WriteContainer>
      <WriteForm>
        {imageUrl && (
          <div style={{ width: "70%", height: "70%", marginBottom: 16 }}>
            <img src={imageUrl} alt="생성된 이미지" style={{ width: "100%", height: "50%", borderRadius: 8 }} />
          </div>
        )}
        <WriteFormGroup>
          <WriteIconLabel htmlFor="fileInput">
            <WriteIcon>＋</WriteIcon>
          </WriteIconLabel>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <WriteInput
            type="text"
            placeholder="제목을 입력해주세요!"
            autoFocus={true}
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </WriteFormGroup>
        <WriteFormGroup>
          <WriteTextArea
            placeholder="내용을 입력해주세요!"
            type="text"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </WriteFormGroup>
        <WriteSubmit type="button" onClick={handleGenerateImage} disabled={loading}>
          {loading ? "이미지 생성 중..." : "이미지 생성"}
        </WriteSubmit>
      </WriteForm>
    </WriteContainer>
  );
};

export default Write;