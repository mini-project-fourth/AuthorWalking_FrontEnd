import axios from "axios";

const bookSearch = async (query, display = 20, start = 1) => {
  try {
    const encodedQuery = encodeURIComponent(query);
    const url = `http://localhost:8080/api/booksearch?query=${encodedQuery}&display=${display}&start=${start}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("도서 검색 API 오류:", error);
    return null;
  }
};

export default bookSearch;