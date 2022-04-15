import colors from './colors';
import styled from '@emotion/styled';
import { textCreator, textWrapCreator } from './blocks';
import {
    Box,
    Button,
    Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { StyledModal } from './signModal.style';

export const Info = styled(Box)`
    margin-top: 30px;
    border-radius: 29px;
    padding: 46px;
    display: flex;
    width: 100%;
    background: linear-gradient(90deg, #2D296E 0%, #675FE0 100%);
    justify-content: space-between;
`

export const CompanyText = textCreator(61, 53, 300, colors.white, {mTop: 40});
export const TickerText = styled.span`
    color: ${colors.gray};
    line-height: 62px;
    font-weight: 300;
    font-size: 54px;
    position: absolute;
    top: 0;
    right: -120px;
`;

export const TitleText = textCreator(36, 31, 300, colors.gray, {mTop: 57});
export const SegmentText = textCreator(36, 31, 300, colors.gray, {mTop: 161});
export const InfoText = textCreator(45, 40, 300, colors.white, {mTop: 33});

export const Column = styled(Box)`
    position: relative;
`

export const LogoWrap = styled.img`
    margin-left: auto;
    src: url(${(props) => props.src});
    object-fit: cover;
    height: 175px;
    width: 175px;
    position: absolute;
    right: 0;
`

export const BuyForm = styled.form`
    border: 1px ${colors.dark} solid;
    border-radius: 37px;
    position: relative;
    padding: 38px;
    width: 879px;
    height: 822px;
    background-color: ${colors.white};
    margin: 61px auto;
`

export const BuyStockCard = styled(Box)`
    width: 706px;
    height: 476px;
    background-color: ${colors.bgcInfo};
    border-radius: 29px;
    margin: 0 auto;
    margin-top: 76px;
    margin-bottom: 127px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
`

export const DateText = textCreator(45, 39, 300, colors.darkPurple);
export const PacksText = textCreator(82, 71, 800, colors.darkPurple);
export const HavingStocksText = textCreator(35, 30, 300, colors.darkPurple); 
export const BuyButton = styled.button`
    &:hover {
        cursor: pointer;
    }
    background: linear-gradient(90deg, #2D296E 0%, #675FE0 100%);
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    border: 0;
    font-size: 43px;
    font-weight: 300;
    line-height: 39px;
    border-radius: 45px;
    color: ${colors.white};
    margin-top: ${(props) => (props.mTop)? props.mTop + 'px' : '0'};
`;

export const BuyStockModal = StyledModal;

export const StyledCloseIcon = styled(CloseIcon)`
    font-size: 59px;
`
export const CloseButton = styled(Button)`
    color: ${colors.dark};
    position: absolute;
    right: 7px;
    top: 7px;
`

export const Company = textCreator(36, 31, 300, colors.dark, {mLeft: 27});
export const CountInfoText = textCreator(36, 31, 300);
export const CountText = styled(Typography)`
    font-size: 36px;
    font-weight: 300;
    width: 80px;
    color: ${colors.dark};
    text-align: center;
    height: 52px;
`;
export const Packs = textCreator(36, 31, 300, colors.dark, {m: '0 0 0 auto'});
export const Row = styled(Box)`
    display: flex;
    align-items: center;
    margin-top: ${(props) => props.mTop}px;
`

export const CountButtonGroup = styled(Box)`
    margin-left: 68px;
    display: flex;
    align-items: center;
    border: 1px solid #393476;
    border-radius: 4px;
`
export const CountButton = styled(Button)`
    background-color: ${colors.bgcInfo};
    color: ${colors.dark};
    width: 80px;
    height: 52px;
    &:hover {
        cursor: pointer;
    }
`

export const Content = styled(Box)`
    border: 1px ${colors.dark} solid;
    border-radius: 37px;
    padding: 38px;
    margin: 61px auto;
    position: relative;
    width: 879px;
    height: 822px;
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = textCreator(55, 48, 300);
export const TitleWrap = textWrapCreator(0, 0, {mTop: 50, m: '50px auto'});

export const SumOfPacks = textCreator(45, 40, 500);