import React, { useState } from "react";
import useAnalyticsEventTracker from "../useAnalyticsEventTracker";

export default function NavbarComponent({ setType, search, autoScroll }) {
  const gaEventTracker = useAnalyticsEventTracker("listMovie");

  return (
    <>
      <div className="sticky top-0 flex bg-[#27374D] justify-between h-auto w-[100%] px-14 ">
        <div
          className="rounded-full px-10 bg-center bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9eT_-Cd2_f1qYYiDAOXB-NvtxBZ0thmpwsLgD9b5f_Q&s')]  "
          // style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9eT_-Cd2_f1qYYiDAOXB-NvtxBZ0thmpwsLgD9b5f_Q&s')" }} 
        ></div>
        <div className="flex gap-5 px-7 py-5  select-none ">
          <button
            className="px-5 font-extrabold text-[#9DB2BF] font-mono hover:text-[#DDE6ED]"
            onClick={() => {
              setType("upcoming");
              autoScroll();
            }}
          >
            {" "}
            Up Coming
          </button>
          <button
            className="px-5 font-extrabold text-[#9DB2BF] font-mono hover:text-[#DDE6ED]  "
            onClick={() => {
              setType("now_playing");
              autoScroll();
            }}
          >
            {" "}
            Now Playing
          </button>
          <button
            className="px-5 font-bold text-[#9DB2BF] font-mono hover:text-[#DDE6ED]"
            onClick={() => {
              setType("popular");
              autoScroll();
            }}
          >
            {" "}
            Popular
          </button>
          <button
            className="px-5 font-bold text-[#9DB2BF] font-mono hover:text-[#DDE6ED]"
            onClick={() => {
              setType("top_rated");
              autoScroll();
            }}
          >
            {" "}
            Top Rated
          </button>
        </div>
        <div className="items-center justify-center">
          <input
            placeholder="cari movie kesayangan..."
            className="bg-[#DDE6ED] text-black text-sm rounded-full focus:outline-none "
            onChange={({ target }) => search(target.value)}
          />
        </div>
      </div>
    </>
  );
}
