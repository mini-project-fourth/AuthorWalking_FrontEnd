import axios from "axios";

export const createBook = async (bookData) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    console.log("책 등록 요청 데이터:", bookData);
    console.log("책 등록 요청 헤더:", headers);

    const response = await axios.post(
      "http://localhost:8080/books",
      bookData, // 객체 그대로 전달
      {
        headers,
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("책 등록 API 오류:", error);
    return null;
  }
};