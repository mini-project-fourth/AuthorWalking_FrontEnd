import React, { useEffect, useState } from "react";
import {
  MyPageWrapper,
  MyPagePaper,
  MyPageTitle,
  ProfileSection,
  ProfileAvatar,
  ProfileInfo,
  InfoItem,
  InfoLabel,
  InfoValue,
  EditButton,
} from "./styles";
import { getUserInfo } from "../../apis/UserInfo";

const MyPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserInfo().then(setUser).catch(() => setUser(null));
  }, []);

  if (!user) return null;

  return (
    <MyPageWrapper>
      <MyPagePaper elevation={3}>
        <MyPageTitle>마이페이지</MyPageTitle>
        <ProfileSection>
          <ProfileAvatar src={user.profileImage}>{user.username?.[0]}</ProfileAvatar>
          <ProfileInfo>
            <InfoItem>
              <InfoLabel>이름</InfoLabel>
              <InfoValue>{user.username}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>이메일</InfoLabel>
              <InfoValue>{user.email}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>닉네임</InfoLabel>
              <InfoValue>{user.username}</InfoValue>
            </InfoItem>
          </ProfileInfo>
        </ProfileSection>
        <EditButton variant="contained" color="primary" fullWidth>
          정보 수정
        </EditButton>
      </MyPagePaper>
    </MyPageWrapper>
  );
};

export default MyPage;