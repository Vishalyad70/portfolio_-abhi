import React  from 'react'
import { useEffect } from 'react';

import { Hero_top } from "./Landingpage/Hero_top";
import {About} from "./Landingpage/About";
import { Projects } from './Landingpage/Projects';
import { Review } from './Landingpage/Review';

export default function Landingpage() {
    useEffect(() => {
      window.scroll(0,0);
    }, [])
    return (
        <div>
          
            <Hero_top/> 
            <About />
            <Projects />
            <Review />
         
        </div>
    )
}
