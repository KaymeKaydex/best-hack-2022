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

function SignUpForm() {
  return (
    <Form>
        {/* <Input placeholder='Email'></Input>
        <Input placeholder='Пароль'></Input>
        <Input placeholder='Повторите пароль'></Input>
        <ActionButton m='35'><ActionButtonText>Зарегистрироваться</ActionButtonText></ActionButton> */}
        <ImageWrap>
            <img src="/img/successful-sign-up.png" alt="successful-sign-up" />
        </ImageWrap>
        <SuccessfulSignUpTextWrap>
            <SuccessfulSignUpText>Регистрация прошла успешно!</SuccessfulSignUpText>
        </SuccessfulSignUpTextWrap>
        <ActionButton m='35'><ActionButtonText>Войти</ActionButtonText></ActionButton>
    </Form>
  )
}

export default SignUpForm