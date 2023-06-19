import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import { About } from "./pages/about";
import ReactGA from "react-ga4";


const TRACKING_ID = "G-Z97GKSYCW6";
ReactGA.initialize(TRACKING_ID);

function App() {
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
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        {/* <Route path='/' element={<Home/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
