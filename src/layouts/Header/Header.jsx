import React, { useEffect, useRef, useState } from 'react';
import { AppBarStyled, ToolbarStyled, Logo, NavMenu, ProfileSection, LogoImage, NavButton, ProfileButton, ProfileDropdown, DropdownWrapper, DropdownButton } from './Styles';
import { useNavigate } from 'react-router-dom';
import logoImg from '../../assets/logo.png'; 
import { getUserInfo } from '../../apis/UserInfo';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const drop = useRef(null);

  
  useEffect(() => {
    // 로그인/로그아웃 시 storage 이벤트 감지
    const onStorage = () => setToken(localStorage.getItem("token"));
    window.addEventListener("storage", onStorage);
    
    // 로그인 후 페이지 이동 시에도 토큰 체크
    const interval = setInterval(() => {
      setToken(localStorage.getItem("token"));
    }, 500);

    // 유저 정보 가져오기
    getUserInfo().then(setUser).catch(() => setUser(null));
    console.log(user?user:"");
    
    document.addEventListener("click", handleClick);
    
    return () => {
      window.removeEventListener("storage", onStorage);
      clearInterval(interval);
      document.removeEventListener("click", handleClick);
    };
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null); // 상태도 갱신
    alert("로그아웃 되었습니다.");
    navigate("/login");
  };
  
  const handleClick = (e) => {
    if(!e.target.closest(`${drop.current.className}`) && open) {
      setOpen(false);
    }
  }

  return (
    <AppBarStyled>
      <ToolbarStyled>
        <NavMenu></NavMenu>
        <NavMenu>
          <LogoImage src={logoImg} alt="Logo" onClick={() => navigate('/')} />
        </NavMenu>
        <ProfileSection>
          {token ? (
            <ProfileDropdown
              className="dropdown"
              ref={drop}
            >
              <ProfileButton onClick={() => setOpen(open => !open)}>
                안녕하세요, {user?.username || ""} 님
                <KeyboardArrowDownIcon sx={{fontSize:'small', marginLeft: '4px'}}></KeyboardArrowDownIcon>
              </ProfileButton>
              {open && 
                [
                  <DropdownWrapper>
                    <DropdownButton onClick={() => navigate("/mypage")}>내 정보</DropdownButton>
                    <DropdownButton onClick={handleLogout}>로그아웃</DropdownButton>
                  </DropdownWrapper>
                ]
              }
            </ProfileDropdown>
          ) : (
            <NavButton onClick={() => navigate('/login')}>로그인</NavButton>
          )}
        </ProfileSection>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Header;