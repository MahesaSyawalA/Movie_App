import { useEffect, useState } from "react";
import { getMovieList, searchMovie, discoverMovie } from "../api";
import NavbarComponent from "../components/navbarComponent";
import { ListMovieComponent } from "../components/content/listMovieComponent";
import { FooterComponent } from "../components/footerComponent";
import { DiscoverComponent } from "../components/content/discoverComponent";
import axios from "axios";
import ReactGA from "react-ga";
import React from "react";
import { useNavigate } from "react-router-dom";

const IDGA = 'G-Z97GKSYCW6';
ReactGA.initialize(IDGA);
ReactGA.pageview(window.location.pathname);

const Home = () => {
  const navigate = useNavigate();
  const baseUrl = process.env.REACT_APP_BASEURL;
  const apiKey = process.env.REACT_APP_APIKEY;
  const [popularMovies, setPopularMovies] = useState([]);
  const [Type, setType] = useState("popular");
  const [hero, setHero] = useState(false);
  const [discoverMov, setDiscover] = useState([]);
  // const [scroll,setScroll] = useState(false);

  useEffect(() => {
    getMovieList(Type).then((result) => {
      setPopularMovies(result);
    });
  }, [Type]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/discover/movie?api_key=${apiKey}`)
      .then((ress) => setDiscover(ress));
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
      setHero(true);
    } else {
      setHero(false);
    }
  };
  
  const autoScroll=()=>{
    window.scrollTo(0,800);
  }


  return (
    <>
      <div className="App">
        <NavbarComponent setType={setType} search={search} autoScroll={autoScroll} />
        <header className="App-header scroll-smooth">
          {/* <div
          className={`bg-[#9DB2BF] p-10 w-full bg-no-repeat bg-right flex h-[600px] items-center ${
            hero ? "hidden" : "flex"
          } `}
        >
          <div className=" ms-40 text-left w-[30%] grid-col-1 p-2 h-[200px]  ">
            <span className="font-bold text-[#DDE6ED] ">MovSyle</span>
            <h1 className="text-3xl font-bold">
              Streaming Movie,TVs Shows, & More.
            </h1>
            <p></p>
            <button className="bg-[#DDE6ED] hover:bg-[#526D82] mt-3 p-2 rounded-lg font-bold text-[#27374D]">
              Berlangganan Sekarang
            </button>
          </div>
          <div className="bg-cover bg-center bg-no-repeat w-[55%] h-full bg-[url('./assets/img/hero_prev.png')]"></div>
        </div> */}
          <DiscoverComponent discover={discoverMov?.data?.results} hero={hero} />
          <div id="movieList" className=" py-20 flex flex-wrap gap-5 bg-gr items-center justify-center container">
            <div className="container px-24 py-4 text-left uppercase text-3xl font-bold ">
            <h1 >{Type.replace('_',' ')}</h1>
            </div>
            <ListMovieComponent popularMovies={popularMovies} />
          </div>

          {/* <div style={`backgrounmage: url( '${bgimg}' )`} className=" py-28 flex flex-wrap gap-4 bg-gr items-center justify-center container">
        </div> */}
        </header>
        <FooterComponent />
      </div>
    </>
  );
};

export default Home;
