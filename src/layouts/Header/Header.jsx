import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Logo, NavMenu, ProfileSection } from './Styles';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#282c34', color: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: '60px', px: 2 }}>
        <Logo>작가의 산책</Logo>
        <NavMenu>
          <Button color="inherit" onClick ={() => navigate('/')}>홈</Button>
          <Button color="inherit" onClick={() => navigate('/write')}>글쓰기</Button>
          <Button color="inherit" onClick={()=> navigate('/bookshelf')}>내 서재</Button>
          <Button color="inherit">작가 목록</Button>
        </NavMenu>
        <ProfileSection>
          <Avatar alt="profile" src="" />
          <Button color="inherit">로그인</Button>
        </ProfileSection>
      </Toolbar>
    </AppBar>
  );
};

export default Header;