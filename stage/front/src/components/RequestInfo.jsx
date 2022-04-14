import React from 'react'
import {
    StyledRequestInfo,
    TitleWrap,
    Title,
    Steps
} from '@styles/requestInfo.style';
import Step from '@components/Step';

const steps = [
    {title: 'Заполните заявку онлайн', descr: 'Понадобится только паспорт и телефон'},
    {title: 'Откроем счет за 5 минут', descr: 'Если биржа закрыта, то откроем счет на следующий торговый день'},
    {title: 'Привезем все документы', descr: 'Если вы наш клиент, то подписать документы можно онлайн'},
]

function RequestInfo() {
  return (
    <StyledRequestInfo>
        <TitleWrap>
            <Title>Оставьте заявку на открытие сайта</Title>
        </TitleWrap>
        <Steps>
            {
                steps.map((step, index) => (
                        <Step 
                            key={index}
                            index={index + 1}
                            title={step.title}
                            descr={step.descr}
                        />
                    )
                )
            }
        </Steps>
    </StyledRequestInfo>
  )
}

export default RequestInfo