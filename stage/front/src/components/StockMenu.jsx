import React from 'react'
import { 
    MenuGroup, 
    MenuButton,
    StyledMenu,
    StyledMenuItem,
    Title,
    Line,
    StyledDoneIcon as DoneIcon
} from '@styles/stockMenu.style';
import {Container} from '@styles/blocks'
import stockMenu, {INDUSTRY, COUNTRY, DIFFERENCE, PRICE, menuItemsNames} from '@view/stockMenu.store';
import { observer } from 'mobx-react-lite';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SortIcon from '@mui/icons-material/Sort';
import Stock from '@components/Stock';
import { CenteredProgress } from '@styles/blocks';

function StockMenuItems({menuName}) {
    function handleClickMenuItem(name, index) {
        stockMenu.switchSelectedByName(name, index);
    }
    return (
        <React.Fragment>
            {
                menuItemsNames[menuName].map((name, index) => {
                    return (
                        <StyledMenuItem
                            key={index}
                            onClick={() => handleClickMenuItem(menuName, index)}
                        >
                            {name}{(index === stockMenu[menuName + 'SelectedId']) ? <DoneIcon /> : null}
                        </StyledMenuItem>
                    )
                })  
            }
        </React.Fragment>
    )
}

function StockMenu({stocks}) {
    function handleClick(e) {
        stockMenu.openMenu(e.currentTarget);
    }
    function handleCloseMenu() {
        stockMenu.closeMenu();
    }
    if (stocks.length === 0)
        return (
            <CenteredProgress 
                size={100}
                mTop={60}
            />
        )
  return (
    <div>
        <Container>
            <MenuGroup>
                <MenuButton
                    name={INDUSTRY}
                    onClick={handleClick}
                    mRight={198}
                >{menuItemsNames[INDUSTRY][stockMenu.industrySelectedId]}<KeyboardArrowDownIcon />
                </MenuButton>
                <MenuButton 
                    name={COUNTRY}
                    onClick={handleClick}
                >{menuItemsNames[COUNTRY][stockMenu.countrySelectedId]}<KeyboardArrowDownIcon /></MenuButton>
            </MenuGroup>
            <StyledMenu
                anchorEl={stockMenu.industryButtonEl}
                open={Boolean(stockMenu.industryButtonEl)}
                onClose={handleCloseMenu}
            >
            <StockMenuItems menuName={INDUSTRY}/>
            </StyledMenu>
            <StyledMenu
                anchorEl={stockMenu.countryButtonEl}
                open={Boolean(stockMenu.countryButtonEl)}
                onClose={handleCloseMenu}
            >
            <StockMenuItems menuName={COUNTRY}/>
            </StyledMenu>            
            <MenuGroup>
                <Title><SortIcon sx={{marginRight: '13px'}}/><span>????????????????</span></Title>
                <MenuButton 
                    name={DIFFERENCE}
                    onClick={handleClick}
                    mRight={600}
                    >{menuItemsNames[DIFFERENCE][stockMenu.differenceSelectedId]}<KeyboardArrowDownIcon /></MenuButton>
                <MenuButton 
                    name={PRICE}
                    onClick={handleClick}
                >{menuItemsNames[PRICE][stockMenu.priceSelectedId]}<KeyboardArrowDownIcon /></MenuButton>
            </MenuGroup>
            <StyledMenu
                anchorEl={stockMenu.differenceButtonEl}
                open={Boolean(stockMenu.differenceButtonEl)}
                onClose={handleCloseMenu}
            >
            <StockMenuItems menuName={DIFFERENCE}/>
            </StyledMenu>
            <StyledMenu
                anchorEl={stockMenu.priceButtonEl}
                open={Boolean(stockMenu.priceButtonEl)}
                onClose={handleCloseMenu}
            >
            <StockMenuItems menuName={PRICE}/>
            </StyledMenu>
        </Container>
        {stocks.map((stock) => {
            return (
                <Stock
                    id={stock.id}
                    imgSrc={stock.imgSrc}
                    price={stock.price}
                    diff={stock.diff}
                    company={stock.company}
                    shortener={stock.shortener}
                />
            )
        })}
        <Line />
    </div>
  )
}

export default observer(StockMenu);