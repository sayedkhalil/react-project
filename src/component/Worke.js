import React, { Component } from "react"
import"../component/Worke.css"
import axios from "axios"

class Worke extends Component{
    state={
        work:[]
    }
    componentDidMount(){
        axios.get("https://porfile-9758b.firebaseio.com/works.json").then(res=>{this.setState({work : res.data})})   }
        render(){
        const works =Object.values(this.state.work)
        const workList =works.map((item)=>{
        return(
                <div className="part" id={`ab${item.id}`}  key={item.id}>
                <i className={item.icon_name}></i>
                <h4 className="part-title">{item.title}</h4>
                <hr className="line"></hr>
                <p className="part-desc">
               {item.body}
                </p>
            </div>
            )
        })
        return(
            <div className="work">
        <div className="container">
                <h2 className="work-title"><span>My</span> Work</h2>
               {workList}                
            </div>
        </div>
        )
    }
}
export default Worke