import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../Store/AuthContext';

const HeaderLinks = styled.div``;

const AnchorLink = styled.p`color: white;
cursor: pointer; margin-right: 2rem; display:inline; text-decoration:none;`;

function NavBar() {
  const {isLoggedIn, LogOut} = useContext(AuthContext);

  const handleLogOut = () => {
    LogOut();
  }

  return (

            <HeaderLinks>
                <Link to='/'><AnchorLink>HOME</AnchorLink></Link>
                {isLoggedIn ? <Link to='/dynamicStore.html'><AnchorLink>STORE</AnchorLink></Link> 
                :<Link to='/signup&login'><AnchorLink>STORE</AnchorLink></Link> }
                <Link to='/about.html'><AnchorLink>ABOUT</AnchorLink></Link>
                <Link to='/contactUs.html'><AnchorLink>CONTACT US</AnchorLink></Link>
                {!isLoggedIn && <Link to='/signup&login'><AnchorLink>LOGIN</AnchorLink></Link>}
                {isLoggedIn && <Link to='/'><AnchorLink onClick={handleLogOut}>LOGOUT</AnchorLink></Link>}
            </HeaderLinks>
  );
          
}

export default NavBar