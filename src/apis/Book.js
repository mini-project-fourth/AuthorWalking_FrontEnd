import axios from "axios";

export const postBook = async(book) => {
    try{
        const res = await axios.post('http://localhost:8080/book', book);
        console.log(res);
    } catch(error) {
        console.error("에러 발생:", error);
    }
}