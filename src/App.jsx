import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { MoodProvider } from './MoodContext';
import Player from './Player';
import SongList from './SongList';
import MoodSelector from './MoodSelector';
import './App.css';

import Home from './HomePage';
import About from './About';
import Login from './LoginPage';

function App() {
  const [mood, setMood] = useState("");

  return (
    <MoodProvider>
      <div className="app-container">
        <h1>🎧 Moodify</h1>
        <p className='subtitle'></p>
<div className='navbar'>
  
        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/source" style={linkStyle}>Source</Link>
          <Link to="/login" style={linkStyle}>Login</Link>
        </nav>
</div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/source" element={
            <div>
              <MoodSelector setMood={setMood} />
              <SongList mood={mood} />
              <Player />
            </div>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>

        <footer className='app-footer'>
          <p>© 2023 Mood Music Player. All rights reserved.</p>
        </footer>
      </div>
    </MoodProvider>
  );
}

const navStyle = {
  padding: "10px",
  display: "flex",
  gap: "30px",
  paddingLeft: "80%",
  marginBottom: "20px"
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none"
};

export default App;
