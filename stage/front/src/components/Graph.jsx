import React from 'react'
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { Box } from '@mui/material';
import styled from '@emotion/styled';

const GraphWrap = styled(Box)`
  width: 100%;
  height: 500px;
`

function Graph() {
  return (
    <GraphWrap>
      <AdvancedRealTimeChart theme="dark" autosize></AdvancedRealTimeChart>
    </GraphWrap>
  )
}

export default Graph