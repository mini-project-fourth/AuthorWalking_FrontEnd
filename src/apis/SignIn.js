import axios from 'axios';

// 로그인 API
export const signIn = async (userData) => {
  try {
    console.log("로그인 요청 데이터:", userData);
    const response = await axios.post(
      'http://localhost:8080/auth/login',
      userData,
      {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true,
      }
    );
    // 로그인 성공 시 토큰을 localStorage에 저장
    localStorage.setItem("token", response.data);
    console.log("로그인 성공, 토큰 저장:", response.data);
    return response.data;
  } catch (error) {
    console.error("로그인 API 오류:", error);
    throw error;
  }
};