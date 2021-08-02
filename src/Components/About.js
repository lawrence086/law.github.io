import React, { Component } from 'react';
import img1 from '../images/pic1.jfif';
import '../Css/main.css';

export default class About extends Component {
    render() {
    return(
        <div class="box-outer">
        <div class="resume-box">
            <div class="box-1">
                <img src={img1} alt="" class="profile"/>
                <div class="content">
                {/* Personal Description */}
                <h1>About Me</h1>
                <p>Software Developer - Highly developed skills in developing softwares, including Digital and Graphic Designs.
                    Defined as an adaptable, ambitious, self-motivated, confident and down to earth individual - combined with
                    a limitless imagination and creative drive. I also speak fluent Sepedi and English - making me a
                    valuable asset to any team.
                </p>
                
                {/* Skills Obtained */}
                <h1>Skills</h1>
                <p>Graphic Design</p>
                <div id="progress"></div>

                <p>Web Design</p>
                <div id="progress1"></div>

                <p>HTML</p>
                <div id="progress2"></div>

                <p>CSS</p>
                <div id="progress3"></div>

                <p>Android Application</p>
                <div id="progress4"></div>

            {/* personal details */}
                <h1 class="personal">Personal profile</h1>
                <ul>
                    <li class="personal1">Date of Birth       :09/01/1997</li>
                    <li class="personal1">Marital Status      :Single</li>
                    <li class="personal1">Nationality         :South African</li>
                    <li class="personal1">Known Languages     :Sepedi, English</li>
                </ul>
            
            </div>
            </div>
            <div class="box-2">
                {/* Contact details */}
                <div class="intro">
                    <h1>Lawrence Sekgoka</h1>
                    <hr class="hr"/>
                    <div class="clearfix"></div>
                    <p class="intro-p">03 Chaine Street Ext 22, Ivy Park
                        Polokwane, 0699
                    </p>
                    <p>Phone +(27) 60 924 5249</p>
                    <p>Email: lawrencesekgoka086@gmail.com</p>
                </div>

                {/* Work Experience */}
                <div class="content-2">
                    <div class="intro1"></div>
                    {/* <img src={img2} alt="" class="pic3"/> */}
                    <h2 class="head">Experience</h2>
                    <hr class="hr1"/>
                    <div class="clearfix"></div>
                </div>
                    <p class="para-1">Student Assistant Representative (2019 (Jan-Dec))</p>
                    <p class="para-1">AgriTourZA (Short course)</p>
                    <p class="para-1">Examination Assistant - EA </p>

                    <p class="para-2">Advanced as a Team leader at the Landing Residence, providing guidance, instruction,
                                     direction and leadership to a group of Students. I also attended and participated in AgriTourZA dealing
                                     with Software prototypes, as well as Mobile Application and Web Development. 
                    </p>            


                                        {/* Academic Details */}
                                        <div class="content-2">
                                        <div class="intro2">
                                            {/* <img src={img3} alt="" class="pic1"/> */}
                                            <h2 class="head">Education</h2>
                                            <hr class="hr2"/>
                                            <div class="clearfix"></div>
                                        </div>
                                            <p class="para-1">Tshwane University of Technology (2017-2021)</p>
                                            <ul>
                                                <li class="school">Course - National Diploma In Software Development (NDISF1)</li>
                                                <li class="school">Faculty - ICT</li>
                                                <li class="school">Level - Third Year (WIL)</li>
                                            </ul>

                                                <p class="para-1">Helmeg Academy (2012-2016)
                                                    <ul>
                                                        <li class="school">Qualification Obtained - National Senior Certificate</li>
                                                        <li class="school">Subjects: Sepedi, English, Life Orientation, Geography, Physics, Life Sciences, Mathematics</li>
                                                        <li class="school">Year Obtained - 2016</li>
                                                        <li class="school">Highest Grade Passed - Grade 12</li>
                                                    </ul>
                                                </p>
                                        {/* Reference */}
                                        
                                        <div class="intro3">
                                            {/* <img src={img4} alt="" class="pic2"/> */}
                                            <h2 class="head">Reference</h2>
                                            <hr class="hr3"/>
                                            <div class="clearfix"></div>
                                        </div>    

                                        <p class="para-1">Mr K Sigama</p>
                                        <ul>
                                        <li class="school">Lecturer</li>
                                        <li class="school">Tel: 072 698 0635</li>
                                        </ul>
                                        <p class="para-1">Mr Moloi</p>
                                        <ul>
                                        <li class="school">Residence Manager</li>
                                        <li class="school">Tel: 073 314 6692</li>
                                        </ul>
                                        <p class="para-1">Mr Motlhabeng</p>
                                        <ul>
                                        <li class="school">Mlab Co-ordinator</li>
                                        <li class="school">Tel: 078 649 8402</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
               
     
        );
    }
}
