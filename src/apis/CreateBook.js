import axios from "axios";

export const createBook = async (bookData) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/books",
      bookData
    );
    return response.data;
  } catch (error) {
    console.error("책 등록 API 오류:", error);
    return null;
  }
};