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

function Stock({id, imgSrc, price, diff, company, shortener}) {
  return (
    <StyledStock>
        <Container>
            <NavL to={`/stock/${id}`}>
                <Wrap>
                    <TitleWrap>
                        <StockLogoWrap>
                            <img src={imgSrc} alt={`${company}-logo`} />
                        </StockLogoWrap>
                        <Box marginLeft={'24px'}>
                            <CompanyWrap>
                                <CompanyText>{company}</CompanyText>
                            </CompanyWrap>
                            <ShortenerWrap>
                                <ShortenerText>{shortener}</ShortenerText>
                            </ShortenerWrap>
                        </Box>
                    </TitleWrap>
                    <Box>
                        <DifferenceWrap>
                            <DifferenceText value={diff.value}>{diff.value} packs</DifferenceText>
                        </DifferenceWrap>
                        <ProcentageWrap>
                            <DifferenceText value={diff.value}>{diff.procentage}%</DifferenceText>
                        </ProcentageWrap>
                    </Box>
                    <PriceWrap>
                        <PriceText>{price} packs</PriceText>
                    </PriceWrap>
                </Wrap>
            </NavL>
        </Container>
    </StyledStock>
  )
}

export default Stock