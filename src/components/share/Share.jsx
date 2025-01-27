import React from 'react'
import "./share.css"
import profilePic from "../../assets/images/person/apollo.jpg"

function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src={profilePic} alt="" />
                <input placeholder="What's in your mind Redd?" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <img src="/assets/images/share/1.jpg" alt="" className="shareIcon" />
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <img src="/assets/images/share/2.jpg" alt="" className="shareIcon" />
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <img src="/assets/images/share/3.jpg" alt="" className="shareIcon" />
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <img src="/assets/images/share/4.jpg" alt="" className="shareIcon" />
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share

