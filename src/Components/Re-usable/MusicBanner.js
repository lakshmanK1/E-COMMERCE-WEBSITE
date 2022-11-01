import React from 'react'
import classes from '../Re-usable/MusicBanner.module.css'

function MusicBanner(props) {
  return (
    <div className={classes.displayText}>
        <h2>{props.text}</h2>
    </div>
  )
}

export default MusicBanner