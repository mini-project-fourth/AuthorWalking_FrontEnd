import React, { useState } from "react";
import  generateImage  from "../../apis/GenerateImage";

const Home = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const popularPosts = [
    { id: 1, title: "봄날의 산책", author: "김작가" },
    { id: 2, title: "나만의 글쓰기 비법", author: "이작가" },
    { id: 3, title: "창작의 고통과 즐거움", author: "박작가" },
  ];


  return (
    <div style={{ maxWidth: 700, margin: "40px auto", padding: 24 }}>
      <h2>인기 글</h2>
      <ul>
        {popularPosts.map((post) => (
          <li key={post.id} style={{ margin: "12px 0" }}>
            <strong>{post.title}</strong>{" "}
            <span style={{ color: "#888" }}>by {post.author}</span>
          </li>
        ))}
      </ul>
      <hr style={{ margin: "32px 0" }} />
      <h2>오늘의 한 줄</h2>
      <blockquote style={{ fontStyle: "italic", color: "#1976d2" }}>
        "글을 쓰는 것은 또 다른 나를 만나는 여행이다."
      </blockquote>
    </div>
  );
};

export default Home;