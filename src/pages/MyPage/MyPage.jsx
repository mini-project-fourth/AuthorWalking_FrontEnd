import React from "react";
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
import mockuser from "../../mock/MockUser";

const MyPage = () => {
  const user = mockuser;

  return (
    <MyPageWrapper>
      <MyPagePaper elevation={3}>
        <MyPageTitle>마이페이지</MyPageTitle>
        <ProfileSection>
          <ProfileAvatar src={user.profileImage}>{user.name[0]}</ProfileAvatar>
          <ProfileInfo>
            <InfoItem>
              <InfoLabel>이름</InfoLabel>
              <InfoValue>{user.name}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>이메일</InfoLabel>
              <InfoValue>{user.email}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>닉네임</InfoLabel>
              <InfoValue>{user.nickname}</InfoValue>
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