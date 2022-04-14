import React from 'react'
import {
    StyledInvestmentTable,
    Title,
    TitleWrap,
    Descr,
    DescrWrap,
    OpenAccountText,
    OpenAccountButton,
    RangeInput,
    RangeField,
    RangeTitle,
    RangeAmount,
    Table,
} from '@styles/investmentTable.style';
import openBrockageModal from '@view/openBrockageModal.store';
import { Box } from '@mui/material';
import {
    BarChart,
    XAxis,
    YAxis,
    Bar,
    CartesianGrid,
    Tooltip
} from 'recharts'
import colors from '@styles/colors';
import { observer } from 'mobx-react-lite';
import investment from '@domain/investment.store';

const data = [
    {
        'year': '1 год',
      "value": 4000,
    },
    {
      "value": 3000,
    },
    {
      "value": 2000,
    },
    {
      "value": 2780,
    },
    {
        'year': '5 лет',
      "value": 1890,
    },
    {
      "value": 2390,
    },
    {
      "value": 1890,
    },
    {
      "value": 2390,
    },
    {
        'year': '10 лет',
        "value": 1890,
    },
    {
      "value": 2390,
    },
    {
        'year': '12 лет',
        "value": 3490,
    }
]

function InvestmentTable() {
  return (
    <StyledInvestmentTable>
        <TitleWrap>
            <Title>Начните инвестировать уже сегодня!</Title>
        </TitleWrap>
        <DescrWrap>
            <Descr>Инвестирование позволяет использовать сложный процент — реинвестирование доходов на длинном периоде кратно увеличивает первоначальные вложения</Descr>
        </DescrWrap>
         <Table>
             <Box>
                <RangeField>
                    <RangeTitle>Первоначальная сумма</RangeTitle>
                    <RangeAmount>{investment.initialAmount}</RangeAmount>
                    <RangeInput
                        step='10'
                        onChange={(e) => investment.setInitialAmount(e.target.value)} 
                    />
                </RangeField>
                <RangeField>
                    <RangeTitle>Пополнения в месяц</RangeTitle>
                    <RangeAmount>{investment.replenishment}</RangeAmount>
                    <RangeInput
                        step='10'
                        onChange={(e) => investment.setReplenishment(e.target.value)} 
                    />
                </RangeField>
                <RangeField>
                    <RangeTitle>Срок инвестирования</RangeTitle>
                    <RangeAmount>{investment.time}</RangeAmount>
                    <RangeInput
                        step='10'
                        onChange={(e) => investment.setTime(e.target.value)} 
                    />
                </RangeField>
                <RangeField>
                    <RangeTitle>Ожидаемая годовая доходность</RangeTitle>
                    <RangeAmount>{investment.income}</RangeAmount>
                    <RangeInput
                        step='10'
                        onChange={(e) => investment.setIncome(e.target.value)} 
                    />
                </RangeField>
            </Box>
            <Box marginTop={'auto'} marginBottom='-35px' marginLeft='84px'>
                <BarChart width={900} height={416 + 138 * 2} data={data}>
                    <XAxis dataKey={'year'}></XAxis>
                    <YAxis hide></YAxis>
                    <Tooltip></Tooltip>
                    <Bar dataKey={'value'} fill={colors.dark}></Bar>
                </BarChart>
            </Box>
         </Table>

        <OpenAccountButton
            onClick={openBrockageModal.open}
        >
            <OpenAccountText>Открыть брокерский счёт</OpenAccountText>
        </OpenAccountButton>
    </StyledInvestmentTable>
  )
}

export default observer(InvestmentTable);