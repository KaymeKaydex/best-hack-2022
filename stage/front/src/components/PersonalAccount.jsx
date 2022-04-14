import React, { useEffect, useLayoutEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { 
    Title,
    TitleWrap,
    Card,
    CardAmount,
    PacksAmount,
    CardAmountWrap,
} from '@styles/catalog.style'
import { Container, CenteredProgress, ImgWrap } from '@styles/blocks';
import { Box } from '@mui/material';
import StockMenu from '@components/StockMenu';
import user from '@domain/user.store';
import {observer} from 'mobx-react-lite';
import stocks from '@domain/stocks.store';
import { BuyButton } from '@styles/stockPage.style';

function PersonalAccount() {
    const params = useParams();
    const navigate = useNavigate();
    function handlePaymentEvent() {
        navigate('/payment');
    }
    useLayoutEffect(() => {
        if (!user.isLoggedIn)
            navigate('/');
    });
    useEffect(() => {
        setTimeout(() => {
            stocks.userStocks = [
                {imgSrc: '/img/stock.svg', shortener: 'SHT', price: '333', company: 'Zxzxc', diff: {value: -12, procentage: 1.34}},
                {imgSrc: '/img/stock.svg', shortener: 'SHT', price: '333', company: 'Zxzxc', diff: {value: 0, procentage: 0}},
            ]
        }, 1500);
    }, [])
    if (stocks.userStocks.length === 0)
        return (
            <CenteredProgress 
                size={100}
                mTop={60}
            />
        )
  return (
    <Container>
        <Box>
            <TitleWrap>
                <Title>Мой cчёт</Title>
            </TitleWrap>
            <Card>
                <Box    
                    display='flex'
                    justifyContent={'space-between'}
                >
                    <CardAmountWrap>
                        <CardAmount>481 card</CardAmount>
                        <PacksAmount>123.34 packs</PacksAmount>
                    </CardAmountWrap>
                    <ImgWrap
                        width='170px'
                        src='/img/card.svg'
                    />
                </Box>
                <BuyButton
                    mTop='82'
                    width={540}
                    height={80}
                    onClick={handlePaymentEvent}
                >
                    Пополнить
                </BuyButton>
            </Card>
        </Box>
        <Box>
            <TitleWrap>
                {/* УДАЛИТЬ СНИЗУ ЭТОТ КОСТЫЛЬ */}
                {user.isLoggedIn} 
                <Title>Мои акции</Title>
                <StockMenu stocks={stocks.userStocks}/>
            </TitleWrap>
        </Box>
    </Container>
  )
}

export default observer(PersonalAccount);