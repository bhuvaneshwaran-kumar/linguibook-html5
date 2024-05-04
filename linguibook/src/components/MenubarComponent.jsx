import { connect } from "react-redux"
import { NavBar, NavLeft, NavListItem, NavLogo, NavRight, StyledLink } from "../styles/style";
import { useLocation } from "react-router-dom";
import { handleLogOut } from "../thunk/auth";

function MenubarComponent(props) {
    const location = useLocation();
    const { isAuthenticated, dispatchLogOut } = props

    const handleLogOut = async () => { 
        await dispatchLogOut();
    }

    return (
        <NavBar>
            <NavLeft>
                <NavLogo>LinguiBook</NavLogo>
                {
                    isAuthenticated && (
                        <>
                            <NavListItem className={location.pathname === "/" && "active"}>
                                <StyledLink to="/">Home</StyledLink>
                            </NavListItem>
                            <NavListItem className={location.pathname === "/community" && "active"}>
                                <StyledLink to="/community">Community</StyledLink>
                            </NavListItem>
                        </>
                    )
                }
                <NavListItem className={location.pathname === "/about" && "active"}>
                    <StyledLink to="/about">About</StyledLink>
                </NavListItem>
            </NavLeft>
            <NavRight>
                {
                    !isAuthenticated ? (
                        <>
                            <NavListItem className={location.pathname === "/auth/:login" && "active"}>
                                <StyledLink to="/auth/:login">Log in</StyledLink>
                            </NavListItem>
                            <NavListItem className={location.pathname === "/auth/:signup" && "active"}>
                                <StyledLink to="/auth/:signup">Sign up</StyledLink>
                            </NavListItem>
                        </>
                    ) : (
                            <>
                                <NavListItem className={"active"}>
                                    <StyledLink>{props.userDet.get("name")}</StyledLink>
                                </NavListItem>
                                <NavListItem className={location.pathname === "/profile" && "active"}>
                                    <StyledLink to="/profile">Profile</StyledLink>
                                </NavListItem>
                                <NavListItem onClick={handleLogOut}>
                                    Log Out
                                </NavListItem>
                            </>
                        )
                }

            </NavRight>
        </NavBar>
    )
}

const mapStateToProps = (state) => ({
    userDet: state.localStorage.get('user'),
    isAuthenticated: state.localStorage.getIn(["auth", "isLogged"])
});

const mapDispatchToProps = (dispatch, ownProps) => { 
    return {
        dispatchLogOut: () => dispatch(handleLogOut())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenubarComponent) 