import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export const AppBarStyled = styled(AppBar)`
  background-color: white !important; 
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
  flex: 1;
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
  flex: 1;
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
`;

export const NavButton = styled(Button)`
  color: #000000 !important;
  font-weight: 400 !important;
  font-size: 14px !important;
`;

export const ProfileIcon = styled.div`
  border-radius: 50px;
  width: 28px;
  height: 28px;
  margin: 2px;
  display: inline-block;
`

export const ProfileDropdown = styled.div`
  border: rgba(0, 0, 0, 0.4) 1px solid;
  border-radius: 12px;
`

export const DropdownWrapper = styled.div`
  z-index: -2;
  padding-top: 14px;
  position: absolute;
  top: 40px;
  right: 24px;
  border: rgba(0, 0, 0, 0.2) 1px solid;
  display: flex;
  flex-direction: column;
  border-radius: 0px 0px 10px 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  background: white;
`

export const DropdownButton = styled.button`
  padding: 16px;
  margin: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 16px;
  display: flex;
  align-items: start;

  &:hover {
    background:rgb(242, 241, 241)
  }
`

export const ProfileButton = styled.button`
  z-index: 1;
  border: none;
  background:rgba(248, 248, 248, 0.99);
  border-radius: 12px;
  color: black;
  padding: 12px 16px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 4px;

  &:active{
    color: black;
  }
  &:hover {
    color: blcak;
    background:rgb(242, 241, 241)
  }
  &:focus {
    color: black;
  }
`

export const ProfileSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-end;
`;