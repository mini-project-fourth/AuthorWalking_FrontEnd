import React, { useEffect, useState } from 'react';
import { AppBarStyled, ToolbarStyled, Logo, NavMenu, ProfileSection, LogoImage, NavButton } from './Styles';
import { useNavigate } from 'react-router-dom';
import logoImg from '../../assets/logo.png'; 

const Header = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    // 로그인/로그아웃 시 storage 이벤트 감지
    const onStorage = () => setToken(localStorage.getItem("token"));
    window.addEventListener("storage", onStorage);

    // 로그인 후 페이지 이동 시에도 토큰 체크
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
    setToken(null); // 상태도 갱신
    alert("로그아웃 되었습니다.");
    navigate("/login");
  };

  return (
    <AppBarStyled>
      <ToolbarStyled>
        <Logo onClick={() => navigate('/')}>
          <LogoImage src={logoImg} alt="Logo" onClick={() => navigate('/')} />
        </Logo>
        <NavMenu>
          <NavButton onClick={() => navigate('/')}>홈</NavButton>
          <NavButton onClick={() => navigate('/mypage')}>내 정보</NavButton>
        </NavMenu>
        <ProfileSection>
          {token ? (
            <NavButton onClick={handleLogout}>로그아웃</NavButton>
          ) : (
            <NavButton onClick={() => navigate('/login')}>로그인</NavButton>
          )}
        </ProfileSection>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Header;