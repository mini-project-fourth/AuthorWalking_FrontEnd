import React from "react";
import {
  LoginWrapper,
  LoginPaper,
  LoginTitle,
  LoginForm,
  LoginButton,
  InputField,
  SignUpButton,
} from "./styles";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <LoginWrapper>
      <LoginPaper elevation={3}>
        <LoginTitle>로그인</LoginTitle>
        <LoginForm component="form">
          <InputField
            label="이메일"
            type="email"
            variant="outlined"
            fullWidth
            required
          />
          <InputField
            label="비밀번호"
            type="password"
            variant="outlined"
            fullWidth
            required
          />
          <LoginButton
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            로그인하기
          </LoginButton>
          <SignUpButton
            type="button"
            variant="outlined"
            color="primary"
            fullWidth
            onClick={()=>{
              navigate("/signup");
            }}
          >
            회원가입
          </SignUpButton>
        </LoginForm>
      </LoginPaper>
    </LoginWrapper>
  );
};

export default Login;
