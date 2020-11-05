import About from "./About"
import Home from "./Home"
import Portofolio from "./Portofolio"
import Profile from "./Profile"
import Worke from "./Worke"
import Social from "./Social"
import React, { Component } from 'react';


class Hh extends Component {
  render(){
    
  return (
    <div className="Hh">
     <Home />
     <Worke />
     <Portofolio />
     <Profile />
     <About />
     <Social />
    </div>
  );
}}

export default Hh;