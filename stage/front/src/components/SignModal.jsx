import React from 'react'
import {
    StyledModal,
    Content,
    SignButtonsWrap,
    SignButton,
    SignButtonText,
} from '@styles/signModal.style';
import spectator from '@view/spectator.store';
import { observer } from 'mobx-react-lite';
import SignInForm from '@components/SignInForm';
import SignUpForm from '@components/SignUpForm';

function SignModal() {
  return (
    <StyledModal
        open={spectator.isSignModalOpen}
        onClose={spectator.toggleIsSignModalOpen}
    >
        <Content>
            <SignButtonsWrap>
                <SignButton 
                    onClick={spectator.openSignInForm}
                    isUnderlined={(spectator.isSignInWindowOpen) ? true : false}
                ><SignButtonText>Войти</SignButtonText></SignButton>
                <SignButton 
                    onClick={spectator.openSignUpForm}
                    isUnderlined={(!spectator.isSignInWindowOpen) ? true : false}
                ><SignButtonText>Зарегистрироваться</SignButtonText></SignButton>
            </SignButtonsWrap> 
            {
                (spectator.isSignInWindowOpen) ? (
                    <SignInForm />
                ) : (
                    <SignUpForm />
                )
            }
        </Content>
    </StyledModal>
  )
}

export default observer(SignModal);