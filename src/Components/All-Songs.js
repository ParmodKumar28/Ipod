// Imports
import { Component } from "react";
import styles from "../Styles/all-songs.module.css"

// Class component for all songs feature is here to play songs.
class AllSongs extends Component {

    // Component updates
componentDidUpdate(prevProps) {
    const { songs } = this.props;
      const isPlaying = songs.isPlaying;
      const audio = document.getElementById("audioPlayer");
    
     if (prevProps.isPlaying !== isPlaying) {
        if (isPlaying) {
          audio.play();
        } else {
          audio.pause();
        }
      }
    }

// Rendering JSX
  render() {
    // Props
    const { songs } = this.props;
    const currentSong = songs.allSongs[songs.currentSongIndex];

    // Returning JSX
    return (
        <div className={styles.AllSongsContainer}>
          {/* Song Image */}
          <img className={`${songs.isPlaying ? styles.songPlaying : ''} ${styles.songImage}`} src={currentSong.imageUrl} alt="Song" />

          {/* Song Title and Artist Name */}
          <div>
            <h3>{currentSong.title}</h3>
            <p>{currentSong.artist}</p>
          </div>
  
          {/* Audio Player */}
          <audio
            src={currentSong.audioUrl}
            controls
            id="audioPlayer"
          />
        </div>
      );
  }
}

// Exporting here
export default AllSongs;
