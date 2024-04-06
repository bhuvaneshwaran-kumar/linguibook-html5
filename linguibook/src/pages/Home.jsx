import React from 'react'
import { connect } from "react-redux"
import ContextComponent from '../components/ContextComponent'
import styled from 'styled-components';
import VocabularyComponent from '../components/VocabularyComponent';
import LLMBotComponent from '../components/LLMBotComponent';

const HomeWrapper = styled.div`
  height: calc(100vh - 7vh);
  padding: 5px;
  display: flex;
  gap: 5px;
`


function Home(props) {
  const { activeContextId, contextMapData, vocabularies } = props;
  return (
    <HomeWrapper>
      <ContextComponent activeContextId={activeContextId} contextMapData={contextMapData} />
      <VocabularyComponent vocabularies={vocabularies} activeContextId={activeContextId} />
      <LLMBotComponent />
    </HomeWrapper>
  )
}


const mapStateToProps = (state) => ({
  activeContextId: state.vocabulariesStorage.getIn(["context", "id"]),
  contextMapData: state.vocabulariesStorage.getIn(["context", "data"]),
  vocabularies: state.vocabulariesStorage.get('vocabularies'),
});

export default connect(mapStateToProps)(Home)