import React from 'react'
import { ImageWrap } from '@styles/signModal.style';
import {
    Input,
    ActionButton,
    ActionButtonText,
    Form,
    SuccessfulSignUpText,
    SuccessfulSignUpTextWrap,
} from '@styles/signModal.style';
import userStore from '@domain/user.store';
import spectator from '@view/spectator.store';

function SignUpForm() {
  function handleSignInAfterReg() {
    userStore.login({});///
    spectator.toggleIsSignModalOpen();
  }
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
        {/* <Input placeholder='Email'></Input>
        <Input placeholder='Пароль'></Input>
        <Input placeholder='Повторите пароль'></Input>
        <ActionButton m='35'><ActionButtonText>Зарегистрироваться</ActionButtonText></ActionButton> */}
        <ImageWrap>
            <img src="/img/successful-sign-up.svg" alt="successful-sign-up" />
        </ImageWrap>
        <SuccessfulSignUpTextWrap>
            <SuccessfulSignUpText>Регистрация прошла успешно!</SuccessfulSignUpText>
        </SuccessfulSignUpTextWrap>
        <ActionButton
          onClick={handleSignInAfterReg} 
        m='35'><ActionButtonText>Войти</ActionButtonText></ActionButton>
    </Form>
  )
}

export default SignUpForm