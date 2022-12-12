import React from 'react'
import styled from 'styled-components'
import HeadingBanner from '../Home/HeadingBanner';
import SignUp from './SignUp';

const Header = styled.div`display: flex; padding: 25px;
justify-content: center; position: fixed; background-color:black;
top: 0%; width: 100%; `;
const Notice = styled.div`margin-top:60px;`;

function SignUpPage() {
  return (
    <div >
      <Header></Header>
      <Notice>
      <HeadingBanner text="To use our services, please Sign up and Login.."/>
      </Notice>
      
      <SignUp/>
    </div>
  )
}

export default SignUpPage