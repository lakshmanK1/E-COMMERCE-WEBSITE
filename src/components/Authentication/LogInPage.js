import React from 'react'
import styled from 'styled-components'
import LogIn from './LogIn'
const Header = styled.div`display: flex; padding: 25px;
 justify-content: center;
position: fixed; background-color:black;
top: 0%; width: 100%; z-index: 1;`;
function LogInPage() {
  return (
    <div >
      <Header></Header>
      
      <LogIn/>
      
      
    </div>
  )
}

export default LogInPage