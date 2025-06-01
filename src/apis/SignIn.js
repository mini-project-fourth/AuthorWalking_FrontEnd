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
    return response.data;
  } catch (error) {
    console.error("로그인 API 오류:", error);
    throw error;
  }
};