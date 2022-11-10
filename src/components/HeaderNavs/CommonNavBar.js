import React from 'react'
import styled from 'styled-components'
import NavBar from '../Home/NavBar'

const Container = styled.div`display: flex; padding: 25px;font-family: sans-serif;
font-size: 15px; font-weight: 200; justify-content: center;
position: fixed; background-color:black;
top: 0%; width: 100%; z-index: 1;`;

function CommonNavBar() {
  return (
    <Container>
        <NavBar/>
    </Container>
  )
}

export default CommonNavBar