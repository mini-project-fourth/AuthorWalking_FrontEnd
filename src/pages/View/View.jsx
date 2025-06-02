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
  const drop = useRef(null);

  useEffect(() => {
    if (!book) return;
    setTitle(book.title);
    setContent(book.contents);

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [])

  const handleClick = (e) => {
    if(!e.target.closest(`${drop.current.className}`) && open) {
      setOpen(false);
    }
  }

  return (
      <WriteContainer>
        <WriteForm>
          <WriteTools className="dropdown" ref ={drop}>
            <OpenDropdownMenuBtn
              type="button"
              onClick={() => setShowDropdownMenu(open => !open)}
            >
              <MoreHorizIcon
                sx={{
                  fontSize: 'large',
                }} />
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
                      sx={{fontSize: 'medium'}}
                      onClick={()=>navigate("/")}>
                      삭제하기
                    </DropdownMenuTitle>
                </DropdownMenuBtn>
              </DropdownMenuContainer>
            )}
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