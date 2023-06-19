import React, { useState } from "react";
import useAnalyticsEventTracker from "../useAnalyticsEventTracker";

export default function NavbarComponent({ setType, search }) {
  const gaEventTracker = useAnalyticsEventTracker("listMovie");

  return (
    <>
      <div className="fixed flex bg-[#27374D] justify-between h-auto w-[100%] px-14 ">
        <div className="rounded-full px-10 bg-[#DDE6ED] "></div>
        <div className="flex gap-5 px-7 py-5  ">
          <button
            className="px-5 font-extrabold text-[#9DB2BF] font-mono hover:text-[#DDE6ED]"
            onClick={() => (setType("upcoming"), gaEventTracker("COMING"))}
          >
            {" "}
            Up Coming
          </button>
          <button
            className="px-5 font-extrabold text-[#9DB2BF] font-mono hover:text-[#DDE6ED]  "
            onClick={() => setType("now_playing")}
          >
            {" "}
            Now Playing
          </button>
          <button
            className="px-5 font-bold text-[#9DB2BF] font-mono hover:text-[#DDE6ED]"
            onClick={() => setType("popular")}
          >
            {" "}
            Popular
          </button>
          <button
            className="px-5 font-bold text-[#9DB2BF] font-mono hover:text-[#DDE6ED]"
            onClick={() => setType("top_rated")}
          >
            {" "}
            Top Rated
          </button>
          <input
            placeholder="cari movie kesayangan..."
            className="bg-[#DDE6ED]  text-black px-5 text-sm rounded-full focus:outline-none "
            onChange={({ target }) => search(target.value)}
          />
        </div>
      </div>
    </>
  );
}
