import React, { Component } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import img3 from '../images/pic1.jfif';
import '../Css/profile.css'

export default class Profile extends Component {
    render() {
        return (
                <div class="wrapper">
                    <div class="left">
                        <img src={img3}
                        alt="user" width="100"/>
                        <h4>Lawrence Sekgoka</h4>
                        <p>UI Developer</p>
                    </div>
                    <div class="right">
                        <div class="info">
                            <h3>Information</h3>
                            <div class="info_data">
                                <div class="data">
                                    <h4>Email</h4>
                                    <p>lawrence@gmail.com</p>
                                </div>
                                <div class="data">
                                <h4>Phone</h4>
                                    <p>+27-60-924-5249</p>
                            </div>
                            </div>
                        </div>
                    
                    <div class="projects">
                            <h3>Projects</h3>
                            <div class="projects_data">
                                <div class="data">
                                    <h4>Recent</h4>
                                    <p>Website and Application Development.</p>
                                </div>
                                <div class="data">
                                <h4>Most Viewed</h4>
                                    <p>Web Development</p>
                            </div>
                            </div>
                        </div>
                    
                        <div class="social_media">
                            <ul>
                            <li><FaFacebookSquare/></li>
                            <li><FaGithub/></li>
                            <li><FaInstagramSquare/></li>
                        </ul>
                    </div>
                    </div>
                </div>
                );
    }
}
