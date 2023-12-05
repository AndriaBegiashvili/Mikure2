import React from 'react'
import classes from "../modules/RatedCard.module.css"
import play from "../assets/Group 4.png"

const RatedCard = (props) => {
  return (
    <div className={classes.card} >
        <div className={classes.flex}>
        <div className={classes.imageCont}>
            <img src={props.source} alt="movie img" />
        </div>
        <div className={classes.row}>
        <div className={classes.flex_col}>
            <div className={classes.h_60}>
                <h3>{props.title}</h3>
            </div>
            <div className={classes.h_60}s>
                <p>{props.rating}</p>
            </div>
        </div>
        <div>
            <img src={play} alt="play" />
        </div>
        </div>
        </div>
    </div>
  )
}

export default RatedCard