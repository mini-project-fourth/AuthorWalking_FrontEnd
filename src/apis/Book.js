import axios from "axios";

export const postBook = async(book) => {
    try{
        const res = await axios.post('http://localhost:8080/books', book);
        console.log(res);
        return res;
    } catch(error) {
        console.error("에러 발생:", error);
    }
}

export const getBook = async(bookId) => {
    try{
        const res = await axios.get(`http://localhost:8080/books/${bookId}`);
        console.log(res);
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