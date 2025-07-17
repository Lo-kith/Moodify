import { useEffect, useState } from "react";
import { moodSongs } from "../src/songs";
import { useContext } from "react";
import { MoodContext } from "../src/MoodContext";
import "./SongList.css";  

const SongList = ({ mood }) => {
  const [songs, setSongs] = useState([]);
  const { setCurrentSong, setIsPlaying , audio, setAudio} = useContext(MoodContext);

  useEffect(() => {
    if (mood) {
      setSongs(moodSongs[mood] || []);
    }
  }, [mood]);

  const handlePlay = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

const handlePause = (song) => {
  setCurrentSong(song);
  setIsPlaying(false);
};

  return (
    <div className="song-list-container">
      <h2 className="song-list-title">{mood ? `${mood} Playlist` : "Select a Mood"}</h2>
      
      <div className="song-cards">
        {songs.map((song, index) => (
          <div
            key={index}
            className="song-card"
            onClick={() => handlePlay(song)}
          >
            <div className="song-info">
              <h3 className="song-title">{song.title}</h3>
              <p className="song-artist">{song.artist}</p>
            </div>
            <button className="play-button" onClick={handlePlay}>▶️</button>
            <button className="pause-button" onClick={handlePause}>⏸️</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongList;
