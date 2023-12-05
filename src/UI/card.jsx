import React from 'react'
import classes from '../modules/Card.module.css'
import play from '../assets/Group 4.png'

const Card = (props) => {
  return (
    <>
    <div className={classes.card} >
        <img src={props.source} className={classes.img} alt='movie img'></img>
        <div className={classes.card_blur}>
            <p>{props.title}</p>
            <div className={classes.playImg}>
                <img src={play} alt="play img" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Card