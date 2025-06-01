import axios from 'axios';

// 회원가입 API
export const signUp = async (userData) => {
  try {
    console.log("회원가입 요청 데이터:", userData);
    const response = await axios.post(
      'http://localhost:8080/auth/signup',
      userData,
      {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true,
      }
    );
  } catch (error) {
    console.error("회원가입 API 오류:", error);
    throw error;
  }
};