import React from 'react'
import { Container } from '@styles/blocks'
import {
    PaymentHeader,
    Title,
    Descr,
    GoldenCardDescr,
    PaymentAmount,
    Input,
    Packs,
    Line,
    BankInfo,
} from '@styles/payment.style';
import { ImgWrap } from '@styles/blocks';
import { Box, Typography } from '@mui/material';
import { BuyButton } from '@styles/stockPage.style';
import timer from '@domain/timer.store';
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {observer} from 'mobx-react-lite';

function PaymentPage() {
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        const time = 10;
        const callback = () => navigate('/');
        timer.startTimer(time, 1, callback);
    }
    function handleReturnToWebsite() {
        const time = 0;
        const callback = () => navigate('/');
        timer.startTimer(time, 1, callback);
    }
    if (timer.isTimerBegun)
        return (
            <>
                <Container>
                    <PaymentHeader>
                        <ImgWrap src='img/bop-logo.svg' />
                        <ImgWrap src='img/bajk-logo.svg' />
                    </PaymentHeader>
                </Container>
                <Box display={'flex'} flexDirection='column' alignItems={'center'}>
                    <ImgWrap src='img/successful-replenishment.svg'/>
                    <Title sx={{marginTop: '50px'}}>Платёж успешно обработан</Title>
                    <Descr sx={{marginTop: '50px'}}>Вы будете перенаправлены обратно на сайт через</Descr>
                    <Descr sx={{marginTop: '50px'}}><span style={{fontWeight: '800'}}>{timer.time}</span> секунд</Descr>
                    <Line sx={{marginTop: '50px'}}/>
                    <Descr sx={{marginTop: '50px', textAlign: 'center'}}>Нажмите на кнопку “Перейти на сайт”, чтобы перейти немедленно</Descr>
                    <BuyButton  
                        onClick={handleReturnToWebsite}
                        mTop={90}
                        width='803'
                        height='117'
                    >Перейти на сайт</BuyButton>
                </Box>
            </>
        )
  return (
    <Container>
        <PaymentHeader>
            <ImgWrap src='img/bop-logo.svg' />
            <ImgWrap src='img/bajk-logo.svg' />
        </PaymentHeader>
        <Box>
            <Title
                sx={{marginTop: '148px'}}
            >Оплата банковской картой</Title>
            <Title
                sx={{marginTop: '103px', marginBottom: '103px'}}
            >Данные по карте:</Title>
            <ImgWrap src='img/golden-card.svg' />
            <GoldenCardDescr
                sx={{marginTop: '103px'}}
            >
                У вас есть карта с бесконечным количеством packs. Скорее же переведите с неё их на своё счёт, чтобы приобрести акции!
            </GoldenCardDescr>
            <form onSubmit={handleSubmit(onSubmit)}>
                <PaymentAmount>
                    <Title
                        sx={{marginRight: '135px'}}
                    >
                        Сумма заказа: 
                    </Title>
                    <Input type='number' {...register('amount')}/>
                    <Packs
                        sx={{marginLeft: '30px'}}
                    >packs</Packs>
                </PaymentAmount>
                <BuyButton  
                    mTop={90}
                    width='803'
                    height='117'
                >Пополнить баланс</BuyButton>
            </form>
            <Box
                sx={{marginTop: '103px'}}
            >
                <ImgWrap src='img/js-logo.svg'/>
                <ImgWrap src='img/bk-logo.svg'/>
            </Box>
            <BankInfo
                sx={{marginTop: '103px', marginBottom: '117px'}}
            >Банк - это место, где вам дадут денег взаймы, если вы докажете, что они вам не нужны. Банкиров не поймешь. Сначала рассылают СМС «Бери деньги!», а когда возьмёшь деньги, начинают звонить: «Отдай деньги!» Банк - это здравый смысл, трезвый подход к действительности, к партнерам. Ваши дела процветают, если у вас достаточно денег, чтобы получить кредит в банке. Банкир - это человек, который одолжит вам зонтик в солнечную погоду, чтобы забрать его, как только начинается дождь.
            </BankInfo>
        </Box>
    </Container>
  )
}

export default observer(PaymentPage);