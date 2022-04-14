import {
    Box
} from '@mui/material';
import styled from '@emotion/styled';
import colors from './colors';
import { textCreator, textWrapCreator } from './blocks';

export const StyledFooter = styled(Box)`
    margin-top: 63px;
    padding-top: 134px;
    width: 100%;
    height: 557px;
    background: linear-gradient(90deg, #2D296E 1.67%, #675FE0 100%);
`

export const OfficeText = textCreator(55.97, 45.69, 800, colors.white);
export const AddressText = textCreator(42.87, 37.18, 300, colors.white);
export const DescrText = textCreator(55.97, 45.69, 800, colors.white);

export const OfficeTextWrap = textWrapCreator();
export const AddressTextWrap = textWrapCreator(0, 0, {mTop: 45});
export const DescrTextWrap = textWrapCreator(0, 0, {mTop: 108});

export const ButtonToTop = styled(Box)`
    &:hover {
        cursor: pointer;
    }
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
`

export const ButtonText = textCreator(55.97, 45.69, 800, colors.white);