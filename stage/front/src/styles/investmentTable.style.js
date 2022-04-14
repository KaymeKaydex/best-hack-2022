import {
    Box, Slider
} from '@mui/material';
import styled from '@emotion/styled';
import colors from './colors';
import { styledOverride, textCreator, textWrapCreator } from './blocks';

export const StyledInvestmentTable = styled(Box)`
    margin-top: 87px;
`

export const Title = textCreator(55.97, 45.69, 800);
export const TitleWrap = textWrapCreator();

export const Descr = textCreator(36.24, 31.43, 300);
export const DescrWrap = textWrapCreator(0, 0, {mTop: 38});

export const OpenAccountText = textCreator(30.48, 26.43, 300, colors.white);
export const OpenAccountButton = styled.button`
    background: linear-gradient(90deg, #2D296E 0%, #675FE0 100.12%);
    width: 365.57px;
    height: 79px;
    border-radius: 45px;
    margin-top: 67px;
    &:hover {
        cursor: pointer;
    }
`

export const RangeInput = styledOverride(Slider, {
    // '.''
    '&': {
        position: 'absolute',
        bottom: '-15px',
        left: 0
    }
})

export const RangeField = styled(Box)`
    padding: 23px;
    background-color: ${colors.bgcInfo};
    height: 138px;
    width: 380px;
    position: relative;
    margin-top: 38px;
`

export const RangeTitle = textCreator(29, 25, 300, '#494585');
export const RangeAmount = textCreator(36, 31, 300, colors.dark, {mTop: 10});
export const Table = styled(Box)`
    display: flex;
`;