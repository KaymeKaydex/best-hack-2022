import React from 'react'
import {
    StyledStep,
    StepIndexWrap,
    StepIndex,
    StepTitleWrap,
    StepDescrWrap,
    StepTitle,
    StepDescr,
} from '@styles/requestInfo.style';

function Step({index, title, descr}) {
  return (
    <StyledStep>
        <StepIndexWrap>
            <StepIndex>{index}</StepIndex>
        </StepIndexWrap>
        <StepTitleWrap><StepTitle>{title}</StepTitle></StepTitleWrap>
        <StepDescrWrap><StepDescr>{descr}</StepDescr></StepDescrWrap>
    </StyledStep>
  )
}

export default Step