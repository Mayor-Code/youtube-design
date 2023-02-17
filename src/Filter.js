import React from "react";
import "./Filter.css";
import { GrNext, GrPrevious } from "react-icons/gr";

export default function Filter() {
  function scrollL() {
    document.querySelector(".filter-item-container").scrollBy(-100, 0);
  }

  function scrollR() {
    document.querySelector(".filter-item-container").scrollBy(100, 0);
  }
  function scrollfunc() {
    const filterContainer = document.querySelector(".filter-item-container");
    if (
      filterContainer.scrollWidth - 2 <=
      filterContainer.clientWidth + filterContainer.scrollLeft
    ) {
      document.getElementById("scroll_r").classList.add("hidden");
    } else {
      document.getElementById("scroll_r").classList.remove("hidden");
    }
    if (filterContainer.scrollLeft > 0) {
      document.getElementById("scroll_l").classList.remove("hidden");
    } else {
      document.getElementById("scroll_l").classList.add("hidden");
    }
  }

  return (
    <div className="filter d-flex align-items-center">
      <button className="scroll hidden" id="scroll_l" onClick={scrollL}>
        <GrPrevious className="scroll-icon" />
      </button>
      <div className="filter-cover">
        <div
          className="filter-item-container d-flex align-items-center"
          id="filter-container"
          onScroll={scrollfunc}
        >
          <div className="filter-item active">
            <span className="filter-text">All</span>
          </div>
          <div className="filter-item">
            <span className="filter-text">Music</span>
          </div>
          <div className="filter-item">
            <span className="filter-text">Sport Leagues</span>
          </div>
          <div className="filter-item">
            <span className="filter-text">Computer programming</span>
          </div>
          <div className="filter-item">
            <span className="filter-text">Live</span>
          </div>
          <div className="filter-item">
            <span className="filter-text">Mixes</span>
          </div>
          <div className="filter-item">
            <span className="filter-text">Dribbling</span>
          </div>
          <div className="filter-item">
            <span className="filter-text">AI</span>
          </div>
          <div className="filter-item">
            <span className="filter-text">
              Computer and information technology
            </span>
          </div>
          <div className="filter-item">
            <span className="filter-text">Podcasts</span>
          </div>
          <div className="filter-item">
            <span className="filter-text">Gyms</span>
          </div>
          <div className="filter-item">
            <span className="filter-text">Commedy</span>
          </div>
          <div className="filter-item">
            <span className="filter-text">Afican music</span>
          </div>
          <div className="filter-item">
            <span className="filter-text">Anime</span>
          </div>
          <div className="filter-item">
            <span className="filter-text">Anime</span>
          </div>
          <div className="filter-item">
            <span className="filter-text">Anime</span>
          </div>
          <div className="filter-item">
            <span className="filter-text">Anime</span>
          </div>
        </div>
      </div>
      <button className="scroll" id="scroll_r" onClick={scrollR}>
        <GrNext className="scroll-icon" />
      </button>
    </div>
  );
}
