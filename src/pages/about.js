import React, { useEffect } from "react";
import ReactGA, { pageview } from "react-ga4";

ReactGA.initialize('G-Z97GKSYCW6');
export function About() {

    useEffect(()=>{
        ReactGA.pageview(window.location.pathname)
    },[ ])

    console.log(pageview())
    return(
        <>
        <p>halaman about</p>
        </>
    )
}