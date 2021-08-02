import React, { Component } from 'react'
import img2 from '../images/pic1.jfif';
import '../Css/home.css';

export default class Home extends Component {
    render() {
        return (
            <div className="site-info">
            <div className="title">
                UI Syntax
            </div>
            <div className="sub-title">
                Web Design | Mobile Apps
            </div>

            <div class="box">
            <input type="file" id="file" name="image" ></input>
            <img src={img2} alt="" width="100%" height="100%"/>
            <label for="file">EDIT PIC</label>
            <input type="text" placeholder="User Name" name="" ></input>
            <input type="Email" placeholder="Email ID" name="" ></input>
            <input type="number" placeholder="Phone Number" name="" ></input>
            <input type="text" placeholder="Date of Birth" name=""></input>
            <input type="text" name="" placeholder="Gender"></input>

            <button>CANCEL</button>

            <button
            name="done">DONE</button>
            </div>
            
            </div> 
        )
    }
}
