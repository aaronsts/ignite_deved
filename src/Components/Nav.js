import React from 'react'
// animations
import styled from 'styled-components';
import {motion} from 'framer-motion';
import logo from '../img/logo.svg';

// Redux
import {fetchSearch} from '../actions/gamesAction';
import {useDispatch} from 'react-redux';

const Nav = () => {
    const dispatch = useDispatch();
    const submitSearch = () => {
        dispatch(fetchSearch(textInput));
    }
    return (
        <StyledNav>
            <StyledLogo>
                <img src={logo} alt='logo'></img>
                <h1>Ignite</h1>
            </StyledLogo>
            <form className="search">
                <input type="text"/>
                <button type="submit" >Search</button>
            </form>
        </StyledNav>
    )
}

const StyledNav = styled(motion.nav)`
    padding: 3rem 4rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    input{
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
        outline: none;
    }
    button{
        font-size: 1.5rem;
        border: none;
        padding: .5rem 2rem;
        margin: 1rem;
        cursor: pointer;
        background: #ff7676;
        color: white;
        &:hover{
            background: white;
            color: #ff7676;
            outline: .2rem solid #ff7676; 
        }
    }
`
const StyledLogo = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
    img{
        height: 2rem;
        width: 2rem;
    }
`


export default Nav
