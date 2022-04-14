import colors from './colors';
import styled from '@emotion/styled';
import { styledOverride, textCreator, textWrapCreator } from './blocks';
import {
    Box,
    Button,
    Menu,
    MenuItem,
    Typography,
    Modal
} from '@mui/material';

export const PaymentHeader = styled(Box)`
    margin-top: 166px;
    display: flex;
    justify-content: space-between;
`

export const Title = textCreator(87, 75, 300, colors.black);
export const Descr = textCreator(58, 50, 300);
export const GoldenCardDescr = textCreator(61, 53, 300, colors.black);
export const Packs = textCreator(69, 60, 300);
export const BankInfo = textCreator(41, 36, 300, colors.black);
export const PaymentAmount = styled(Box)`
    margin-top: 103px;
    display: flex;
`
export const Input = styled.input`
    border: 1px ${colors.dark} solid;
    font-size: 31.22px;
    font-weight: 300;
    line-height: 36px;
    background-color: ${colors.bgcInfo};
    &:focus {
        outline: none;
    }
    padding: 23px;
`

export const Line = styled(Box)`
    background-color: ${colors.dark};
    height: 1px;
    width: 100%;
`