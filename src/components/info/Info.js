import React from "react"
import "./Info.css"

export default function Info() {
    return (
        <div className="info--">
            <div className="info--picture"></div>
            <div className="info--text">
                <h1>Anurag Kumar</h1>
                <h3>Frontend Developer</h3>
                <a href="/">anuragkumar.website</a>
            </div>
            <div>
                <a href="/" className="info--button"><i class="fa-solid fa-envelope"></i>Email</a>
            </div>

        </div>
    )
}