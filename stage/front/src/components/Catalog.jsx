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
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then(res => res.json())
      .then(data => stocks.setCatalogStocks(data));
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