import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../Store/AuthContext';

const HeaderLinks = styled.div``;

const AnchorLink = styled.p`color: white;
cursor: pointer; margin-right: 2rem; display:inline; text-decoration:none;`;

function NavBar() {
  const{ AuthContextValues:{isLoggedIn, LogOut}} = useContext(AuthContext);

  const handleLogOut = () => {
    LogOut();
  }

  return (

            <HeaderLinks>
                <Link to='/' style={{textDecoration:'none'}}><AnchorLink>HOME</AnchorLink></Link>
                {isLoggedIn ? <Link to='/dynamicStore.html' style={{textDecoration:'none'}}><AnchorLink>STORE</AnchorLink></Link> 
                :<Link to='/signup&login' style={{textDecoration:'none'}}><AnchorLink>STORE</AnchorLink></Link> }
                <Link to='/about.html' style={{textDecoration:'none'}}><AnchorLink>ABOUT</AnchorLink></Link>
                <Link to='/contactUs.html' style={{textDecoration:'none'}}><AnchorLink>CONTACT US</AnchorLink></Link>
                {!isLoggedIn && <Link to='/signup&login' style={{textDecoration:'none'}}><AnchorLink>LOGIN</AnchorLink></Link>}
                {isLoggedIn && <Link to='/' style={{textDecoration:'none'}}><AnchorLink onClick={handleLogOut}>LOGOUT</AnchorLink></Link>}
            </HeaderLinks>
  );
          
}

export default NavBar