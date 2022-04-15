import React, {useEffect} from 'react'
import { Container } from '@styles/blocks';
import { useParams } from 'react-router-dom';
import {
    Info,
    BuyStockCard,
    CompanyText,
    TickerText,
    TitleText,
    InfoText,
    Column,
    LogoWrap,
    SegmentText,
    DateText,
    PacksText,
    HavingStocksText,
    BuyButton,
} from '@styles/stockPage.style';
import Graph from '@components/Graph';
import BuyStockModal from '@components/BuyStockModal';
import stockModal from '@view/buyStockModal.store';
import { observer } from 'mobx-react-lite';
import stockPage from '@view/stockPage.store';
import { CenteredProgress } from '@styles/blocks';
import user from '@domain/user.store';
import spectator from '@view/spectator.store';

const imgSrc = '/img/stock.svg';

function StockPage() {
    const {id: stockId} = useParams();
    useEffect(() => {
        stockPage.loadStock(stockId);
    }, [])
    if (!stockPage.isLoaded) 
        return (
            <CenteredProgress 
                size={100}
                mTop={60}
            />
        )
  return (
    <Container>
        <Info>
            <Column
                width={365}
            >
                <TickerText>{stockPage.charCode}</TickerText>
                <CompanyText>{stockPage.name}</CompanyText>
                <TitleText>Разница за день</TitleText>
                <InfoText>{(stockPage.value - stockPage.previous).toFixed(3)}%</InfoText>
            </Column>
            <Column
                width={840}
            >
                <LogoWrap src="/img/stock.svg"></LogoWrap>
                <SegmentText>Сектор</SegmentText>
                <InfoText>Мировые валюты</InfoText>
            </Column>
        </Info>
        <BuyStockCard>
            <DateText>{stockPage.name}</DateText>
            <PacksText>{stockPage.nominal} packs</PacksText>
            <HavingStocksText>
                {(user.isLoggedIn) ?
                    'У вас 13 шт.'
                    :
                    'Вы не авторизованы'
                }
            </HavingStocksText>
            {
                (user.isLoggedIn) ?
                    <BuyButton
                        height={79}
                        width={540}
                        onClick={stockModal.open}
                    >Приобрести акции</BuyButton>
                    :
                    <BuyButton
                        height={79}
                        width={540}
                        onClick={spectator.toggleIsSignModalOpen}
                    >Авторизоваться</BuyButton>
            }
        </BuyStockCard>
        <Graph symbol={stockPage.charCode}/> 
        <BuyStockModal
            imgSrc={imgSrc}
            packs={stockPage.nominal} 
            company={stockPage.name}
        />
    </Container>
  )
}

export default observer(StockPage);