import styled from "styled-components";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";

export const SignUpWrapper = styled(Box)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
`;

export const SignUpPaper = styled(Paper)`
  padding: 32px;
  width: 400px;
`;

export const SignUpTitle = styled(Typography).attrs({
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

export const SignUpForm = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SignUpTextField = styled(TextField)`
  && {
    margin-bottom: 0;
  }
`;

export const SignUpButton = styled(Button)`
  && {
    margin-top: 8px;
  }
`;