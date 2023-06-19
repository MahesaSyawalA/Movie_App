import React, { useEffect } from "react";
import ReactGA, { pageview } from "react-ga";

ReactGA.initialize('UA-274037390-2');
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