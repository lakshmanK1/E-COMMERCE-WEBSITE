import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderLinks = styled.div``;

const AnchorLink = styled.p`color: white;
cursor: pointer; margin-right: 2rem; display:inline; text-decoration:none;`;



function NavBar() {

  return (

            <HeaderLinks>
                <Link to='/'><AnchorLink>HOME</AnchorLink></Link>
                <Link to='/dynamicStore.html'><AnchorLink>STORE</AnchorLink></Link>
                <Link to='/about.html'><AnchorLink>ABOUT</AnchorLink></Link>
            </HeaderLinks>
  );
          
}

export default NavBar