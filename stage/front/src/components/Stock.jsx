import React from 'react'
import {
    Stock as StyledStock,
    StockLogoWrap,
    DifferenceWrap,
    PriceWrap,
    DifferenceText,
    PriceText,
    CompanyText,
    CompanyWrap,
    Wrap,
    TitleWrap,
    ProcentageWrap,
    ShortenerWrap,
    ShortenerText
} from '@styles/stockMenu.style'; 
import { Container, NavL } from '@styles/blocks';
import {Box} from '@mui/material';

function Stock({
    ID,
    Name,
    CharCode,
    Previous,
    Value 
}) {
    console.log(arguments);
  return (
    <StyledStock>
        <Container>
            <NavL to={`/stock/${ID}`}>
                <Wrap>
                    <TitleWrap>
                        <StockLogoWrap>
                            <img src='/img/stock.svg' alt={`logo`} />
                        </StockLogoWrap>
                        <Box marginLeft={'24px'}>
                            <CompanyWrap>
                                <CompanyText>{Name}</CompanyText>
                            </CompanyWrap>
                            <ShortenerWrap>
                                <ShortenerText>{CharCode}</ShortenerText>
                            </ShortenerWrap>
                        </Box>
                    </TitleWrap>
                    <Box>
                        <DifferenceWrap>
                            <DifferenceText value={Value - Previous}>{(Value - Previous * 100).toFixed(3)} packs</DifferenceText>
                        </DifferenceWrap>
                        <ProcentageWrap>
                            <DifferenceText value={Value - Previous}>{((Value - Previous) / Previous).toFixed(3)}%</DifferenceText>
                        </ProcentageWrap>
                    </Box>
                    <PriceWrap>
                        <PriceText>{(Value - Previous).toFixed(3)} packs</PriceText>
                    </PriceWrap>
                </Wrap>
            </NavL>
        </Container>
    </StyledStock>
  )
}

export default Stock