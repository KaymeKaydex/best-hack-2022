import colors from './colors';
import styled from '@emotion/styled';
import { textCreator, textWrapCreator } from './blocks';
import {
    Box
} from '@mui/material';

export const StyledBrokerage = styled(Box)`
`

export const TitleWrap = styled(Box)`
    margin-top: 42px;
`

export const Title = textCreator(52.68, 45.69, 300);

export const Content = styled(Box)`
    margin-top: 92px;
    height: 358px;
`

export const Info = styled(Box)`
    display: flex;
    justify-content: space-between;
    height: 358px;
`

export const ImageWrap = styled(Box)`
`

export const ContentTitleWrap = textWrapCreator();
export const ContentDescrWrap = textWrapCreator(93, 560, {mTop: 63});

export const ContentTitle = textCreator(55.97, 45.69, 800);
export const ContentDescr = textCreator(30.76, 26.68, 300);
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