import styled from "styled-components";
import { Box, Paper, Typography, Avatar, Button } from "@mui/material";

export const MyPageWrapper = styled(Box)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
`;

export const MyPagePaper = styled(Paper)`
  padding: 40px 32px;
  width: 420px;
`;

export const MyPageTitle = styled(Typography).attrs({
  variant: "h5",
  fontWeight: "bold",
  align: "center",
  mb: 3,
})`
  && {
    font-weight: bold;
    text-align: center;
    margin-bottom: 32px;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 32px;
`;

export const ProfileAvatar = styled(Avatar)`
  && {
    width: 72px;
    height: 72px;
    font-size: 2.2rem;
    background: #1976d2;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const InfoLabel = styled.div`
  font-size: 0.95rem;
  color: #888;
`;

export const InfoValue = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: #222;
`;

export const EditButton = styled(Button)`
  && {
    margin-top: 24px;
    font-weight: bold;
    font-size: 1rem;
  }
`;