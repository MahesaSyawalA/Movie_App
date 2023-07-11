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
  const [navbarBg, setNavbarBg] = useState(false);

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

  const changeBackgroundNavbar =() =>{
    if(window.scrollY >= 800 ){
      setNavbarBg(true)
    }else{
      setNavbarBg(false )
    }
  }

  window.addEventListener('scroll',changeBackgroundNavbar )
  console.log(popularMovies);

  return (
    <>
      <div className="App">
        <NavbarComponent setType={setType} search={search} autoScroll={autoScroll}  setHero={setHero} navbarBg={navbarBg}/>
        <header className="App-header scroll-smooth">
          <DiscoverComponent discover={discoverMov?.data?.results} hero={hero} />
          <div id="movieList" className=" py-20 flex flex-wrap gap-5 bg-gr items-center justify-center container">
            <div className="container px-24 pt-7 text-left uppercase text-3xl font-bold ">
            <h1 >{Type.replace('_',' ')}</h1>
            </div>
            <ListMovieComponent popularMovies={popularMovies} />
          </div>
        </header>
        <FooterComponent />
      </div>
    </>
  );
};

export default Home;
