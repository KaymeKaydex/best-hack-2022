import React from 'react'
import { observer } from 'mobx-react-lite';
import { CenteredProgress, ImgWrap } from '@styles/blocks';
import stockPage from '@view/stockPage.store';
import stockModal from '@view/buyStockModal.store';
import { useNavigate } from 'react-router-dom';
import {
    StyledCloseIcon,
    CloseButton,
    Title,
    TitleWrap,
    Content,
    BuyButton
} from '@styles/stockPage.style';

function PaymentResponse() {
    const navigate = useNavigate();
    function handleRedirectToCatalog() {
        navigate('/catalog');
    }
    React.useEffect(() => {
        setTimeout(() => {
            stockPage.gotResponse(true);
        }, 500)
    })
    if (stockPage.isPendingResponse)
        return (
            <Content>
                <CenteredProgress mTop={100} size={100}/>
            </Content>
        )
  return (
    <Content>
        <CloseButton
            onClick={stockModal.close}
        >
            <StyledCloseIcon />
        </CloseButton>
        <TitleWrap>
            <Title>
                {
                (stockPage.isSuccessfulPayment) ? (
                    <span>Акции приобретены!</span>
                ) : (
                    <span>Недостаточно средств на счёте</span>
                )
                }
            </Title>
        </TitleWrap>
        <ImgWrap
            src={`/img/payment-${(stockPage.isSuccessfulPayment) ?
            'success' 
            : 
            'failure'
            }.svg`}>
        </ImgWrap>
        <BuyButton
            onClick={handleRedirectToCatalog}
            mTop={54}
            height={117}
            width={803}
        >Перейти в каталог акций</BuyButton>
    </Content>
  )
}

export default observer(PaymentResponse);