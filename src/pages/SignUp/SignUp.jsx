import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SignUpWrapper,
  SignUpPaper,
  SignUpTitle,
  SignUpForm,
  SignUpTextField,
  SignUpButton,
} from "./styles";
import { signUp } from "../../apis/SignUp";

const SignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    username: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password || !form.passwordCheck || !form.username) {
      alert("모든 항목을 입력하세요.");
      return;
    }
    if (form.password !== form.passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      await signUp({
        email: form.email,
        password: form.password,
        username: form.username,
      });
      alert("회원가입 성공!");
      navigate("/login");
    } catch (error) {
      alert("회원가입 실패: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <SignUpWrapper>
      <SignUpPaper elevation={3}>
        <SignUpTitle>회원가입</SignUpTitle>
        <SignUpForm component="form" onSubmit={handleSubmit}>
          <SignUpTextField
            label="이메일"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={form.email}
            onChange={handleChange}
          />
          <SignUpTextField
            label="비밀번호"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={form.password}
            onChange={handleChange}
          />
          <SignUpTextField
            label="비밀번호 확인"
            name="passwordCheck"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={form.passwordCheck}
            onChange={handleChange}
          />
          <SignUpTextField
            label="닉네임"
            name="username"
            type="text"
            variant="outlined"
            fullWidth
            required
            value={form.username}
            onChange={handleChange}
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