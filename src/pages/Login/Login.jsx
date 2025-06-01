import React, { useState } from "react";
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
import { signIn } from "../../apis/SignIn";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(form);
      alert("로그인 성공!");
      navigate("/"); 
    } catch (error) {
      alert("로그인 실패: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <LoginWrapper>
      <LoginPaper elevation={3}>
        <LoginTitle>로그인</LoginTitle>
        <LoginForm component="form" onSubmit={handleSubmit}>
          <InputField
            label="이메일"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={form.email}
            onChange={handleChange}
          />
          <InputField
            label="비밀번호"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={form.password}
            onChange={handleChange}
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
            onClick={() => {
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