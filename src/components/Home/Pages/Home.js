import React from 'react'
import CommonNavBar from '../../HeaderNavs/CommonNavBar'
import HeadingBanner from '../HeadingBanner'
import styled from 'styled-components'
import HomeBanner from './HomeBanner'
import Footer from '../Footer'

const Container = styled.div``;
const UL = styled.ul`list-style: none;`;
const LI = styled.li`display:flex;
border-bottom: 1px solid black;
padding:10px; width:550px; `;

const Span = styled.span`color:grey; margin-left:40px;`;
const Button = styled.button`position: relative; margin-left:30px; background-color: turquoise;
border:none; border-radius: 5px; color:white; width:20%; height: 38px;`;

function Home() {
  return (
    <Container>
        <CommonNavBar/>
        <HomeBanner/>
        <HeadingBanner text="Tours"/>
        <center>
        <UL>
          <LI>
          JUL16<Span>DETROIT DTE ENERGY MUSIC THEATE</Span>
          <Button>BUY TICKETS</Button>
          </LI>

          <LI>
          JUL19<Span>TORONTO, ON BUDWESTER STAGE</Span>
          <Button>BUY TICKETS</Button>
          </LI>

          <LI>
          JUL22<Span>BRISTOW, VA JIGGY LUBE LIVE</Span>
          <Button>BUY TICKETS</Button>
        </LI>

        <LI>
          JUL29<Span>PHOENIX, AZ AK-CHIN PAVILION</Span>
          <Button>BUY TICKETS</Button>
        </LI>

        <LI>
          AUG2<Span>LAS VEGAS, NV T-MOBILE ARENA</Span>
          <Button>BUY TICKETS</Button>
        </LI>

        <LI>
          AUG7<Span>CONCORD, CA CONCORD PAVILION</Span>
          <Button>BUY TICKETS</Button>
        </LI>

        </UL>
        </center>
        <Footer/>
    </Container>
  )
}

export default Home