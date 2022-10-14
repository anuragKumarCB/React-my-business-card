import React from "react"
import "./About.css"

export default function About(props) {
    return (
        <div className="about--">
            <h3>About</h3>
            <p>{props.aboutData.aboutText}</p>
        </div>
    )
}