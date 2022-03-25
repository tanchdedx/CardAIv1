import React from "react";
import logo from "../assets/Card AI.png";
import Img from "../assets/mobile.jpeg";


const Hero = () => (
  

  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="100" />
   
    <h1 className="mb-4">Welcome</h1>
       <p className="lead">
      A recommendation engine that gives you the best deal in town.
      Join our{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://t0923532.wixsite.com/card-ai/forum"      
      >
        Card.AI Community
      </a>
      </p>
  
  </div>
  
 )


export default Hero;
