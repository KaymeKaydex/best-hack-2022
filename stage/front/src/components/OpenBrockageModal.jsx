import React from 'react'
import { StyledModal } from '@styles/signModal.style'
import { Content, CloseButton, StyledCloseIcon as CloseIcon } from '@styles/stockPage.style';
import openBrockageModal from '@view/openBrockageModal.store';
import { observer } from 'mobx-react-lite';
import {
    Title,
    TitleWrap,
    BuyButton
} from '@styles/stockPage.style';
import { ImgWrap } from '@styles/blocks';
import spectator from '@view/spectator.store';
import user from '@domain/user.store';
import { useNavigate } from 'react-router-dom';

function OpenBrockageModal() {
    const navigate = useNavigate();
    function handleOpen() {
        if (user.isLoggedIn) 
            navigate('/user/' + user.id);
        else
            spectator.toggleIsSignModalOpen();
        openBrockageModal.close();
    }
    function handleClose() {
        openBrockageModal.close();
    }
  return (
    <StyledModal
        onClose={handleClose}
        open={openBrockageModal.isOpen}
    >
        <Content>
                <CloseButton
                    onClick={handleClose}
                >
                    <CloseIcon />
                </CloseButton>
                <TitleWrap>
                    <Title>
                        {
                            (user.isLoggedIn) ?
                                'Теперь у Вас есть счёт! Скорее же преобретите акции!'
                                :
                                'Перед тем, как открыть счёт, войдите или зарегистрируйтесь'
                        }
                    </Title>
                </TitleWrap>
                <ImgWrap
                    src={`/img/${(user.isLoggedIn) ? 'payment-success' : 'login-or-signup-icon' }.svg`}>
                </ImgWrap>
                <BuyButton
                    onClick={handleOpen}
                    height={79}
                    width={712}
                >Перейти</BuyButton>
        </Content>
    </StyledModal>
  )
}

export default observer(OpenBrockageModal);