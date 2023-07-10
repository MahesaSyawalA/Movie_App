import React, { useEffect, useState, useTransition } from "react";
import { discoverMovie } from "../../api";
import { HiChevronLeft, HiChevronRight, HiStar } from "react-icons/hi";

export function DiscoverComponent({ discover = [], hero }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [handle, setHandle] = useState();
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

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

  const changeDiscoverRight = () => {
    if (index != discover.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  console.log(discover.length);
  const Slides = () =>
    discover.map((data, i) => {
      return (
        <>
          {/* <div
            key={i}
            id={`item ${i + 1}`}
            style={{
              backgroundImage: `url(${process.env.REACT_APP_BASEIMGURL}${data?.backdrop_path})`,
            }}
            className=" carousel-item justify-end h-full flex flex-col w-full bg-center bg-cover bg-no-repeat"
          >
            <div className="flex justify-between w-full h-1/4 mb-7 text-[#DDE6ED]  ">
              <button className="hover:text-[#526D82] hover:">
                {" "}
                <HiChevronLeft size={50} />{" "}
              </button>
              <button className="hover:text-[#526D82]">
                {" "}
                <HiChevronRight size={50} />{" "}
              </button>
            </div>
            <div className="flex h-[30%] bg-gradient-to-t from-[#27374da9] via-[#27374da9]">
              <div className="flex flex-col items-start p-8 gap-2 w-[35%] h-[100%]  ">
                <h3 className="">{data.original_title}</h3>
                <ul className="flex gap-5 text-[14px]">
                  <li>{data.release_date}</li>
                  <li className="flex items-center gap-1 border-l-4 border-[#526D82] px-2 ">
                    <HiStar />
                    {data.vote_average}
                  </li>
                  <li></li>
                </ul>
                <button className="truncate w-full text-sm">
                  {data.overview}
                </button>
              </div>
            </div>
          </div> */}
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
    <div
      className={`max-w-[1400px] h-[780px] w-full m-auto group ${
        hero ? "hidden" : " "
      } `}
    >
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
      <div className=" carousel h-full w-full">
        <div
          key={discover[currentIndex]}
          style={{
            backgroundImage: `url(${process.env.REACT_APP_BASEIMGURL}${discover[currentIndex]?.backdrop_path})`,
          }}
          className=" carousel-item justify-end h-full flex flex-col w-full bg-center bg-cover bg-no-repeat"
        >
          <div className="flex items-start justify-between w-full h-1/4 mb-7 text-[#DDE6ED]  ">
            <button
              className="hover:text-[#526D82] hover:"
              onClick={prevSlide}
            >
              {" "}
              <HiChevronLeft size={50} />{" "}
            </button>
            <button className="hover:text-[#526D82]"
            onClick={nextSLide}
            >
              {" "}
              <HiChevronRight size={50} />{" "}
            </button>
          </div>
          <div className="flex h-[30%] bg-gradient-to-t from-[#27374da9] via-[#27374da9]">
            <div className="flex flex-col items-start p-8 gap-2 w-[35%] h-[100%]  ">
              <h3 className=" truncate">{discover[currentIndex]?.original_title}</h3>
              <ul className="flex gap-5 text-[14px]">
                <li>{discover[currentIndex]?.release_date}</li>
                <li className="flex items-center gap-1 border-l-4 border-[#526D82] px-2 ">
                  <HiStar />
                  {discover[currentIndex]?.vote_average}
                </li>
                <li></li>
              </ul>
              <button className="truncate w-full text-sm">
                {discover[currentIndex]?.overview}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {/* <ButtonSlides /> */}
      </div>
    </div>
  );
}
