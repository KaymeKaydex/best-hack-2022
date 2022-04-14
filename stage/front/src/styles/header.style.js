import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    Menu,
    MenuItem,
    Button,
} from '@mui/material';
import styled from '@emotion/styled';
import colors from './colors';
import { textCreator } from './blocks';

export const StyledHeader = styled(Box)`
    height: 155px;
    width: 100%;
    border-bottom: 1px ${colors.dark} solid;
    display: flex;
`;

export const LogoWrap = styled(Box)`
    &:hover {
        cursor: pointer;
    }
    width: 133px;
    color: ${colors.black};
`

export const LogoNumbers = textCreator(75.82, 86.82, 800, colors.black);
export const LogoName = textCreator(33.69, 45.69, 800, colors.black);

export const HeaderBar = styled(AppBar)`
    background-color: ${colors.white};
    box-shadow: none;
`

export const StyledToolbar = styled(Toolbar)`
    height: 100%;
    justify-content: space-between;
    align-items: center;
`

export const MenuBar = styled(Box)`
    display: flex;
    justify-content: space-between;
    width: 800px;
`

export const MenuBarItem = styled(MenuItem)`
    ${(props) => (props.isUnderlined) ? `border-bottom: 1px ${colors.dark} solid;` : ''}
`

export const LogInButton = styled(Button)`
    color: ${colors.black};
`

export const MenuBarText = textCreator(38.56, 33.44, 300);