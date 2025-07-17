import { useContext, useEffect, useRef, useState } from "react";
import { MoodContext } from "./MoodContext";
import "./Player.css";

const Player = () => {
  const { currentSong, isPlaying, setIsPlaying } = useContext(MoodContext);
  const audioRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1); // Default full volume

  // Play/pause control via context
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  // Sync progress with audio time
  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      setProgress((audio.currentTime / audio.duration) * 100);
    }
  };

  // User moves progress slider
  const handleProgressChange = (e) => {
    const audio = audioRef.current;
    const newValue = e.target.value;
    setProgress(newValue);
    if (audio && audio.duration) {
      audio.currentTime = (newValue / 100) * audio.duration;
    }
  };

  // Volume slider
  const handleVolumeChange = (e) => {
    const newValue = e.target.value;
    setVolume(newValue);
    if (audioRef.current) {
      audioRef.current.volume = newValue;
    }
  };

  if (!currentSong) return null;

  return (
    <div className="player-container">
      <div className="player-info">
        <h4 className="player-title">{currentSong.title}</h4>
        <p className="player-artist">{currentSong.artist}</p>
      </div>

      <audio
        ref={audioRef}
        src={currentSong.url}
        onTimeUpdate={handleTimeUpdate}
        autoPlay
      />

      <div className="player-controls">
        <label>Progress:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleProgressChange}
        />

        <label>Volume:</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />

        <button
          className="player-button"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? "⏸ Pause" : "▶️ Play"}
        </button>
      </div>
    </div>
  );
};

export default Player;
