import React from "react";
import {useState} from "react"
import './loginform.css';
import books from "./books.png"
import back from "./back.svg"
import google from "./google.svg"
import p from "./p.svg"
import pp from "./pp.svg"


function Login() {
    const [email,setEmail]=useState('');
    const [showpassword,setShowPassword]=useState(false);
    const [password,setPassword]=useState('');
    
    const handleSubmit =(e)=> {
        e.preventDefault();
        // avoid reloading the page and instead handle the form data in the script.
        console.log('Email address : ${email} Passworad : ${password}');
    };

    return (
      <div className="all">
        
        <div className="container-quote">
    <img src={books} alt="books" className="booking"/> 
     <img src={p} alt="p" className="pp"/>
     <p>Those people who develop the <br/>ability 
        to continuously acquire<br/> new and better
         forms of<br/> knowledge that they can apply<br/> 
         to their work and to their lives will <br/>be 
         the movers and shakers in <br/>our society for 
         the indefinite <br/>future<br/> <span>Brian Tracy</span></p>
         <img src={pp} alt="p" className="ppp"/>

     </div>
     <div className="formm">
     <div className="back">
     <img src={back} alt="back" className="backicon"/> 
     <button> Back</button>
     </div>
    <div className="login">
    <h1 className="h1-style">Login to your Account </h1>
    <h2>with your registered email address</h2>
    </div> 
    <hr ></hr>

    <form onSubmit={handleSubmit} className="form">
        <label htmlFor="email">Email address*</label><br/>
        <input
        type="email"
        placeholder="       Enter email address"
        required
        id="email"
        name="email"
        value={email}
        onChange = {(e)=>setEmail(e.target.value)} /> <br/>

        <label htmlFor="password"> Enter password*</label><br/>
        <input
        type={showpassword ? 'text': 'password'}
        
        placeholder="       Password"
        required
        id="password"
        name="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)} 
        />
        <button className="show" onClick={()=>setShowPassword(!showpassword)}>
            {showpassword ? 'Hide': 'show'} 
            </button>
            <div className="rp">
        
        <input
        type="checkbox"
        id="rp"
        // value={rp} 
        />
        <label htmlFor="checkbox"><span>Remember my password</span></label>
        </div>
     </form>
     <div className="but">
     <button className="loginn">Login</button>
     <div className="linee">
     <hr className="hrr" ></hr>
     <h6>or</h6> 
     <hr className="hrrr" ></hr>
     </div> 
     <button className="loggoogle" >Login with Google <span><img src={google } alt="google" /></span></button>
     </div>
     </div>
     
      </div> 
      
    );
  }
  
  export default Login;