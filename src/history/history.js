import React from "react";
import './history.css';
import Button from 'react-bootstrap/Button';
import avatar from './avatar.svg';
import log from './log.svg'
import Form from 'react-bootstrap/Form';
import his from './his.svg';
import { useState } from "react";

function History () {

    return (
        <div className="container">
            <div >
        <h3 > Quiz Time</h3>
        
        <div className="search-container">
              {/* <img src={search} alt="search" className="search-icon"/> */}

              <Form.Control
                type="search"
                placeholder="Search.."
                className="search-input"
                aria-label="Search"
              />
           </div>

     <div className="customcontainer">         
        <Button variant="outline-secondary">Start Quiz</Button>{' '}
        </div > 
        {/* <div className="avatar-container">
        <img src={avatar} className="avatar" alt="Oluwatobi" />
        <span className="avatarname">Oluwatobi..</span>
        </div> */}

        </div>
        
        <div className="btngroup"> 
        <Button className="dash">
        {/* <img src={Vector} alt="dashboard" className="icon" style={{ marginRight: '25px'}}/> */}
          Dashboard</Button>
        <Button className="support">
        {/* <img src={support} alt="support" className="icon" style={{ marginRight: '25px'}}/> */}
          Support</Button>

        <Button className="notification">
        {/* <span className="icon"><img src={notif} alt="notif" className="icon" style={{ marginRight: '25px'}} /></span> */}
          Notifications</Button>
         </div>
        <Button className="btnlog">
        <img src={log} alt="logout" className="icon" style={{ marginRight: '25px'}} />
          Log Out</Button>
         
        
        <div className="box">
            <div>
        <h3>History Quiz</h3>
        <h4>Read the folowing instructions </h4>
        <img src={his} alt="his" />
        </div>
       
        <div className="dates">
        <h2 className="date">Date:</h2>
        <h2 className="date">Time Limit:</h2>
        <h2 className="date">Attempts:</h2>
        <h2 className="date">Points:</h2>
        
        </div>
        
        <h2>Instructions</h2>
        <p>This quiz consists of 5 multiple-choice questions. To be successful with the quizzes, it’s important to conversant with the topics. Keep the following in mind:<br/>
         Timing - You need to complete each of your attempts in one sitting, as you are allotted 30 minutes to each attempt.<br/>
         Answers - You may review your answer-choices and compare them to the correct answers after your final attempt.<br/><br/>

        To start, click the "Start" button. When finished, click the "Submit " button.</p><br/>
        <button className="start">Start</button>
        </div>
       
      </div>
     
    );
}
 export default History;