import React from 'react'
import { Container, ImgWrap } from '@styles/blocks';
import {
    ContentTitleWrap,
    ContentTitle,
    ContentDescr,
    ContentDescrWrap,
} from '@styles/brokerage.style';
import { Box } from '@mui/material';
import {
    Steps
} from '@styles/requestInfo.style';
import Step from '@components/Step';
import { observer } from 'mobx-react-lite';
import currencyMenu from '@view/currencyMenu.store';
import { 
    StyledMenu,
    StyledMenuItem,
    StyledDoneIcon as DoneIcon
} from '@styles/stockMenu.style';
import {
    InputWrap,
    Input,
    SetCountry,
    CurrencyConvert,
    Ticker
} from '@styles/currency.style';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const steps = [
    {title: 'Быть программистом', descr: 'Понадобится только компьютер, мышка и интернет'},
    {title: 'Кликать мышкой', descr: 'При каждом 10-м клике мышкой Вам будет начисляться 1 pack '},
    {title: 'Писать коды', descr: 'При написании одного работающего кода Вам будет начисляться 10 packs!'},
]

function Currency() {
    function handleClick(e) {
        currencyMenu.openMenu(e.currentTarget);
    }
    function handleChangeCurrency(e) {
        if (e.currentTarget.value === '')
            currencyMenu.setAmount(0);
        else
            currencyMenu.setAmount(e.currentTarget.value);
    }
    function handleChangeCountry(index) {
        currencyMenu.setCountry(index);
    }
  return (
    <Container>
        <Box marginTop={'95px'} position='relative'>
            <ImgWrap isAbsolute top={45} right={300} src='/img/coin.svg'></ImgWrap>
            <ContentTitleWrap>
                <ContentTitle>Что такое packs?</ContentTitle>
            </ContentTitleWrap>
            <ContentDescrWrap>
                <ContentDescr>Packs - универсальная виртуальная валюта для программистов</ContentDescr>
            </ContentDescrWrap>
        </Box>
        <Box marginTop={'95px'} position='relative'>
            <ContentTitleWrap>
                <ContentTitle>Как получить packs?</ContentTitle>
            </ContentTitleWrap>
            <ContentDescrWrap>
                <ContentDescr>Для получения Packs Вам необходимо:</ContentDescr>
            </ContentDescrWrap>
        </Box>
        <Steps>
            {
                steps.map((step, index) => (
                        <Step 
                            key={index}
                            index={index + 1}
                            title={step.title}
                            descr={step.descr}
                        />
                    )
                )
            }
        </Steps>
        <Box marginTop={'95px'} position='relative'>
            <ImgWrap top={45} right={300} isAbsolute src='/img/bop-logo.svg'></ImgWrap>
            <ContentTitleWrap>
                <ContentTitle>Как узнать количество своих Packs?</ContentTitle>
            </ContentTitleWrap>
            <ContentDescrWrap>
                <ContentDescr>Чтобы узнать свой баланс, необходимо войти в личный кабинет банка программистов “The bank of packs”</ContentDescr>
            </ContentDescrWrap>
        </Box>
        <Box marginTop={'95px'} position='relative'>
            <ContentTitleWrap>
                <ContentTitle>Как использовать Packs?</ContentTitle>
            </ContentTitleWrap>
            <ContentDescrWrap>
                <ContentDescr>Используйте packs для умножения на нашем сайте и хвастайтесь друзьям и коллегам, какой же успешный Вы прграммист!</ContentDescr>
            </ContentDescrWrap>
        </Box>
        <Box marginTop={'95px'} position='relative'>
            <ContentTitleWrap>
                <ContentTitle>Курс Packs</ContentTitle>
            </ContentTitleWrap>
            <CurrencyConvert>
                <InputWrap>
                    <Input type='number' defaultValue={0} onChange={handleChangeCurrency}/>
                    <SetCountry onClick={handleClick}>
                        <Box display={'inherit'} flexDirection='column' justifyContent='space-between' alignItems='center'>
                            <Box width='49px' height='33px'>
                            <img
                                alt="United States"
                                src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${currencyMenu.getCurrentCountry().code}.svg`}
                            />
                            </Box>
                            <Ticker>
                                {currencyMenu.getCurrentCountry().ticker}
                            </Ticker>
                        </Box>
                    </SetCountry>
                </InputWrap>
                <Box><ArrowForwardIcon sx={{fontSize: '40px'}}/></Box>
                <InputWrap>
                    <Input value={currencyMenu.toPacks}/>
                    <SetCountry>
                        <ImgWrap width='57px' height='56px'
                            src='/img/coin.svg'
                            alt="United States"
                        />
                    </SetCountry>
                </InputWrap>
            </CurrencyConvert>
            <StyledMenu
                onClose={currencyMenu.closeMenu}
                anchorEl={currencyMenu.el}
                open={Boolean(currencyMenu.el)}
            >
                {
                    [1, 2, 3, 4].map((name, index) => {
                        return (
                            <StyledMenuItem
                                onClick={() => handleChangeCountry(index)}
                            >
                            {name}{(index === currencyMenu.countryId) ? <DoneIcon /> : null}
                            </StyledMenuItem> 
                        )
                    })
                }
            </StyledMenu>
        </Box>
        <Box marginTop={'95px'} position='relative'>
            <ContentTitleWrap>
                <ContentTitle>Возможно ли перевести Packs на другую валюту?</ContentTitle>
            </ContentTitleWrap>
            <ContentDescrWrap>
                <ContentDescr>Нет, однако возможно перевести любую валюту в Packs в личном кабинете международного банка программистов “The bank of packs” </ContentDescr>
            </ContentDescrWrap>
        </Box>
    </Container>
  )
}

export default observer(Currency);