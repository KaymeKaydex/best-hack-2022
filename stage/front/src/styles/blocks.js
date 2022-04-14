import styled from '@emotion/styled';
import colors from './colors';
import { 
    Typography,
    Box, 
} from '@mui/material';
import { isEmpty } from 'lodash';
import { NavLink } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

export function textCreator(h, s, w, color = colors.dark, mArgs = {}) {
    return styled(Typography)`
        font-family: 'Gilroy' sans-serif;
        font-size: ${s}px;
        line-height: ${h}px;
        font-weight: ${w};
        color: ${color};
        ${(!isEmpty(mArgs) && mArgs.m) ? `margin: ${mArgs.m};` : ''}
        ${(!isEmpty(mArgs) && mArgs.mTop) ? `margin-top: ${mArgs.mTop}px;` : ''}
        ${(!isEmpty(mArgs) && mArgs.mRight) ? `margin-right: ${mArgs.mRight}px;` : ''}
        ${(!isEmpty(mArgs) && mArgs.mBottom) ? `margin-bottom: ${mArgs.mBottom}px;` : ''}
        ${(!isEmpty(mArgs) && mArgs.mLeft) ? `margin-left: ${mArgs.mLeft}px;` : ''}
    `
}
export function textWrapCreator(h = 0, w = 0, mArgs = {}, isTextCentered = false) {
    return styled(Box)`
        ${(isTextCentered)? 'text-align: center;' : ''}
        ${(h)? `height: ${h}px;`: ''}
        ${(w)? `width: ${w}px;`: ''}
        ${(!isEmpty(mArgs) && mArgs.m) ? `margin: ${mArgs.m};` : ''}
        ${(!isEmpty(mArgs) && mArgs.mTop) ? `margin-top: ${mArgs.mTop}px;` : ''}
        ${(!isEmpty(mArgs) && mArgs.mRight) ? `margin-right: ${mArgs.mRight}px;` : ''}
        ${(!isEmpty(mArgs) && mArgs.mBottom) ? `margin-bottom: ${mArgs.mBottom}px;` : ''}
        ${(!isEmpty(mArgs) && mArgs.mLeft) ? `margin-left: ${mArgs.mLeft}px;` : ''}
    `
}

export const NavL = styled(NavLink)`
    text-decoration: none;
`

export const Container = styled(Box)`
    width: 1440px;
    height: 100%;
    margin: 0 auto;
    ${(props) => (props.isRelative) ? 'position: relative;' : ''}
`

export const styledOverride = (block, overrides, settings = {}) => {
    return styled(block)((settings) => overrides);
}

export const ImgWrap = styled.img`
    src: url(${(props) => props.src});
    object-fit: cover;
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    ${({isAbsolute, right, top}) => (isAbsolute)? 
        `position: absolute; right: ${right}px; top: ${top}px;` 
        : 
        ''
    }
`

export const CenteredProgress = ({size, mTop, mRight}) => {
    return (
        <Box textAlign={'center'} marginTop={`${mTop}px`} marginRight={`${mRight}px`}>
            <CircularProgress size={size} />
        </Box>
    )
}