import React from "react";
import { Link } from "react-router-dom";
import './HomePage.css';
import Roll from './assets/Roll.png';

const HomePage = () => {
  return (
    <div className="home-container">
  
      <div className="hero">
        

        <h2 className="gradient-text">Welcome to Mood Music Player</h2>
        <p className="subtitle">Select your mood and enjoy the perfect soundtrack!</p>
        <div className="vinyl-container">
          <img src={Roll} className="music-icon" />
        </div>
        <Link to="/source" className="get-started-btn">
        
        </Link>
        <div className="home-content">


       <h1>The world is at your fingertips—millions of songs, one click away. Discover new artists,
         create the perfect playlist, and soundtrack every moment of your life.
          We’re here to make sure your music journey is effortless and unforgettable. 🎧📲

</h1>
        </div>




      </div>
    </div>
  );
};

export default HomePage;
