import "./MoodSelector.css";  // 👈 Import new CSS

const moods = ["Chill", "sad", "Riding", "romantic"];

const MoodSelector = ({ setMood }) => {
  return (
    <div className="mood-selector-container">
      <label htmlFor="mood-select" className="mood-label">
        🎵 Choose Your Mood
      </label>
      <select
        id="mood-select"
        className="mood-select"
        onChange={(e) => setMood(e.target.value)}
      >
        <option value="">Select Mood</option>
        {moods.map((mood) => (
          <option key={mood} value={mood}>
            {mood.charAt(0).toUpperCase() + mood.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MoodSelector;
