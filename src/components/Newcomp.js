import React, { Component } from 'react'
import blitz2 from '../assets/blitz2.jpg'
import aa from '../assets/aa.jpg'
export class Trip extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : "subscribe me",
             sub : "subscribe",
             imageURL : blitz2,
        }
    }
    styles = {
        fontStyle :"bold",
        color :"red",
        fontSize : 45,
     }
    Buttonchange=() => {
        this.setState({
            message: "hit the bell icon",
            sub:"subscribed"
        })
    }
    imageChange = ()=>{
        this.setState({
            message:"thank u",
            imageURL:aa,
        })
    }
    
    render() {
        return (
            <div className="tt">
               <center> <h3>{this.state.message}</h3><br/>
                <button onClick={this.Buttonchange}>{this.state.sub}</button>
                </center>
                <p/>
                <img style ={ {width:"50px", height:"50px",marginLeft:"650px"}} src={this.state.imageURL}  onClick={this.imageChange}  alt="" />
            </div>
        )
    }
}

export default Trip
