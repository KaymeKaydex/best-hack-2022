import { createGlobalStyle } from "styled-components";
import colors from '@styles/colors';

export default createGlobalStyle`
    * {
        font-family: 'Gilroy' !important;
        box-sizing: border-box;
    }
    body {
        background-color: ${colors.white};
    }
    @font-face {
      font-family: 'Gilroy';
      font-weight: 700;
      font-style: normal;
      src: url(/fonts/gilroy-bold-webfont.woff) format('woff'), url(/fonts/gilroy-bold-webfont.woff2) format('woff2')
    }
    @font-face {
        font-family: 'Gilroy';
        font-weight: 600;
        font-style: normal;
        src: url(/fonts/gilroy-semibold-webfont.woff) format('woff'), url(/fonts/gilroy-semibold-webfont.woff2) format('woff2')
    }
    @font-face {
        font-family: 'Gilroy';
        font-weight: 500;
        font-style: normal;
        src: url(/fonts/gilroy-medium-webfont.woff) format('woff'), url(/fonts/gilroy-medium-webfont.woff2) format('woff2')
    }
    @font-face {
        font-family: 'Gilroy';
        font-weight: 300;
        font-style: normal;
        src: url(/fonts/gilroy-lightItalic-webfont.woff) format('woff'), url(/fonts/gilroy-lightItalic-webfont.woff2) format('woff2')
    }
    @font-face {
        font-family: 'Gilroy';
        font-weight: 300;
        font-style: normal;
        src: url(/fonts/gilroy-light-webfont.woff) format('woff'), url(/fonts/gilroy-light-webfont.woff2) format('woff2')
    }
    @font-face {
        font-family: 'Gilroy';
        font-weight: 400;
        font-style: normal;
        src: url(/fonts/gilroy-regular-webfont.woff) format('woff'), url(/fonts/gilroy-regular-webfont.woff2) format('woff2')
    }
`