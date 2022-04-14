import React from 'react'
import {
    BuyStockModal as StyledByuStockModal,
    BuyForm,
    StyledCloseIcon,
    CloseButton,
    Title,
    TitleWrap,
    Company,
    Packs,
    Row,
    CountText,
    CountInfoText,
    CountButtonGroup,
    CountButton,
    SumOfPacks
} from '@styles/stockPage.style';
import { ImgWrap } from '@styles/blocks';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { BuyButton } from '@styles/stockPage.style';
import stockModal from '@view/buyStockModal.store';
import {observer} from 'mobx-react-lite';
import PaymentResponse from '@components/PaymentResponse';
import stockPage from '@view/stockPage.store';

function BuyStockModal({id, imgSrc, packs, company}) {
    function handleRemoveOneStock() {
        stockModal.decCount();
    }
    function handleAddOneStock() {
        stockModal.incCount();
    }
    function handleSubmit(e) {
        e.preventDefault();
        stockPage.wasSendResponse();
    }
  return (
    <StyledByuStockModal
        open={stockModal.isOpen}
        onClose={stockModal.close}
    >
        {
            (stockPage.isEnteringForm)? (
                <BuyForm onSubmit={handleSubmit}>
                    <CloseButton
                        onClick={stockModal.close}
                    >
                        <StyledCloseIcon />
                    </CloseButton>
                    <TitleWrap>
                        <Title>Вы уверены, что хотите приобрести данную акцию?</Title>
                    </TitleWrap>
                    <Row mTop='90'>
                        <ImgWrap src={imgSrc}></ImgWrap>
                        <Company>{company}</Company>
                        <Packs>{packs} packs</Packs>
                    </Row>
                    <Row mTop='73'>
                        <CountInfoText>Количество:</CountInfoText>
                        <CountButtonGroup>
                            <CountButton
                                onClick={handleRemoveOneStock}
                            ><RemoveIcon></RemoveIcon></CountButton>
                            <CountText>{stockModal.count}</CountText>
                            <CountButton
                                onClick={handleAddOneStock}
                            ><AddIcon></AddIcon></CountButton>
                        </CountButtonGroup>
                    </Row>
                    <Row mTop='60'>
                        <SumOfPacks>Итого: {packs * stockModal.count} packs</SumOfPacks>
                    </Row>
                    <BuyButton
                        mTop={54}
                        height={117}
                        width={803}
                    >Приобрести акции</BuyButton>
                </BuyForm>
            ) : (
                <PaymentResponse />
            )
        }
    </StyledByuStockModal>
  )
}

export default observer(BuyStockModal);