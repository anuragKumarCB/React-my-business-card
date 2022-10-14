import React from "react"
import "./Interest.css"

export default function Interest(props) {
    return (
        <div className="interest--">
            <h3>Interests</h3>
            <p>{props.interestData.interestText}</p>
        </div>
    )
}