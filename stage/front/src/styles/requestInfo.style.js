import {
    Box
} from '@mui/material';
import styled from '@emotion/styled';
import colors from './colors';
import { textCreator, textWrapCreator } from './blocks';

export const StyledRequestInfo = styled(Box)`
    margin-top: 83px;
`

export const TitleWrap = textWrapCreator(0, 0, {}, true);
export const Title = textCreator(55.97, 45.69, 800);

export const Steps = styled(Box)`
    margin-top: 70px;
    display: flex;
    justify-content: space-between;
`

export const StyledStep = styled(Box)`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StepIndexWrap = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95px;
    height: 95px;
    background-color: ${colors.bgcInfo};
    border-radius: 18px;
`
export const StepIndex = textCreator(111.99, 97.13, 300);
export const StepTitleWrap = textWrapCreator(0, 0, {mTop: 36.64}, true);
export const StepDescrWrap = textWrapCreator(0, 0, {mTop: 21}, true);
export const StepTitle = textCreator(36, 31.22, 300);
export const StepDescr = textCreator(24.21, 21, 300);