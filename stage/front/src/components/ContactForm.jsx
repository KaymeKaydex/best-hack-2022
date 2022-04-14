import React from 'react'

import {
    ContactFormWrap,
    OpenAccountButton,
    OpenAccountText,
    ElaborationInfo,
    Form,
    Title,
    Descr,
    TitleWrap,
    DescrWrap,
    Input,
    Content,
    ElaborationInfoWrap
} from '@styles/contactForm.style';
import { ImgWrap } from '../styles/blocks';

function ContactForm() {
  return (
    <ContactFormWrap>
        <Content>
            <Form>
                <TitleWrap>
                    <Title>Контактная информация</Title>
                </TitleWrap>
                <DescrWrap>
                    <Descr>Открыть счет могут граждане РФ старше 18 лет</Descr>
                </DescrWrap>
                <Input placeholder='Фамилия, имя и отчество*'></Input>
                <Input placeholder='Мобильный телефон*'></Input>
                <OpenAccountButton>
                    <OpenAccountText>Открыть брокерский счёт</OpenAccountText>
                </OpenAccountButton>
            </Form>
            <ImgWrap
                src="img/contact-info.svg" 
                alt="contact-info" 
            />
        </Content>
        <ElaborationInfoWrap>
            <ElaborationInfo>Заполняя форму, я принимаю условия передачи информации</ElaborationInfo>
        </ElaborationInfoWrap>
    </ContactFormWrap>
  )
}

export default ContactForm