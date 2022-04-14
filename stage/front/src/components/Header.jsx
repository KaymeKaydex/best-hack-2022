import React, {useRef} from 'react'
import {
    StyledHeader,
    LogoNumbers,
    LogoWrap,
    LogoName,
    HeaderBar,
    StyledToolbar,
    MenuBarItem,
    MenuBar,
    LogInButton,
    MenuBarText,
} from '@styles/header.style';
import {Button} from '@mui/material'
import { NavL } from '@styles/blocks';
import { StyledMenu, StyledMenuItem } from '@styles/stockMenu.style';

import { useLocation, useNavigate } from 'react-router-dom';

import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import spectator from '@view/spectator.store';
import accountMenu from '@view/accountMenu.store';
import user from '@domain/user.store';
import {observer} from 'mobx-react-lite';

function Header() {
    function handleCloseMenu() {
        accountMenu.closeMenu();
    }
    function handleOpenMenu(e) {
        accountMenu.openMenu(e.currentTarget);
    }
    function handleLogout() {
        user.logout();
        accountMenu.closeMenu();
    }
    function handleCheckPersonalAccount() {
        navigate(`/user/${user.id}`);
        accountMenu.closeMenu();
    }
    const location = useLocation();
    const navigate = useNavigate();
  return (
    <StyledHeader>
        <HeaderBar position='static'>
            <StyledToolbar>
                <NavL to='/'>
                    <LogoWrap>
                        <LogoNumbers>418</LogoNumbers>
                        <LogoName>stocks</LogoName>
                    </LogoWrap>
                </NavL>
                <MenuBar>
                    <NavL to={'/'}><MenuBarItem isUnderlined={(location.pathname === '/') ? true : false}><MenuBarText>Обзор</MenuBarText></MenuBarItem></NavL>                    
                    <NavL to={'/catalog'}><MenuBarItem isUnderlined={(location.pathname === '/catalog') ? true : false}><MenuBarText>Каталог</MenuBarText></MenuBarItem></NavL>    
                    <NavL to={'/currency'}><MenuBarItem isUnderlined={(location.pathname === '/currency') ? true : false}><MenuBarText>О валюте</MenuBarText></MenuBarItem></NavL>
                </MenuBar> 
                {
                    (user.isLoggedIn) ? (
                        <Button
                            onClick={handleOpenMenu}
                        >
                            <AccountCircleIcon sx={{fontSize: '93px', color: 'black'}}/>
                        </Button>
                    ) : (
                        <LogInButton onClick={spectator.toggleIsSignModalOpen}><LoginIcon sx={{fontSize: '63px'}}/></LogInButton>
                    )
                }
                <StyledMenu
                    anchorEl={accountMenu.accountButtonEl}
                    open={Boolean(accountMenu.accountButtonEl)}
                    onClose={handleCloseMenu}
                >
                    <StyledMenuItem
                        isBordered
                        onClick={handleCheckPersonalAccount}
                    >
                        Личный кабинет
                    </StyledMenuItem>
                    <StyledMenuItem
                        onClick={handleLogout}
                    >
                        Выйти
                    </StyledMenuItem>
                </StyledMenu>
            </StyledToolbar>
        </HeaderBar>
    </StyledHeader>
  )
}

export default observer(Header);