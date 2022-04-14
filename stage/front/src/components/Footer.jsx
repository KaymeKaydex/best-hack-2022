import React from 'react'
import {
    StyledFooter,
    OfficeText,
    AddressText,
    DescrText,
    OfficeTextWrap,
    AddressTextWrap,
    DescrTextWrap,
    ButtonToTop,
    ButtonText,
} from '@styles/footer.style';
import { Container } from '@styles/blocks';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Footer() {
    function handleOnTop() {window.scrollTo({ top: 0, behavior: 'smooth' })}
  return (
    <StyledFooter>
        <Container isRelative>
            <OfficeTextWrap>
                <OfficeText>Наш офис:</OfficeText>
            </OfficeTextWrap>
            <AddressTextWrap>
                <AddressText>г. Москва, 2-я Бауманская, 7</AddressText>
            </AddressTextWrap>
            <DescrTextWrap>
                <DescrText>Проект разработан с душой, все права защищены </DescrText>
            </DescrTextWrap>
            <ButtonToTop
                onClick={handleOnTop}
            >
                <ButtonText>НАВЕРХ</ButtonText>
                <ArrowUpwardIcon sx={{fontSize: '50px', color: 'white', marginLeft: '15px'}}/>
            </ButtonToTop>
        </Container>
    </StyledFooter>
  )
}

export default Footer;