import {
    Box
} from '@mui/material';
import styled from '@emotion/styled';
import colors from './colors';
import { textCreator, textWrapCreator } from './blocks';

export const ContactFormWrap = styled(Box)`
    margin-top: 116px;
`

export const Content = styled(Box)`
    display: flex;
    justify-content: space-between;
` 

export const Form = styled.form`
    width: 830px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Title = textCreator(55.97, 45.69, 800);
export const Descr = textCreator(40.05, 34.74, 300);
export const TitleWrap = textWrapCreator();
export const DescrWrap = textWrapCreator();
export const Input = styled.input`
    width: 612px;
    height: 81px;
    background-color: ${colors.bgcInfo};
    border: 0;
    font-size: 31.22px;
    line-height: 36px;
    font-weight: 300;
    padding-left: 25px;
`
export const ImageWrap = styled(Box)`
`

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

export const ElaborationInfoWrap = textWrapCreator(0, 0, {mTop: 35});
export const ElaborationInfo = textCreator(28.85, 25.02, 300);