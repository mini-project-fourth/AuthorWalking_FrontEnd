import styled from "styled-components";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";

export const LoginWrapper = styled(Box)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
`;

export const LoginPaper = styled(Paper)`
  padding: 32px;
  width: 380px;
`;

export const LoginTitle = styled(Typography).attrs({
  variant: "h5",
  fontWeight: "bold",
  align: "center",
  mb: 3,
})`
  && {
    font-weight: bold;
    text-align: center;
    margin-bottom: 24px;
  }
`;

export const LoginForm = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputField = styled(TextField)`
  && {
    margin-bottom: 0;
  }
`;

export const LoginButton = styled(Button)`
  && {
    margin-top: 8px;
  }
`;
export const SignUpButton = styled(Button)`
  && {
    background-color: #fff;
    color: #1976d2;
    border-color: #1976d2;
    margin-top: 8px;
  }
`;