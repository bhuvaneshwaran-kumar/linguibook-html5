import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { loadCtxtVocData } from '../thunk/ctxtVoc';
import { Image } from '../styles/style';

const ContextWraper = styled.div`
    width: 30vw;
    height: 100%;
    box-shadow: 0 0 4px #5151ac7f;
    border-radius: 5px;
    overflow: hidden;
    padding: 2px 4px;
    display: flex;
    flex-direction: column;
`

const ContextListWrap = styled.div`
    height: 78%;
    overflow-y: scroll;
    scroll-behavior: smooth;
    padding: 4px;
    & div.ctxt-wrap {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        & div.context-data {
            height: 30px;
            padding: 1px 4px;
            border: 2px solid #5151ac7f;
            border-radius: 3px;
            cursor: pointer;
            &:hover, &.active, &:focus {
                border: 2px solid #5151ac;
            }
        }
        & .warn-msg{
            width: 100%;
            text-align: center;
        }
    }

`

const ContextFilterWrap = styled.div`
    height: 22%;
    padding: 4px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    & .row {
        display: flex;
        align-items: center;
        height: 30px;
        &.input { 
            border: 1px solid #5151ac;
            border-radius: 4px;
            padding: 0px 4px;
        }
        & input {
            flex: 1;
        }
        & img {
            cursor: pointer;
        }
        & input, & input:focus {
            border: none;
            outline: none;
        }
    }
    & .title {
            background: #5151ac;
            color: #fff;
            padding: 4px;
            border-radius: 4px;
        }

`


function ContextComponent(props) {
    const { activeContextId, contextMapData } = props;

    const dispatch = useDispatch()
    const [filter, setFilter] = useState("");

    const handleContextChange = (contextId) => {
        if (contextId === activeContextId || props.isVocLoading || props.isVocChunkLoad) {
            return
        }
        dispatch(loadCtxtVocData(contextId));
    }

    const filterChange = (e) => { 
        const { target } = e;
        setFilter(target.value);
    }

    const formatFilter = (value) => { 
        let filterVal = filter.trim();
        const startIndex = value.indexOf(filterVal);
        const endIndex = startIndex + filterVal.length;
        const highLightTxt = value.substring(startIndex, endIndex);
        const leftStr = value.substring(0, startIndex);
        const rightStr = value.substring(endIndex, value.length);
        return <p>{leftStr}<span style={{background: "#8888de"}}>{highLightTxt}</span>{rightStr}</p>
    }

    const contextList = [];
    if (contextMapData.size) { 
        contextMapData.forEach((data, key) => {
            if (filter.trim()) { 
                if (data.get("value").includes(filter.trim())) { 
                    contextList.push(<div key={key} onClick={() => handleContextChange(key)} className={`context-data ${key === activeContextId && "active"}`}>{formatFilter(data.get("value"))}</div>);
                }
            } else { 
                contextList.push(<div key={key} onClick={() => handleContextChange(key)} className={`context-data ${key === activeContextId && "active"}`}>{data.get("value")}</div>);
            }
        })
        if (!contextList.length) { 
            contextList.push(<p className='warn-msg'>No Context available!</p>)
        }
    }

    return (
        <ContextWraper>
            <ContextFilterWrap>
                <div className='row title'>
                    <p>{contextMapData.getIn([activeContextId, "value"])}</p>
                </div>
                <div className='row input'>
                    <input type="text" placeholder={"Search Vocabularies"} />
                    <Image src='/images/search.svg' width={"24px"} height={"24px"} />
                </div>
                <div className='row input'>
                    <input value={filter} type="text" placeholder={"Filter Contexts"} onChange={filterChange}/>
                    <Image src={filter.trim() !== '' ? '/images/filter-cancel.svg' : '/images/filter.svg'} width={"24px"} height={"24px"} onClick={() => setFilter("")} />
                </div>
            </ContextFilterWrap>
            <ContextListWrap className='slbr-cus'>
                <div className='ctxt-wrap'>
                    {contextList}
                </div>
            </ContextListWrap>
        </ContextWraper>
    )
}

const mapStateToProps = (state, ownProps) => ({
    isVocChunkLoad: state.localStorage.get("isVocChunkLoad"),
    isVocLoading: state.localStorage.get("isVocLoading"),
  })
  
  const mapDispatchToProps = (dispatch, ownProps) => ({
    loadVocData: (payLoad) => dispatch(loadVocData(payLoad)),
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(ContextComponent)

