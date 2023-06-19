import React, { useEffect, useState, useTransition } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { discoverMovie } from "../../api";

export function DiscoverComponent({ discover = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [handle, setHandle] = useState();
  const [data, setData] = useState([]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? discover.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSLide = () => {
    const isLastIndex = currentIndex === discover.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // console.log(discover.length);
  const Slides = () =>
    discover.map((data, i) => {
      return (
        <>
          <div key={i} id={`item ${i + 1}`} className="carousel-item flex-col w-full">
            <img
              src={`${process.env.REACT_APP_BASEIMGURL}${data?.backdrop_path}`}
              className="w-full static"
            />
          </div>
        </>
      );
    });

  const ButtonSlides = () =>
    discover.map((data, i) => {
      return (
        <>
          <a key={i} href={`#item${i + 1}`} className="btn btn-xs">
            {i + 1}
          </a>
        </>
      );
    });
  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto  group ">
      {/* <div className="flex-shrink-0 w-full flex h-full bg-center bg-cover duration-500 ">
        <img
          src={`${process.env.REACT_APP_BASEIMGURL}${discover[currentIndex]?.backdrop_path}`}
          className="w-full h-full transition ease-in-out delay-150 duration-500 "
        />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft size={30} onClick={prevSlide} />
      </div>
      <div
        className={` group-hover:block absolute top-[50%] translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer`}
      >
        <BsChevronCompactRight size={30} onClick={nextSLide} />
      </div>
      <div className="translate-y-[50%] w-full h-[20%] border"></div> */}
      <div className="carousel w-full">
        <Slides />
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {/* <ButtonSlides /> */}
      </div>
    </div>
  );
}
