import React, {useEffect} from 'react'
import { 
    StockInput,
    StockInputWrap,
    IconWrap,
    Title,
    TitleWrap,
} from '@styles/catalog.style'
import { Container } from '@styles/blocks';
import SearchIcon from '@mui/icons-material/Search';
import StockMenu from '@components/StockMenu';
import stocks from '@domain/stocks.store';
import {observer} from 'mobx-react-lite';

function Catalog() {
  useEffect(() => {
    setTimeout(() => {
      stocks.catalogStocks = [
        {id: 123, imgSrc: '/img/stock.svg', shortener: 'SHT', price: '333', company: 'Zxzxc', diff: {value: -12, procentage: 1.34}},
        {id: 123, imgSrc: '/img/stock.svg', shortener: 'SHT', price: '333', company: 'Zxzxc', diff: {value: 0, procentage: 0}},
        {id: 123, imgSrc: '/img/stock.svg', shortener: 'SHT', price: '333', company: 'Zxzxc', diff: {value: 12, procentage: 1.34}},
    ]
    }, 1500);
  }, [])
  return (
    <React.Fragment>
      <Container>
          <StockInputWrap>
            <IconWrap><SearchIcon sx={{fontSize: '40px'}}/></IconWrap>
            <StockInput placeholder='Название или тикер'></StockInput>
          </StockInputWrap>
          <TitleWrap>
            <Title>Каталог акций</Title>
          </TitleWrap>
      </Container>
      <StockMenu
        stocks={stocks.catalogStocks} 
      />
    </React.Fragment>
    )
}

export default observer(Catalog)