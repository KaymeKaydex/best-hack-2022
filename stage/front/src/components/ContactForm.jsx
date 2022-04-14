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
    ImageWrap,
    Content,
    ElaborationInfoWrap
} from '@styles/contactForm.style';

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
            <ImageWrap>
                <img src="/img/contact-info.png" alt="contact-info" />
            </ImageWrap>
        </Content>
        <ElaborationInfoWrap>
            <ElaborationInfo>Заполняя форму, я принимаю условия передачи информации</ElaborationInfo>
        </ElaborationInfoWrap>
    </ContactFormWrap>
  )
}

export default ContactForm