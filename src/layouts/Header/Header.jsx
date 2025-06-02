import React, { useEffect, useRef, useState } from "react";
import {
  AppBarStyled,
  ToolbarStyled,
  Logo,
  NavMenu,
  ProfileSection,
  LogoImage,
  NavButton,
  ProfileButton,
  ProfileDropdown,
  DropdownWrapper,
  DropdownButton,
  ProfileIcon,
} from "./Styles";
import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import { getUserInfo } from "../../apis/UserInfo";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Header = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [profileColor, setProfileColor] = useState("#000000");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const drop = useRef(null);
  const profileButtonRef = useRef(null);
  const [sectionWidth, setSectionWidth] = useState(0);

  useEffect(() => {
    const onStorage = () => setToken(localStorage.getItem("token"));
    window.addEventListener("storage", onStorage);

    // 로그인 후 페이지 이동 시에도 토큰 체크
    const interval = setInterval(() => {
      setToken(localStorage.getItem("token"));
    }, 500);

    // 유저 정보 가져오기
    getUserInfo()
      .then((newUser) => {
        if (JSON.stringify(user) !== JSON.stringify(newUser)) {
          setUser(newUser);
        }
      })
      .catch(() => setUser(null));

    // toggle addevent
    document.addEventListener("click", handleClick);

    // set profile color
    if (user) {
      setProfileColor(getRandomHexColor(user.username));
    }

    // set width
    if (profileButtonRef.current) {
      const rect = profileButtonRef.current.getBoundingClientRect();
      setSectionWidth(rect.width);
    }

    return () => {
      window.removeEventListener("storage", onStorage);
      clearInterval(interval);
      document.removeEventListener("click", handleClick);
    };
  }, [user]);

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

  const handleClick = (e) => {
    if (!e.target.closest(`${drop.current.className}`) && open) {
      setOpen(false);
    }
  };

  const getRandomHexColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = (hash & 0x00ffffff).toString(16).padStart(6, "0");
    return `#${color}`;
  };

  return (
    <AppBarStyled>
      <ToolbarStyled>
        <NavMenu></NavMenu>
        <NavMenu>
          <LogoImage src={logoImg} alt="Logo" onClick={() => navigate("/")} />
        </NavMenu>
        <ProfileSection>
          {token ? (
            <ProfileDropdown className="dropdown" ref={drop}>
              <ProfileButton
                ref={profileButtonRef}
                onClick={() => setOpen((open) => !open)}
              >
                <ProfileIcon style={{ background: profileColor }}></ProfileIcon>
                안녕하세요, {user?.username || ""} 님
                <KeyboardArrowDownIcon
                  sx={{ fontSize: "small" }}
                ></KeyboardArrowDownIcon>
              </ProfileButton>
              {open && [
                <DropdownWrapper style={{ width: `${sectionWidth}px` }}>
                  <DropdownButton onClick={() => navigate("/mypage")}>
                    내 정보
                  </DropdownButton>
                  <DropdownButton onClick={handleLogout}>
                    로그아웃
                  </DropdownButton>
                </DropdownWrapper>,
              ]}
            </ProfileDropdown>
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
