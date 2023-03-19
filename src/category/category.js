import React from "react";
import './category.css';
import Button from 'react-bootstrap/Button';
import avatar from './avatar.svg';
import log from './log.svg'
import Form from 'react-bootstrap/Form';
import { Grid } from '@material-ui/core';
import { useState } from "react";
import im1 from '../images/im1.png'
import im2 from '../images/im2.png'
import im3 from '../images/im3.png'
import im4 from '../images/im4.png'


function History () {
   
    const images = [im1,im2,im1,im2,im3,im4,im3,im4,im1,im2,im1,im4]
    const MyComponent = () => {
        return (
          <Grid container spacing={0} className="imagesize">
            {images.map((image, index) => (
              <Grid key={index} item xs={3} sm={3} md={3} lg={3} xl={3} >
                <img src={image} alt={`Image ${index+1}`} style={{ width: '500px' , height:'400px'}} />
              </Grid>
            ))}
          </Grid>
        );
      };
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
        <h3>Select Topic</h3>
        <h4>Featured Category </h4>
        <div>
        <MyComponent />
        </div>
        </div>
        <button className="startcategory">Start</button>
       
      </div>
      </div>
     
    );
}
 export default History;