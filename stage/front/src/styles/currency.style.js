import styled from '@emotion/styled';
import colors from './colors';
import { textCreator } from './blocks';
import { 
    Typography,
    Box, 
} from '@mui/material';

export const InputWrap = styled(Box)`
    height: 80px;
    width: 455px;
    display: flex;
    border: 1px #393486 solid;
    border-radius: 16px;
`

export const Input = styled.input`
    &:focus {
        outline: none;
    }
    font-size: 49px;
    font-weight: 300;
    line-height: 56px;
    width: 268px;
    border: 0;
    border-radius: 16px 0 0 16px;
    border-right: 1px #393486 solid;
    text-align: right;
    padding-right: 10px;
`

export const SetCountry = styled(Box)`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CurrencyConvert = styled(Box)`
    margin-top: 85px;
    width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`

export const Ticker = textCreator(25, 20, 800, '#39348678');