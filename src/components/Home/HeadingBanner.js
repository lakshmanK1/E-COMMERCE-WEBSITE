import React from 'react'
import styled from 'styled-components'

const Container = styled.div`border: 2px solid grey;
margin: 8px 6px;`;
const Text  = styled.h1`font-family: "Metal Mania";
text-align: center;
padding: 10px;
font-size: 30px;`;
function HeadingBanner(props) {
  return (
    <Container>
        <Text>{props.text}</Text>
    </Container>
  )
}

export default HeadingBanner