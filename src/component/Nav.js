import { Link } from "react-router-dom"
import"../component/Nav.css"
const Nav=()=>{
    return(
        
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <h2 className="logo-text">sayed_des Profile</h2>
                </div>
                <input type="checkbox" id="nav"></input>
                <label htmlFor="nav"></label>
                <ul className="ul-list">
                    <li className="list-item"><Link className="a" to="/home">home</Link></li>
                    <li className="list-item"><a className="a" href="#">Work</a></li>
                    <li className="list-item"><a className="a" href="#">Portfolio</a></li>
                    <li className="list-item"><a className="a" href="#">Resume</a></li>
                    <li className="list-item"><a className="a" href="#">About</a></li>
                    <li className="list-item"><Link className="a" to="/Contact">Contact</Link></li>
                </ul>
                
            </div>
            
        </div>
           
           
      
    )
}
export default Nav
