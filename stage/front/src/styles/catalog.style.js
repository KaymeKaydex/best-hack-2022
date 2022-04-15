import colors from './colors';
import styled from '@emotion/styled';
import { textCreator, textWrapCreator } from './blocks';
import {
    Box,
} from '@mui/material';

export const StockInputWrap = styled(Box)`
    display: flex;
    margin-top: 65px;
    width: 100%;
    height: 81px;
    background-color: ${colors.bgcInfo};
`

export const StockInput = styled.input`
    border: 0;
    font-size: 31.22px;
    font-weight: 300;
    line-height: 36px;
    background-color: transparent;
    &:focus {
        outline: none;
    }
    width: 100%;
`

export const IconWrap = styled(Box)`
    padding-left: 18px;
    padding-right: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Title = textCreator(55.97, 45.69, 800);
export const TitleWrap = textWrapCreator(0, 0, {mTop: 43});

export const Card = styled(Box)`
    padding: 25px;
    padding-top: 40px;
    margin-top: 30px;
    height: 373px;
    width: 591px;
    background-color: ${colors.bgcInfo};
    border-radius: 29px;
`

export const CardAmount = textCreator(43, 38, 300);
export const PacksAmount = textCreator(58, 50, 500, colors.dark, {mTop: 22});
export const CardAmountWrap = styled(Box)`
`;