import React from "react";
import './pagedeux.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import avatar from './avatar.svg';
import notif from './notif.svg';
import support from './support.svg';
import search from './search.svg';
import Vector from './Vector.svg';
import log from './log.svg';
import picture from './picture.svg'
import rec from './rec.svg'
import recc from './recc.svg'
import rc from './rc.svg'
import rcc from './rcc.svg'
import b from './b.svg'
import c from './c.svg'
import a from './a.svg'
import Badge from './Badge.svg'
import Badgee from './Badgee.svg'
import Badgeee from './Badgeee.svg'
import linee from './linee.svg'
import im1 from './im1.svg'
import im2 from './im2.svg'
import im3 from './im3.svg'
import im4 from './im4.svg'

function pagedeux () {
    return (
        <div className="line">
        <h3 > Quiz Time</h3>
        <div className="btn-group"> 
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
        
        
          <div className="searchcontainer">
              {/* <img src={search} alt="search" className="search-icon"/> */}

              <Form.Control
                type="search"
                placeholder="Search.."
                className="search-input"
                aria-label="Search"
              />
           </div>

     <div className="custom-container">         
        <Button variant="outline-secondary">Start Quiz</Button>{' '}
        </div > 
        {/* <div className="avatar-container">
        <img src={avatar} className="avatar" alt="Oluwatobi" />
        <span className="avatarname">Oluwatobi..</span>
        </div> */}
        <div className="container-box">
        <img src={picture} alt="picture" className="picture"/>
        
        <h1 className="name">Oluwatobi Olowu</h1>
        <h2 className="bonus">Bonus booster 24lv</h2>

        <div className="container-rec">
        <img src={rec} alt="rec" className="rec"/>
        <img src={recc} alt="recc" className="recc"/>  
        </div>
        <div className="as">
        <img src={a} alt="s" className="a"/>
        <div className="word"><h1>27</h1><br/><h2>Quiz Passed</h2></div>
        </div>
        <div className="bs">
        <img src={b} alt="s" className="b"/>
        <div className="word"><h1>27min</h1><br/><h2>Fastest Time</h2></div>
        </div>
        <div className="cs">
        <img src={c} alt="s" className="c"/>
        <div className="word"><h1>200</h1><br/><h2>Correct Answers</h2></div>
        </div>
        <h1 className="ache">Acheivements</h1>
        <div className="r"> 
        <img src={rc} alt="rc" className="rc"/>
        <img src={rcc} alt="rcc" className="rcc"/>
        </div> 
        <div className="acheivement">
          <img src={Badge} alt="Badge" />
          <img src={Badgee} alt="Badgee" />
          <img src={Badgeee} alt="Badgeee" />
          <h5>Comeback</h5>
          <h5>Lucky</h5>
          <h5>Winner</h5>
          <img src={linee} alt="linee" />
          {/* <button className="show">View All</button> */}
        </div>
        <h1 className="fc">Featured Category</h1>
        <button className="showw">View All</button>

        <div className="pictures"> 
        <img src={im1} alt="im1" />
        <img src={im2} alt="im2" />
        <img src={im3} alt="im3" />
        <img src={im4} alt="im4" />
        </div>
        </div>
       
      </div>
     
    );
}
 export default pagedeux;