import React, { useRef } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const ProfileOuter = styled.div`
  width: 100vw;
  height: calc(100vh - 7vh);
  display: flex;
  align-items: center;
  justify-content: center;
  & .active-clr {
    color: #5c41e1;
  }
`
const ProfileInner = styled.div`
  height: 90%;
  width: 90%;
  max-width: 600px;
  border-radius: 6px;
  display: flex;
  gap: 4px;
`

const ProfileInnerLeft = styled.div`
  box-shadow: 0 0 4px #5151ac7f;
  height: 100%;
  width: 40%;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  & > .main-img {
    & > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  & > .img-option {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    & > img {
      width: 100px;
      height: 100px;
      object-fit: contain;
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
      cursor: pointer;
    }
    height: 100%;
    overflow-x: scroll;
  }
`
const ProfileInnerRight = styled.div`
  box-shadow: 0 0 4px #5151ac7f;
  height: 100%;
  width: 60%;
  border-radius: 6px;
  & > h1 {
    text-align: center;
  }
  & > .bioEditor{
    width: 90%;
    margin: auto;
    box-shadow: 0 0 4px #5151ac7f;
    border-radius: 6px;
    margin-top: 30%;
    padding: 5px;
    & > .edit-elm {
      min-height: 200px;
      max-height: 50vh;
      margin-top: 6px;
    }
  }
`

const profileImgs = Array.from({ length: 13 }, (_, index) => `${index + 1}.png`);

function Profile(props) {
  const bioEditRef = useRef(null);
  console.log(props.userDet.toJS());
  return (
    <ProfileOuter>
      <ProfileInner>
        <ProfileInnerLeft>
          <div className="main-img">
            <img src={`/images/profile/${props.userDet.get("profileUrl")}`} alt="main-profile" />
          </div>
          <div className="img-option">
            <p>Change Your <span className='active-clr'>Profile Picture</span></p>
            {
              profileImgs.map(imgSrc => <img src={`/images/profile/${imgSrc}`} alt="option=prfile" />)
            }
          </div>
        </ProfileInnerLeft>
        <ProfileInnerRight>
          <h1>Hello <span className='active-clr'>{props.userDet.get("name")}</span> </h1>
          <div className="bioEditor">
            <p>Bio :</p>
            <div className='edit-elm' ref={bioEditRef}>
                    Hey there! I'm Max, a web developer passionate about crafting dynamic and engaging web applications. With a keen eye for design and a knack for problem-solving, I thrive on bringing ideas to life in the digital realm.
            </div>
          </div>
        </ProfileInnerRight>
      </ProfileInner>
    </ProfileOuter>
  )
}

const mapStateToProps = (state, ownProps) => ({
  userDet: state.localStorage.get("user"),
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

