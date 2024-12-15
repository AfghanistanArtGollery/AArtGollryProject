
"use client";
import React, { useEffect } from "react";
import Aos from "aos";

import 'aos/dist/aos.css'

export default function AosInit() {

   useEffect(()=>{

    Aos.init({
        // offset: 200,
        duration: 600,
        // easing: 'ease-in-sine',
        delay: 100,
    })

   },[])
  return null;
}
