import {
  AppBarStyled,
  ToolbarStyled,
  Logo,
  NavMenu,
  ProfileSection,
  LogoImage,
  NavButton,
} from "./Styles";
import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState, useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const onStorage = () => setToken(localStorage.getItem("token"));
    window.addEventListener("storage", onStorage);
    const interval = setInterval(() => {
      setToken(localStorage.getItem("token"));
    }, 500);
    return () => {
      window.removeEventListener("storage", onStorage);
      clearInterval(interval);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    alert("로그아웃 되었습니다.");
    navigate("/login");
  };

const handleSearch = () => {
  if (searchValue.trim()) {
    console.log("검색 요청 값:", searchValue); 
    navigate("/booksearch", { state: { searchValue } });
    setSearchOpen(false);
    setSearchValue("");
  }
};

  return (
    <AppBarStyled>
      <ToolbarStyled>
        <Logo onClick={() => navigate("/")}>
          <LogoImage src={logoImg} alt="Logo" onClick={() => navigate("/")} />
        </Logo>
        <NavMenu>
          <NavButton onClick={() => navigate("/")}>홈</NavButton>
          <NavButton onClick={() => navigate("/mypage")}>내 정보</NavButton>
          {/* 검색 아이콘 버튼 (검정색) */}
          <IconButton color="inherit" onClick={() => setSearchOpen(true)}>
            <SearchIcon sx={{ color: "#000" }} />
          </IconButton>
        </NavMenu>
        <ProfileSection>
          {token ? (
            <NavButton onClick={handleLogout}>로그아웃</NavButton>
          ) : (
            <NavButton onClick={() => navigate("/login")}>로그인</NavButton>
          )}
        </ProfileSection>
      </ToolbarStyled>
      {/* 검색 다이얼로그 */}
      <Dialog
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogContent sx={{ display: "flex", gap: 1 }}>
          <TextField
            autoFocus
            fullWidth
            placeholder="검색어를 입력하세요"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <Button variant="contained" onClick={handleSearch}>
            검색
          </Button>
        </DialogContent>
      </Dialog>
    </AppBarStyled>
  );
};

export default Header;
