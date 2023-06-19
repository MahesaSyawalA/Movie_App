import { useEffect, useState } from "react";
import "./App.css";
import { getMovieList, searchMovie, discoverMovie } from "./api";
import NavbarComponent from "./components/navbarComponent";
import { ListMovieComponent } from "./components/content/listMovieComponent";
import { FooterComponent } from "./components/footerComponent";
import { DiscoverComponent } from "./components/content/discoverComponent";
import axios from "axios";
import ReactGA from "react-ga";


function App(props) {
  const TRACKING_ID = "G-NQ7J223M7Z";
  const baseUrl = process.env.REACT_APP_BASEURL;
  const apiKey = process.env.REACT_APP_APIKEY;
  const [popularMovies, setPopularMovies] = useState([]);
  const [Type, setType] = useState("popular");
  const [hero, setHero] = useState(false);
  const [discoverMov, setDiscover] = useState([]);
  const bgimg = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F2014465.png&tbnid=rtrKtyUiUP8QsM&vet=12ahUKEwjhiNDkq8L_AhVQ_zgGHTeHDWoQMygBegUIARDGAQ..i&imgrefurl=https%3A%2F%2Fwww.islandcrematorium.ie%2F%3Fwork%3D5.6.2229123.6.17.31.wallpaper%2Bpc%2Baesthetic&docid=5vXMSVhTIgVR6M&w=1620&h=1040&q=wallpaper%20pc%20aesthetic&ved=2ahUKEwjhiNDkq8L_AhVQ_zgGHTeHDWoQMygBegUIARDGAQ";

  ReactGA.initialize(TRACKING_ID);

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

  // function Discover() {
  //   return discoverMov.map((dis, i) => {
  //     return (
  //       <div key={i} className="w-[20%] bg-[gray-500] text-white" >
  //         <img
  //           className="bg-contain"
  //           src={`${process.env.REACT_APP_BASEIMGURL}${dis.backdrop_path}`}
  //         />
  //       </div>
  //     );
  //   });
  // }

  // function DiscoverComponent() {

  // console.log('discoverMov: ', discoverMov);

  return (
    <div className="App">
      <NavbarComponent setType={setType} search={search} />
      <header className="App-header">
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
        <DiscoverComponent discover={discoverMov?.data?.results} />

        <div className="py-28 flex flex-wrap gap-4 bg-gr items-center justify-center container">
          <ListMovieComponent popularMovies={popularMovies} />
        </div>

        {/* <div style={`backgrounmage: url( '${bgimg}' )`} className=" py-28 flex flex-wrap gap-4 bg-gr items-center justify-center container">
        </div> */}
        
      </header>
      <FooterComponent />
    </div>
  );
}

export default App;
