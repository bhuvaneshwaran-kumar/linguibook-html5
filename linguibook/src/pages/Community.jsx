import React, { useReducer, useRef, useState } from 'react'
import ReactQuill from 'react-quill'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { changeCommunity, createCommunity } from '../thunk/community'
import { CenterLoader } from '../components/VocabularyComponent'
import { Image } from '../styles/style'
import { setActiveCommunity } from '../actions'

const CommunityOuter = styled.div`
  width: 100vw;
  height: calc(100vh - 7vh);
  display: flex;
  align-items: center;
  justify-content: center;
  & .active-clr {
    font-weight: bold;
    color: white;
  }
  & .comm-head{
    background: #5151ac;
    color: white;
    border-radius: 6px 6px 0px 0px;
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
  position: relative;
`

const CommunityInnerLeft = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  & > .top, & > .bottom, & > .crt-cum{
    height: 45%;
    border-radius: 6px;
    box-shadow: 0 0 4px #5151ac7f;
  }
  & > .crt-cum {
    height: 6%;
    background: #5151ac;
    display: flex;
    user-select: none;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: white;
  }
  & .list {
    height: 33vh;
    overflow-y: scroll;
    & > p {
        padding: 4px 2px;
        cursor: pointer;
        &:hover, &.active {
          background-color: #6e6ea7;
          color: white;
        }
        &.active {
          background-color: #577cea;
          & > img {
            box-shadow: 0 0 4px #53ac517e;
          }
        }
        font-size: small;
        display: flex;
        align-items: center;
        gap: 7px;

        & > img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          box-shadow: 0 0 4px #5151ac7f;
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
  & > .header {
    padding: 7px 5px;
    background: #5151ac;
    border-radius: 6px 6px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > .cr-pt {
      padding: 6px 10px;
      border-radius: 6px;
      box-shadow: 0 0 4px #5151ac7f;
      background: #577cea;
      display: flex;
      user-select: none;
      cursor: pointer;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      color: white;
      &.disabled {
        opacity: 0.7;
        cursor: not-allowed;
        pointer-events: none;
      }
    }
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
    overflow-y: scroll;
    padding-bottom: 5px;
    & > .content {
      width: 90%;
      margin: auto;
      white-space: pre-wrap;
    }
  }
`
const FormOuter = styled.div`
    display: flex;
    flex-direction: column;
    & > .row {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 10px;
      padding: 10px 0px;
      &.mid{
        border-bottom: 1px solid #5151ac7f;
        border-top: 1px solid #5151ac7f;
      }
      & > .lf {
        width: 200px;
        font-weight: bold;
        &.cum-name {
          display: flex;
          justify-content: flex-end;
        }
      }
      & > .rt {
        &.cum-value {
          flex: 1;
          & > input {
            width: 80%;
          }
        }
        & .ql-container{
          min-height: 150px;
          max-height: 150px;
          overflow-x: hidden;
          overflow-y: scroll;
        }
      }
    }
    & > .row > .lf.prof{
      display: flex;
      & > .active-img{
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 200px;
        gap: 5px;
        & > p {
          font-weight: bold;
        }
        & > img {
          width: 150px;
        }
      }

    }
    & > .row > .rt > .imgs-lst {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      & > img {
        padding: 10px;
        border-radius: 6px;
        border: 2px solid #5151ac7f;
        width: 60px;
        height: 60px;
        cursor: pointer;
        &:hover {
          border: 2px solid #ffd5007d;

        }
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

const toolbarOptions = [['bold', 'italic', 'underline', { 'color': [] }, { 'background': [] }]]
const modules = { module: { toolbar: toolbarOptions } }



const profileImgs = Array.from({ length: 12 }, (_, index) => `${index + 1}.png`);
const CommunityForm = (props) => {
  const [communityInfo, setCommunityInfo] = useState({ profileUrl: profileImgs[0], name: "", description: "" })
  const [errMsg, setErrMsg] = useState("")
  const handleNameChange = (name) => {
    setErrMsg("")
    setCommunityInfo((prevState) => ({ ...prevState, name }))
  }

  const handleProfileChange = (profileUrl) => {
    setCommunityInfo((prevState) => ({ ...prevState, profileUrl }))
  }

  const handleDescChange = (description) => {
    setCommunityInfo((prevState) => ({ ...prevState, description }))
  }

  const handleCreateCommunity = async () => { 
    const result = await props.createCommunity({ ...communityInfo, 
      adminId: props.userDet.get("_id"),
      adminName: props.userDet.get("name"),
      adminProfileUrl: props.userDet.get("profileUrl"),
     })

    if (!result.error) { 
      setCommunityInfo({ profileUrl: profileImgs[0], name: "", description: "" })
      setErrMsg("")
    } else { 
      setErrMsg(result.message)
    }
  }

  const preventCreate = communityInfo.name.trim() === "" || communityInfo.description.trim() === ""

  return (
    <>
      <div className="header">
        <p onClick={() => props.setRightView(RIGHT_VIEWS.communityPost)} className={`cr-pt`} tabIndex={1}>Go Prev</p>
        <p>create and organise your <span className='active-clr'>Community</span></p>
        <p onClick={handleCreateCommunity} className={`cr-pt ${preventCreate && "disabled"}`} tabIndex={1}>Create Community</p>
      </div>
      <div className='post'>
        <FormOuter className="form">
          <div className="row">
            <div className="lf prof">
              <div className='active-img'>
                <p>Community Icon</p>
                <img src={`/images/community/${communityInfo.profileUrl}`} alt="" />
              </div>
            </div>
            <div className="rt">
              <div className="imgs-lst">
                {
                  profileImgs.map((img) => <img src={`/images/community/${img}`} onClick={() => handleProfileChange(img)} />)
                }
              </div>
            </div>
          </div>
          <div className="row mid">
            <div className="lf cum-name">
              <p>Community Name :</p>
            </div>
            <div className="rt cum-value">
              <input type="text" value={communityInfo.name} max={60} onInput={(e) => handleNameChange(e.target.value)} />
            </div>
            <span style={{ color: "red", fontSize: "small", padding: "0px 10px" }}>{errMsg}</span>
          </div>
          <div className="row">
            <div className="lf cum-name">
              <p>Community Description :</p>
            </div>
            <div className="rt cum-value">
              <ReactQuill modules={modules?.module} theme="snow" value={communityInfo.description} onChange={(content) => handleDescChange(content)} placeholder='Describe your Community' />
            </div>
          </div>
        </FormOuter>
      </div>
    </>
  )
}

const CommunityPost = (props) => {
  return (
    <>
      <div className="header">
        <p>You're in <span className='active-clr'>Tech Titans</span> Community</p>
        <p className='cr-pt' tabIndex={1}>Create Post</p>
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
    </>
  )
}

const RIGHT_VIEWS = {
  createCommunity: 0,
  viewCommunity: 1,
  communityPost: 2
}

function Community(props) {
  const [rightView, setRightView] = useState(RIGHT_VIEWS.communityPost)

  const handleCommunityChanges = (id, type = "userCommunites") => { 
    if (id !== props.activeCommunity.get("id"))
      props.changeCommunity({ id, type })

    let view = type === "userCommunites" ? RIGHT_VIEWS.communityPost : RIGHT_VIEWS.viewCommunity;
    if (rightView !== view) { 
      setRightView(view);
    }
  }

  return (
    <CommunityOuter>
      <CommunityInner>
        {
          props.isCommunityLoading ? <CenterLoader><Image src="/images/spinner.gif" /></CenterLoader> : null
        }
        <CommunityInnerLeft>
          <div className="top">
            <h3 className='comm-head'>Your Community</h3>
            <div className="list">
              {
                props.userCommunites.entrySeq().map(([key, value], index) => (
                  <p onClick={() => handleCommunityChanges(key)} className={`${key === props.activeCommunity.get("id") ? "active" : ""}`}>
                    <img src={`images/community/${value.get("profileUrl")}`} />
                    {value.get("name")}
                  </p>
                ))
              }
            </div>
          </div>
          <div className="bottom">
            <h3 className='comm-head'>Explore Community</h3>
            <div className="list">
              {
                props.otherCommunites.entrySeq().map(([key, value], index) => (
                  <p onClick={() => handleCommunityChanges(key, "otherCommunites")} className={`${key === props.activeCommunity.get("id") ? "active" : ""}`}>
                    <img src={`images/community/${value.get("profileUrl")}`} />
                    {value.get("name")}
                  </p>
                ))
              }
            </div>
          </div>
          <div className='crt-cum' onClick={()=>setRightView(RIGHT_VIEWS.createCommunity)}>
            Create Community
          </div>
        </CommunityInnerLeft>
        <CommunityInnerRight>
          {
          rightView === RIGHT_VIEWS.communityPost && (
              <CommunityPost />
          ) 
          }
          {
            rightView === RIGHT_VIEWS.createCommunity && (
              <CommunityForm createCommunity={props.createCommunity} userDet={props.userDet} setRightView={setRightView} />
            )
          }
        </CommunityInnerRight>
      </CommunityInner>
    </CommunityOuter>
  )
}

const mapStateToProps = (state, ownProps) => ({
  userDet: state.localStorage.get("user"),
  isCommunityLoading: state.communityStorage.getIn(["communityLoadStatus", "isLoading"]),
  activeCommunity:  state.communityStorage.get("activeCommunity"),
  userCommunites:  state.communityStorage.get("userCommunites"),
  otherCommunites: state.communityStorage.get("otherCommunites"),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  createCommunity: (payload) => dispatch(createCommunity(payload)),
  changeCommunity: (payload) => dispatch(changeCommunity(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Community)