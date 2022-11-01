import React from 'react'
import classes from './Footer.module.css';
import YoutubeIcon from './YoutubeIcon';
import SpotifyIcon from './SpotifyIcon';
import FaceBookIcon from './FaceBookIcon';


function MainFooter() {
  return (
    <div>
    <div className={classes.footerBody}>
        <h2>The Generics</h2>
        <YoutubeIcon/>
        <SpotifyIcon/>
        <FaceBookIcon/>
    </div>
    </div>
  )
}

export default MainFooter