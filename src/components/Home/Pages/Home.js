import React from 'react'
import CommonNavBar from '../../HeaderNavs/CommonNavBar'
import HeadingBanner from '../HeadingBanner'
import Banner from '../Banner'

function Home() {
  return (
    <div>
        <CommonNavBar/>
        <Banner/>
        <HeadingBanner text="HOME"/>
    </div>
  )
}

export default Home