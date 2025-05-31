import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export const AppBarStyled = styled(AppBar)`
  background-color: #F8F8F8 !important; 
  box-shadow: 0 0.5px 0px rgba(0,0,0,0.1) !important;
  position: fixed;
`;

export const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 16px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; // 좌측 정렬
  font-size: 1.5rem;
  font-weight: bold;
  color: #000000;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  height: 48px;
  width: 48px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 24px;
  align-items: center;
  margin-left: auto; // 우측 끝으로 이동
`;

export const NavButton = styled(Button)`
  color: #000000 !important;
  font-weight: 400 !important;
  font-size: 14px !important;
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;