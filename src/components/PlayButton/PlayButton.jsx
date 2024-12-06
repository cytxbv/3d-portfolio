import React from "react";
import { mediaPlayer } from "../../assets/mediaPlayer";
import "./PlayButtoncss.css";

const PlayButton = ({ isPlaying, setIsPlaying }) => {
  return (
    <button onClick={() => setIsPlaying(!isPlaying)} className="play-btn">
      {isPlaying ? (
        <img src={mediaPlayer.playOnIcon} alt="Pause" />
      ) : (
        <img src={mediaPlayer.playOffIcon} alt="Play" />
      )}
    </button>
  );
};

export default PlayButton;
