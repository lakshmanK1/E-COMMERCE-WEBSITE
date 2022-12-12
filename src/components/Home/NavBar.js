import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux'
import { AuthActions } from '../Store/AuthSlice';

const HeaderLinks = styled.div``;

const AnchorLink = styled.p`color: white;
cursor: pointer; margin-right: 2rem; display:inline; text-decoration:none;`;

function NavBar() {
  const isLogged = useSelector(state => state.Auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(AuthActions.LogOut());
  }

  return (

            <HeaderLinks>
                <Link to='/' style={{textDecoration:'none'}}><AnchorLink>HOME</AnchorLink></Link>
                {isLogged ? <Link to='/dynamicStore.html' style={{textDecoration:'none'}}><AnchorLink>STORE</AnchorLink></Link> 
                :<Link to='/login' style={{textDecoration:'none'}}><AnchorLink>STORE</AnchorLink></Link> }
                <Link to='/about.html' style={{textDecoration:'none'}}><AnchorLink>ABOUT</AnchorLink></Link>
                <Link to='/contactUs.html' style={{textDecoration:'none'}}><AnchorLink>CONTACT US</AnchorLink></Link>
                {!isLogged && <Link to='/login' style={{textDecoration:'none'}}><AnchorLink>LOGIN</AnchorLink></Link>}
                {isLogged && <Link to='/' style={{textDecoration:'none'}}><AnchorLink onClick={handleLogOut}>LOGOUT</AnchorLink></Link>}
            </HeaderLinks>
  );
          
}

export default NavBar