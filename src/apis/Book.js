import axios from "axios";

// post/put은 명시적으로 JSON 문자열을 보냅니다.
export const postBook = async(book) => {
    try{
        await axios.post(
            "http://localhost:8080/books",
            JSON.stringify(book), // 명시적으로 JSON 문자열
            {
                headers: {
                "Content-Type": "application/json"
                }
            }
        );
    } catch(error) {
        console.error("에러 발생:", error);
    }
}

export const getBook = async(bookId) => {
    try{
        const res = await axios.get(`http://localhost:8080/books/${bookId}`);
        return res.data;
    } catch(e){
        console.error("getBookError: ", e);
    }
}

export const putBook = async(book, bookId) => {
    try{
        await axios.put(
            `http://localhost:8080/books/${bookId}`,
            JSON.stringify(book), // 명시적으로 JSON 문자열
            {
                headers: {
                "Content-Type": "application/json"
                }
            }
        );
        return res;
    } catch(e){
        console.error("getBookError: ", e);
    }
}

export const deleteBook = async(bookId) => {
    try{
        const res = await axios.delete(`http://localhost:8080/books/${bookId}`);
        return res.data;
    } catch(e){
        console.error("getBookError: ", e);
    }
}

export const getBooks = async() => {
    try{
        const res = await axios.get("http://localhost:8080/books");
        return res.data;
    } catch(e){
        console.error("getBooksError: ", e);
    }
}