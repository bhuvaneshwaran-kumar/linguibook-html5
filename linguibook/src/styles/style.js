import { Link } from "react-router-dom";
import { styled } from "styled-components"

export const WindowDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Image = styled.img`
  width: ${props => props.width || '30vw'};
  height: ${props => props.height || '30vw'};
`;


export const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 10px 5px 0px;
    background: #5151ac;
    color: white;
    user-select: none;
    height: 5vh;
`

export const NavLeft = styled.div`
    display: flex;
    gap: 2px;
`

export const NavLogo = styled.div`
    padding: 4px 5px;
    border-radius: 4px;
`

export const NavListItem = styled(NavLogo)`
    cursor: pointer;
    &:hover, &.active, &:focus {
        background: #ffffff24;
    }
`

export const StyledLink = styled(Link)`
    &, &:hover, &:focus {
        color: ${props => props.color || 'white'};
        text-decoration: none;
    }
`

export const NavRight = styled(NavLeft)``