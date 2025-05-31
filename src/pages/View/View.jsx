import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { WriteContainer, WriteForm, WriteTitle, DivHr, WriteTextArea, WriteTools, DropdownMenuBtn, DropdownMenuContainer, OpenDropdownMenuBtn } from "./styles";

const View = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { book } = location.state || {};
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [showDropdownMenu, setShowDropdownMenu] = useState(false);

    const dropdownRef = useRef();

    useEffect(() => {
      if (!book) return;
      setTitle(book.title);
      setContent(book.contents);
    }, [])

    useEffect(() => {
      const handleClickoutside = (event) => {
        if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
          setShowDropdownMenu(false);
        }
      };
      document.addEventListener("mousedown", handleClickoutside);
      return () => document.removeEventListener("mousedown", handleClickoutside)
    }, [])

    return (
        <WriteContainer>
          <WriteForm>
            <WriteTools ref={dropdownRef}>
              <div 
                onMouseEnter={(e) => {
                  e.stopPropagation();
                  setShowDropdownMenu(true)
                }}
                onMouseLeave={(e) => {
                  setShowDropdownMenu(false)
                }}
              >
                <OpenDropdownMenuBtn>더보기</OpenDropdownMenuBtn>
                {showDropdownMenu && (
                <DropdownMenuContainer onClick={(e) => e.stopPropagation()}>
                  <DropdownMenuBtn onClick={()=> {
                      navigate(`/books/${book.id}/edit`, { state: {book:book} })
                  }}>수정하기</DropdownMenuBtn>
                  <DropdownMenuBtn 
                    onClick={()=> {
                      navigate(`/books/${book.id}/edit`)
                    }}
                    style={{color:'#E10B0B'}}
                    >삭제하기</DropdownMenuBtn>
                </DropdownMenuContainer>
                )}
              </div>
            </WriteTools>
            <WriteTitle
                readOnly
                type="text"
                placeholder="Title"
                autoFocus={true}
                value={title} 
              />
            <DivHr />
            <WriteTextArea
                readOnly
                placeholder="Content"
                type="text"
                value={content}
            />
            
          </WriteForm>
        </WriteContainer>
      );
}

export default View;