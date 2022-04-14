import React from 'react'
import {
    Input,
    ActionButton,
    ActionButtonText,
    Form
} from '@styles/signModal.style';

function SignInForm() {
  return (
    <Form>
        <Input placeholder='Email'></Input>
        <Input placeholder='Пароль'></Input>
        <ActionButton 
          m='163'
        ><ActionButtonText>Войти</ActionButtonText></ActionButton>
    </Form>
  )
}

export default SignInForm