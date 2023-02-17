import React from "react";
import "./Mainpage.css";
import SideBar from "../side-bar/Sidebar";
import Filter from "../Filter";
import Video from "../Videos";

export default function MainPage() {
  return (
    <div className="mainpage d-flex">
      <SideBar />
      <div className="main-content">
        <Filter />
        <div className="videos">
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
        </div>
      </div>
    </div>
  );
}
