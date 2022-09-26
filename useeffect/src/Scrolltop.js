import React from 'react'
import { useEffect } from "react";
import { useWindowScroll } from "react-use"
import './App.css'
import { useState } from 'react';
export const Scrolltop = () => {
    const {y: Scrolltop} = useWindowScroll();
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if(Scrolltop > 400){
      setVisible(true);
    } else{
      setVisible(false);
    }
  },[Scrolltop]);
  
  const srolltop = () => {
    window.scrollTo ({
        top: 0, 
        behavior:"smooth"
    })
}
    ;
  if(!visible){
    return false;
  }
  return (
    <div><button className="btn" onClick={srolltop}>sum</button></div>
  )
}
export default Scrolltop;
