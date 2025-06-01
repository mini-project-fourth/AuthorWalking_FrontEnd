import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { WriteContainer, WriteForm, WriteTitle, DivHr, WriteTextArea, WriteTools, DropdownMenuBtn, DropdownMenuContainer, OpenDropdownMenuBtn, DropdownMenuTitle } from "./styles";
import { deleteBook } from "../../apis/Book";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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
                <OpenDropdownMenuBtn>
                  <MoreHorizIcon
                    sx={{
                      fontSize: 'large',
                    }}></MoreHorizIcon>
                </OpenDropdownMenuBtn>
                {showDropdownMenu && (
                <DropdownMenuContainer>
                  <DropdownMenuBtn onClick={()=> {
                      navigate(`/books/${book.id}/edit`, { state: {book:book} })
                  }}>
                    <EditIcon 
                      sx={{fontSize: 'large', marginRight: '3px', marginLeft: '2px'}}/>
                    <DropdownMenuTitle>
                      수정하기
                    </DropdownMenuTitle>
                  </DropdownMenuBtn>
                  <DropdownMenuBtn 
                    onClick={async()=> {
                      await deleteBook(book.id)
                      navigate("/")
                    }}
                    style={{color:'#E10B0B'}}
                    >
                      <DeleteForeverIcon />
                      <DropdownMenuTitle 
                        sx={{fontSize: 'medium'}}>
                        삭제하기
                      </DropdownMenuTitle>
                  </DropdownMenuBtn>
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