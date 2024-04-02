import React from 'react'
import styled from 'styled-components';

const ContextWraper = styled.div`
    width: 25vw;
    height: 100%;
    box-shadow: 0 0 4px #5151ac7f;
    border-radius: 5px;
    overflow: hidden;
    padding: 2px 4px;
`

const ContextListWrap = styled.div`
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    & p {
        padding: 2px;
        border: 2px solid #5151ac7f;
        border-radius: 3px;
        cursor: pointer;
        &:hover, &.active, &:focus {
            border: 2px solid #5151ac;
        }
    }
`


function ContextComponent(props) {
    const { activeContextId, contextMapData } = props;

    const contextList = [];
    if (contextMapData.size) { 
        contextMapData.forEach((data, key) => contextList.push(<p className={`${key === activeContextId && "active"}`}>{data.value}</p>))

    }

    return (
        <ContextWraper>
            <ContextListWrap className='slbr-cus'>
                {contextList}
            </ContextListWrap>
        </ContextWraper>
    )
}

export default ContextComponent
