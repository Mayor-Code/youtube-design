import React from "react";
import "./Video.css";

export default function Video() {
  return (
    <div className="video d-flex">
      <div className="video-thumbnail d-flex">
        <img src={require("./images/bleach.jpg")}></img>
        <span className="video-duration"></span>
      </div>
      <div className="video-description d-flex">
        <div className="profile-img d-flex">
          <img src={require("./images/user.png")} />
        </div>
        <div className="video-info d-flex">
          <div className="video-title">
            <h4>
              Bleach New Arc | Thousand years blood war| War with the quinces{" "}
            </h4>
          </div>
          <div className="video-details d-flex">
            <span className="video-channel"> Diamond </span>
            <span className="video-stats">345k views</span>
          </div>
        </div>
      </div>
    </div>
  );
}
