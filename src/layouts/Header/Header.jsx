import React from 'react';
import { AppBarStyled, ToolbarStyled, Logo, NavMenu, ProfileSection, LogoImage, NavButton } from './Styles';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import logoImg from '../../assets/logo.png'; 

const Header = () => {
  const navigate = useNavigate();

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
          <NavButton onClick={()=> navigate('/login')}>로그인</NavButton>
        </ProfileSection>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Header;