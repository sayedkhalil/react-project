import"../component/Portofolio.css"
import React, { useEffect, useState } from "react"
import axios from "axios"
import logo from "./images/Portfolio/portfolio-img1.jpg"
const Portofolio=()=>{
    const [images,setImages]=useState([])
    useEffect(()=>{ axios.get("https://porfile-9758b.firebaseio.com/portfolio.json").then(res=>{setImages(res.data)}) },[])
    const img = images.map((item)=>{
        console.log(item.image)
        return(
            <div key={item.id}>
                <img src={item.image} alt="" />
                <p className="overlay">
                    <span>
                        Show Image
                    </span>
                </p>
            </div>
        )
    })
    return(
        <div className="portfolio">
        <h2 className="portfolio-title"><span>My</span> Portfolio</h2>
        <ul className="portfolio-list">
            <li className="portfolio-item active">All</li>
            <li className="portfolio-item">HTML</li>
            <li className="portfolio-item">Photoshop</li>
            <li className="portfolio-item">Wordpress</li>
            <li className="portfolio-item">Mobile</li>
        </ul>
        
        <div className="box">          
            
          {img}  
           
        </div>
        
    </div>
    )
}
export default Portofolio