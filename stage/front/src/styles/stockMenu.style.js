import colors from './colors';
import styled from '@emotion/styled';
import { styledOverride, textCreator, textWrapCreator } from './blocks';
import {
    Box,
    Button,
    Menu,
    MenuItem,
    Typography
} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

export const MenuGroup = styled(Box)`
    position: relative;
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    justify-content: end;
`

export const MenuButton = styled(Button)`
    line-height: 26px;
    font-size: 23px;
    font-weight: 300;
    color: ${colors.dark};
    text-transform: none;
    ${(props) => (props.mRight) ? 'position: absolute;' : ''}
    right: ${(props) => (props.mRight) ? props.mRight + 'px' : 0};
`

export const StyledMenu = styledOverride(Menu, {
    '.MuiList-root': {
        paddingTop: 0,  
        paddingBottom: 0,
    },
    '.MuiPaper-root': {
        borderRadius: 29,
        backgroundColor: colors.bgcInfo,
    },
});

export const StyledMenuItem = styled(MenuItem)`
    background-color: ${colors.bgcInfo};
    font-size: 25px;
    line-height: 29px;
    font-weight: 300;
    padding-top: 23px;
    padding-bottom: 23px;
    border-bottom: ${({isBordered}) => (isBordered) ? '1px #494585 solid' : ''};
`

export const Stock = styled(Box)`
    height: 191px;
    border-top: 1px ${colors.black} solid;
`

export const Title = styled.span`
    line-height: 26px;
    font-size: 23px;
    font-weight: 300;
    margin-right: auto;
    display: flex;
`;

export const Line = styled(Box)`
    height: 1px;
    background-color: ${colors.dark};
`

export const Wrap = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`

export const StockLogoWrap = styled(Box)`
    width: 93px;
    height: 93px;
`

export const DifferenceWrap = textWrapCreator(0,0,{mBottom: 21});
export const ProcentageWrap = textWrapCreator();

export const ShortenerWrap = textWrapCreator(0, 0, {mTop: 25});
export const ShortenerText = textCreator(36, 31, 300, 'rgba(45, 41, 110, 0.65)');
export const CompanyWrap = textWrapCreator();
export const DifferenceText = styled(Typography)`
    line-height: 36px;
    font-weight: 300;
    font-size: 31px;
    color: ${(props) => {
        if (props.value > 0) 
            return colors.green;
        if (props.value < 0) 
            return colors.red;
        return colors.yellow;
    }}; 
`;
export const PriceText = textCreator(36, 31, 300, colors.dark);
export const CompanyText = textCreator(36, 31, 300, colors.dark);

export const TitleWrap = styled(Box)`
    display: flex;
    align-items: center;
    margin-left: 24px;
`

export const PriceWrap = styled(Box)`
`

export const StyledDoneIcon =  styled(DoneIcon)`
    margin-left: 10px;
`