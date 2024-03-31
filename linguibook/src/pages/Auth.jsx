import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components";
import { handleLogin, handleSignUp } from "../thunk/auth";

const AuthWrapper = styled.div`
    width: 400px;
    height: 60vh;
    margin: auto;
    margin-top: 20vh;
    border-radius: 5px;
    overflow: hidden;
    user-select: none;
    border: 3px solid #5151ac;
    & > div.auth-header {
        display: flex;
        height: 10%;
        border-bottom: 3px solid #5151ac;
        & > div {
            display: flex;
            width: 50%;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            background: #5151ac;
            transition: all 200ms;
            &.active, &:hover, &:focus {
               color: white;
               background :#8484ef;
            }
        }
    }
    & > div.auth-body {
        display: flex;
        flex-direction: column;
        margin: 15px;
        gap: 15px;
        & > div.field {
            display: flex;
            align-items: center;
            & > div.auth-submit {
                width: 50%;
                margin: auto;
                text-align: center;
                padding: 5px 0px;
                background: #5151ac;
                cursor: pointer;
                color: white;
                &:hover, &:focus {
                    background :#8484ef;
                }
                border-radius: 5px;
            }
            & > input {
                width: 60%;
                margin-left: auto;
                padding: 5px;
            }
            &.msg {
                background: antiquewhite;
                font-size: 12px;
                flex-direction: column;
                align-items: flex-start;
                padding: 3px;
                border-radius: 3px;
                & > p {
                    font-weight: bold;
                }
                & > ul {
                    margin-left: 15px;
                }
            }
            &.warn-msg {
                color: green;
                &.error {
                    color: red;
                }
            }
        }
    }
`

const PAGE = {
    SIGN_UP: {
        value: ":signup",
        warn: [
            <li key={'warn-1'}>password should be min of 8 chars</li>,
            <li key={'warn-2'}>password should have special chars [@,#,$,%,^,&,*]</li>,
            <li key={'warn-3'}>user name should be min of 8 chars</li>,
            <li key={'warn-4'}>user name should be unique</li>,
            <li key={'warn-5'}>user name should have special chars [@,#,$,%,^,&,*]</li>,
            <li key={'warn-6'}>both field is required</li>
        ],
        submit: "Sign up"
    },
    LOG_IN: {
        value: ":login",
        warn: [
            <li key={'warn-7'}>make sure you have account.</li>,
            <li key={'warn-8'}>user name and password should match</li>,
            <li key={'warn-9'}>both field is required</li>
        ],
        submit: "Log in"

    }
};

export function Auth() {
    const { pageDet } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userNameRef = useRef(null);
    const passwordRef = useRef(null);
    const [message, setMessage] = useState({ error: false, data: "" })

    const handleTabSwitch = (tab) => {
        navigate(`/auth/${tab}`, { replace: true });
    }

    const handleSubmit = async () => { 
        const userName = userNameRef.current.value;
        const password = passwordRef.current.value;

        if (!userName.trim().length || !password.trim().length) { 
           return setMessage({ error: true, data: "user name and password can't be empty." })
        }

        if (pageDet === PAGE.SIGN_UP.value) {
            const result = await dispatch(handleSignUp(userName, password));
            console.log(result, "result");
            if (result) { 
                setMessage({ error: false, data: "Account created successfully!." })
                navigate(`/auth/${PAGE.LOG_IN.value}`, { replace: true });
                passwordRef.current.value = "";
            } else { 
                setMessage({ error: true, data: "User name already exit." })
            }
        } else { 
            const result = await dispatch(handleLogin(userName, password));
            console.log(result,"result");
            if (result) { 
                setMessage({ error: false, data: "logged in successfully.!" });
                navigate(`/`, { replace: true });
            } else { 
                setMessage({ error: true, data: "username and password dose'nt match" });
            }
        }
    }

    let warnMessage = PAGE.LOG_IN.warn, submitText = PAGE.LOG_IN.submit, isLogIn = true;
    if (pageDet === PAGE.SIGN_UP.value) {
        warnMessage = PAGE.SIGN_UP.warn;
        submitText = PAGE.SIGN_UP.submit;
        isLogIn = false;
    }

    return (
        <AuthWrapper>
            <div className="auth-header">
                <div onClick={() => handleTabSwitch(PAGE.LOG_IN.value)} className={`${isLogIn && "active"}`}>Log In</div>
                <div onClick={() => handleTabSwitch(PAGE.SIGN_UP.value)} className={`${!isLogIn && "active"}`}>Sign Up</div>
            </div>
            <div className="auth-body">
                <div className="field">
                    <p>User Name :</p>
                    <input ref={userNameRef} placeholder="Enter your User Name" type="text" />
                </div>
                <div className="field">
                    <p>Password :</p>
                    <input ref={passwordRef} placeholder="Enter your Password" type="password" />
                </div>
                <div className="field">
                    <div className="auth-submit" onClick={handleSubmit}>{submitText}</div>
                </div>
                <div className="field msg">
                    <p>Note!.</p>
                    <ul>
                        {warnMessage}
                    </ul>
                </div>
                {
                    message.data !== "" && (
                        <div className={`field warn-msg ${message.error && "error"}`}>
                            {message.data}
                        </div>
                    )
                }

            </div>
        </AuthWrapper>
    )
}