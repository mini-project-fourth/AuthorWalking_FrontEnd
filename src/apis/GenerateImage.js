import axios from "axios";
import config from "../config"; 

const OPENAI_API_KEY = config.OPENAI_API_KEY;

console.log("OPENAI_API_KEY:", OPENAI_API_KEY);

const generateImage = async (prompt) => {
  const res = await axios.post(
    "https://api.openai.com/v1/images/generations",
    {
      model: "dall-e-3",
      prompt,
      n: 1,
      size: "1024x1024",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
    }
  );
  return res.data.data[0]?.url;
};

export default generateImage;