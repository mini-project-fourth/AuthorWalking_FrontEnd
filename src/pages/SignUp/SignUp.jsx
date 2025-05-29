import React from "react";
import {
  SignUpWrapper,
  SignUpPaper,
  SignUpTitle,
  SignUpForm,
  SignUpTextField,
  SignUpButton,
} from "./styles";

const SignUp = () => {
  return (
    <SignUpWrapper>
      <SignUpPaper elevation={3}>
        <SignUpTitle>회원가입</SignUpTitle>
        <SignUpForm component="form">
          <SignUpTextField
            label="이메일"
            type="email"
            variant="outlined"
            fullWidth
            required
          />
          <SignUpTextField
            label="비밀번호"
            type="password"
            variant="outlined"
            fullWidth
            required
          />
          <SignUpTextField
            label="비밀번호 확인"
            type="password"
            variant="outlined"
            fullWidth
            required
          />
          <SignUpTextField
            label="닉네임"
            type="text"
            variant="outlined"
            fullWidth
            required
          />
          <SignUpButton
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            회원가입
          </SignUpButton>
        </SignUpForm>
      </SignUpPaper>
    </SignUpWrapper>
  );
};

export default SignUp;