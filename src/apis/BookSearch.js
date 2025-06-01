import axios from "axios";
import config from "../config";

const BOOK_CLIENT_ID = config.BOOK_CLIENT_ID;
const BOOK_CLIENT_SECRET = config.BOOK_CLIENT_SECRET;
console.log("BOOK_CLIENT_ID:", BOOK_CLIENT_ID);
console.log("BOOK_CLIENT_SECRET:", BOOK_CLIENT_SECRET);

const bookSearch = async (query) => {
  const encodedQuery = encodeURIComponent(query);
  const url = `http://localhost:4000/api/naver-book?query=${encodedQuery}`;
  try {
    const response = await axios.get(url, {
      headers: {
        "X-Naver-Client-Id": BOOK_CLIENT_ID,
        "X-Naver-Client-Secret": BOOK_CLIENT_SECRET,
      },
    });
    return response.data;
  } catch (error) {
    console.error("도서 검색 API 오류:", error);
    return null;
  }
};

export default bookSearch;