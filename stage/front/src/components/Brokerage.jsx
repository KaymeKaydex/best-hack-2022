import React from 'react'
import {
    StyledBrokerage,
    TitleWrap,
    Title,
    Content,
    ContentTitleWrap,
    ContentTitle,
    ContentDescr,
    ContentDescrWrap,
    OpenAccountButton,
    OpenAccountText,
    Info,
    ImageWrap
} from '@styles/brokerage.style';
import {Box} from '@mui/material';
import OpenBrockageModal from '@components/OpenBrockageModal';
import openBrockageModal from '@view/openBrockageModal.store';

function Brokerage() {
    function handleOpen() {
        openBrockageModal.open();
    }
  return (
    <StyledBrokerage>
        <TitleWrap>
            <Title>Брокерский счёт</Title>
        </TitleWrap>
        <Content>
            <Info>
                <Box>
                    <ContentTitleWrap>
                        <ContentTitle>Счёт для инвестиций</ContentTitle>
                    </ContentTitleWrap>
                    <ContentDescrWrap>
                        <ContentDescr>Простой способ сохранить и приумножить сбережения. Понятные тарифы и удобное приложение</ContentDescr>
                    </ContentDescrWrap>
                    <OpenAccountButton
                        onClick={handleOpen}
                    >
                        <OpenAccountText>
                            Открыть брокерский счёт
                        </OpenAccountText>
                    </OpenAccountButton>
                </Box>
                <ImageWrap>
                    <img src="img/brockage-icon.svg" alt="brokage icon" />
                </ImageWrap>
            </Info>
        </Content>
        <OpenBrockageModal />
    </StyledBrokerage>
  )
}

export default Brokerage