import React from 'react'
import styled from 'styled-components'
import HeadingBanner from '../Home/HeadingBanner';
import LogIn from './LogIn'
const Header = styled.div`display: flex; padding: 25px;
justify-content: center; position: fixed; background-color:black;
top: 0%; width: 100%; `;
const Notice = styled.div`margin-top:60px;`;
function LogInPage() {
  return (
    <div >
      <Header></Header>
      <Notice>
      <HeadingBanner text="To use our services, please Login.."/>
      </Notice>
      
      <LogIn/>
    </div>
  )
}

export default LogInPage