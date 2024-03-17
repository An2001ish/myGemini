import React from 'react'
import "./Main.css"
import { assets } from "../../assets/assets"

const Main = () => {
  return (
    <div className='main'>
    <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
    </div>
    <div className="main-container">
        <div className="greet">
            <p><span>Hello, Anish.</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Most visited places in 2023</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Why das</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Most visited places in 2023</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Most visited places in 2023</p>
                <img src={assets.compass_icon} alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Main
