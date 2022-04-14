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
const packs = 100;
const company = 'Qweqwe';

function StockPage() {
    const {id: stockId} = useParams();
    useEffect(() => {
        setTimeout(() => {
            stockPage.loaded();
        }, 100);
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
                height={260}
            >
                <TickerText>FLWS</TickerText>
                <CompanyText>One but more</CompanyText>
                <TitleText>Доходность за полгода</TitleText>
                <InfoText>-56.13%</InfoText>
            </Column>
            <Column
                width={840}
                height={260}
            >
                <LogoWrap src="/img/stock.svg"></LogoWrap>
                <SegmentText>Сектор</SegmentText>
                <InfoText>Пйцуйцйцу</InfoText>
            </Column>
        </Info>
        <BuyStockCard>
            <DateText>12312312313131</DateText>
            <PacksText>135 вйцвйцв</PacksText>
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
        <Graph />
        <BuyStockModal
            imgSrc={imgSrc}
            packs={packs} 
            company={company}
        />
    </Container>
  )
}

export default observer(StockPage);