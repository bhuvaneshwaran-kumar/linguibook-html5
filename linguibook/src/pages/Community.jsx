import React, { useRef } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const CommunityOuter = styled.div`
  width: 100vw;
  height: calc(100vh - 7vh);
  display: flex;
  align-items: center;
  justify-content: center;
  & .active-clr {
    color: #5c41e1;
  }
  & .comm-head{
    background: #577cea;
    color: white;
    padding: 5px;
  }
`
const CommunityInner = styled.div`
  height: 95%;
  width: 90%;
  max-width: 900px;
  border-radius: 6px;
  display: flex;
  gap: 4px;
`

const CommunityInnerLeft = styled.div`
  box-shadow: 0 0 4px #5151ac7f;
  height: 100%;
  width: 30%;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  & > .top{
    height: 50%;
  }
  & .list {
    height: 37vh;
    overflow-y: scroll;
    & > p {
        padding: 4px 2px;
        cursor: pointer;
        &:hover, &.active {
          background-color: #5151ac;
          color: white;
        }
    }
  }
`
const CommunityInnerRight = styled.div`
  box-shadow: 0 0 4px #5151ac7f;
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  & > header {
    padding: 7px 5px;
  background: #66b0dc;
  }
  & > .post {
    & > .header {
      width: 90%;
      margin: auto;
      padding: 4px;
      background: #c4e0f9;
      border-radius: 4px;
      font-weight: bold;
    }
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-around;
    & > .content {
      width: 90%;
      margin: auto;
      white-space: pre-wrap;
    }
  }
`

const educationCommunities = [
  "LearnHub",
  "STEM Squad",
  "Language Lab",
  "Tech Titans",
  "WriteWave",
  "MathMinds",
  "SciFi Club",
  "LitChat",
  "History Hive",
  "ArtZone",
  "EdConnect",
];

const exploreCommunities = [
  "BrainBox",
  "StudyCrew",
  "Academy Alley",
  "SkillSwap",
  "GeniusGuild",
  "BookBuds",
  "TeachTribe",
  "LearnLinx",
  "MasteryMingle"
]


function Community(props) {
  console.log(props.userDet.toJS());
  return (
    <CommunityOuter>
      <CommunityInner>
        <CommunityInnerLeft>
          <div className="top">
            <h3 className='comm-head'>Your Community</h3>
            <div className="list">
              {
                educationCommunities.map((community, index) => (
                  <p className={`${index === 3 ? "active" : ""}`}>{community}</p>
                ))
              }
            </div>
          </div>
          <div className="bottom">
            <h3 className='comm-head'>Explore Community</h3>
            <div className="list">
              {
                exploreCommunities.map((community) => (
                  <p>{community}</p>
                ))
              }
            </div>
          </div>
        </CommunityInnerLeft>
        <CommunityInnerRight>
          <div className="header">
            <p>You're in <span className='active-clr'>Tech Titans</span> Community</p>
          </div>
          <div className='post'>
              <div className="header">
                <p>React 18 functionalities</p>  
              </div>
            <pre className="content">
              1. React Hooks: Introduced in React 16.8, hooks allow functional components to use state, lifecycle methods, and other React features without writing a class. This simplifies component logic and promotes code reuse. <br />
              2. React Suspense: Suspense is a feature that enables React components to wait for something (like data fetching) before rendering. It improves user experience by providing better control over loading states and enabling smoother transitions. <br />
              3. React.lazy(): This function allows for dynamic code splitting by enabling lazy loading of components. It's particularly useful for optimizing bundle size and improving initial load times for large applications. <br />
              4. Concurrent Mode: Still experimental as of now, Concurrent Mode is a set of features in React that aims to improve the responsiveness and performance of applications by allowing React to pause, resume, or prioritize rendering updates based on their priority. <br />
              5. React.memo(): Similar to React's PureComponent, React.memo() is a higher-order component that memoizes the result of a functional component rendering. It's used to optimize performance by preventing unnecessary re-renders of functional components.
              </pre>
          </div>
        </CommunityInnerRight>
      </CommunityInner>
    </CommunityOuter>
  )
}

const mapStateToProps = (state, ownProps) => ({
  userDet: state.localStorage.get("user"),
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Community)