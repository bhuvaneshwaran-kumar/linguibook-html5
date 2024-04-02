import React from 'react'
import { connect } from "react-redux"
import ContextComponent from '../components/ContextComponent'
import styled from 'styled-components';

const HomeWrapper = styled.div`
  height: calc(100vh - 7vh);
  padding: 5px;
`


function Home(props) {
  const { activeContextId, contextMapData } = props;
  return (
    <HomeWrapper>
      <ContextComponent activeContextId={activeContextId} contextMapData={contextMapData} />
    </HomeWrapper>
  )
}


const mapStateToProps = (state) => ({
  activeContextId: state.vocabulariesStorage.getIn(["context", "id"]),
  contextMapData: state.vocabulariesStorage.getIn(["context", "data"]),
});

export default connect(mapStateToProps)(Home)