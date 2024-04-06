import React from 'react'
import styled from 'styled-components'

const LLMWraper = styled.div`
    width: 30vw;
    height: 100%;
    box-shadow: 0 0 4px #5151ac7f;
    border-radius: 5px;
    overflow: hidden;
    padding: 2px 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.7; 
    text-align: center;
`

function LLMBotComponent() {
  return (
    <LLMWraper>
          LLMBotComponent will be avail from 3rd review
    </LLMWraper>
  )
}

export default LLMBotComponent
