import colors from './colors';
import styled from '@emotion/styled';
import { textCreator, textWrapCreator } from './blocks';
import {
    Box,
    Modal,
} from '@mui/material';

export const StyledModal = styled(Modal)(() => ({
    '.MuiBackdrop-root': {
        backgroundColor: 'rgba(255, 255, 255, 0.01)',
        backdropFilter: 'blur(40px)',
    }
}))

export const Content = styled(Box)`
    margin: 70px auto;
    width: 879px;
    height: 822px;
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid ${colors.dark};
    border-radius: 37px;
`

export const Input = styled.input`
    width: 712px;
    height: 79px;
    border-radius: 45.3411px;
    border: 1px ${colors.dark} solid;
    padding-left: 44px;
    font-size: 26.43px;
    line-height: 30.48px;
    font-weight: 300;
    margin-top: 49px;
`

export const ImageWrap = styled(Box)`
    margin-top: -48px;
    text-align: center;
`

export const ActionButton = styled.button`
    width: 712px;
    height: 79px;
    background: linear-gradient(90deg, #2D296E 0%, #675FE0 100%);
    border-radius: 45.3411px;
    margin-top: ${(props) => props.m + 'px'};
    &:hover {
        cursor: pointer;
    }
`
export const ActionButtonText = textCreator(48.76, 42.29, 300, colors.white);

export const SignButtonsWrap = styled(Box)`
    margin-bottom: 41px;
    margin-top: 111px;
`
export const SignButton = styled.button`
    padding: 24px;
    &:hover {
        cursor: pointer;
    }
    border: 0;
    ${(props) => (props.isUnderlined) ? `border-bottom: 1px ${colors.dark} solid;` : ''}
    background-color: transparent;
`
export const SignButtonText = textCreator(55.34, 48, 300);

export const Form = styled.form`
    width: 80%;
    padding: 0 auto;
`

export const SuccessfulSignUpText = textCreator(47.84, 41.49, 300);
export const SuccessfulSignUpTextWrap = textWrapCreator(0, 0, {}, true);