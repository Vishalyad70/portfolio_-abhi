import React from 'react'
import {Banner} from './Workcompo/Banner';
import {List_pro} from './Workcompo/List_pro';
import { useEffect } from 'react';
export  function Work() {
    useEffect(() => {
        window.scroll(0,0);
      }, [])
    return (
        <div className="work_mode">
        <Banner/>
        <List_pro/>
            
        </div>
    )
}
