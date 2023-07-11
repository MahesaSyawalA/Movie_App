import React, { useState } from "react";
import useAnalyticsEventTracker from "../useAnalyticsEventTracker";
import BgLogo from "../assets/images/bgtransparant.png"

export default function NavbarComponent({ setType, search, autoScroll, setHero, navbarBg }) {
  
  const gaEventTracker = useAnalyticsEventTracker("listMovie");


  

  return (
    <>
      <div className={` fixed z-10  top-0 flex ${navbarBg ? 'bg-[#27374D]' : 'bg-gradient-to-b from-[#27374da9]' }  justify-between h-auto w-[100%] px-14 `} >
        <div
          className=" px-24 bg-center  bg-cover "
          style={{
            backgroundImage : `url(${BgLogo})`
          }}
        ></div>
        <div className=" flex gap-5 px-7 py-5 text-[#DDE6ED]  select-none ">
          <button
            className="px-5 font-extrabold hover:text-[#526D82] "
            onClick={() => {
              setHero(false);
              setType("upcoming");
              autoScroll();
            }}
          >
            {" "}
            Up Coming
          </button>
          <button
            className="px-5 font-extrabold  hover:text-[#526D82]  "
            onClick={() => {
              setHero(false);
              setType("now_playing");
              autoScroll();
            }}
          >
            {" "}
            Now Playing
          </button>
          <button
            className="px-5 font-bold  hover:text-[#526D82]"
            onClick={() => {
              setHero(false);
              setType("popular");
              autoScroll();
            }}
          >
            {" "}
            Popular
          </button>
          <button
            className="px-5 font-bold  hover:text-[#526D82] "
            onClick={() => {
              setHero(false);
              setType("top_rated");
              autoScroll();
            }}
            >
            {" "}
            Top Rated
          </button>
        </div>
        <div className=" flex items-center  ">
          <input
            placeholder="cari movie"
            className="bg-[#DDE6ED] bg-opacity-20 text-center py-1 text-[#DDE6ED] text-sm rounded-full focus:outline-none "
            onChange={ ({ target }) => search(target.value) }
            onClick={({ target }) => search(target.value)}
            />
        </div>
      </div>
    </>
  );
}
