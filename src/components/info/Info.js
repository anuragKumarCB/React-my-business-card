import React from "react"
import "./Info.css"

export default function Info(props) {

    return (
        <div className="info--">
            <img src={props.profileData.imgURL} alt="" className="info--picture" />
            <div className="info--text">
                <h1>{props.profileData.name}</h1>
                <h3>{props.profileData.developerTitle}</h3>
                <a href="/">{props.profileData.websiteName}</a>
            </div>
            <div>
                <a href="/" className="info--button"><i class="fa-solid fa-envelope"></i>Email</a>
            </div>

        </div>
    )
}