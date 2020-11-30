import Hh from "./component/Hh"
import Contact from "./component/Contact"
import Footer from "./component/Footer"
import Nav from "./component/Nav"
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter ,Route} from "react-router-dom";

class App extends Component {
  render(){
    
  return (
   <BrowserRouter>
     <Nav />
     <Route  path ="/home" component ={Hh}/>
     <Route  path ="/Contact" component ={Contact}/>
    <Footer />
     </BrowserRouter>
  );
}}

export default App;
