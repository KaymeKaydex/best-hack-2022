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
    stocks.loadCatalog();
  }, [])
  function handleChange(e) {
    stocks.filterCatalogStocks(e.target.value);
  }
  return (
    <React.Fragment>
      <Container>
          <StockInputWrap>
            <IconWrap><SearchIcon sx={{fontSize: '40px'}}/></IconWrap>
            <StockInput placeholder='Название или тикер' onChange={handleChange}></StockInput>
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