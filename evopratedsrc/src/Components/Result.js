import React from "react"
import "./ComponentCSS/Result.css"
function Result(props) {
    
    return(
        <div>
            <h1 className = "total">You've spent a total of: {props.totalTime}min in game on Steam!</h1>
            <h1 className = "hours">That's a grand total of: {(props.totalTime/60).toFixed(3)} hours!</h1>
            <h1 className = "days">Which equates to: {((props.totalTime/60)/24).toFixed(3)} days!</h1>
        </div>
    )
}

export default Result