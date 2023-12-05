import React from 'react'
import classes from "../modules/TrendCard.module.css"
import play from "../assets/Polygon 2.png"

const TrendCard = (props) => {
    const story = props.story.slice(1,100) + "..."
  return (
      <>
      <div className={classes.card}>
        <img src={props.source} className={classes.bckgrnd}>
        </img>
            <div className={classes.title}>
               <div>
               <h3>
                    {props.title}
                </h3>
                <p>
                    {story}
                </p>
                </div>
            </div>
            <div className={classes.play}> 
                <img src={play} alt="oe" />
            </div>
            
        </div>
        
      </>
  )
}

export default TrendCard