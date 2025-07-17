import{ createContext,useState} from 'react';

export const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    return(
        <MoodContext.Provider value={{ currentSong, setCurrentSong, isPlaying, setIsPlaying }}>
            {children}
        </MoodContext.Provider>
    )

    
}