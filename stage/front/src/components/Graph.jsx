import React from 'react'
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { Box } from '@mui/material';
import styled from '@emotion/styled';

const GraphWrap = styled(Box)`
  width: 100%;
  height: 700px;
`

function Graph({symbol}) {
  return (
    <GraphWrap>
      <AdvancedRealTimeChart
        symbol={symbol} 
        theme="dark" 
        autosize
      ></AdvancedRealTimeChart>
    </GraphWrap>
  )
}

export default Graph