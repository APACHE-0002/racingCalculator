import React from 'react';
import './styles.css';
import logo from '../../assets/wallpaper.jpg';

export default function Header(){
  return(
    <>
    <form className="">
      <h1 className="text">ApacheDrops</h1>

      <img src={logo} className="img"/>
        
        
    </form>
    </>
  )
}