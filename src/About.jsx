import React from 'react';
import './About.css';
import AnimatedTyping from './AnimatedTyping'; 
import WaveImage from './assets/Wave.png'

const AboutPage = () => {
  return (
    <div className="about-container">
      <h2>About Moodify</h2>
      <p>This app lets you choose your mood and play music that matches it. 🎵😊</p>
      <h1>
        Music has the power to heal, inspire, and elevate our emotions. Whether you’re feeling happy, sad, calm, or energetic — Mood Music Player helps you find the perfect song for the moment.
      </h1>
      <p>With a vast library of songs, you can explore new artists, create playlists, and enjoy music that resonates with your feelings.</p>
      <h1>
        Welcome to our musical space, where every note matters. We believe music is the universal language that unites people, transcends borders, and heals souls. From timeless classics to modern hits, 
        we celebrate sound in all its forms. Join us and keep the music alive
      </h1>
      <div className='wave-container'>
        <img src={WaveImage} alt="Wave" className='wave' />

      </div>

      <div className="animation">
        <AnimatedTyping text="Welcome to Moodify! Enjoy the music journey. " speed={80} />
      </div>
        <div className='paraghraph'>
        
        </div>



    </div>
  );
};

export default AboutPage;
