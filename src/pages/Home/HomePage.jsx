import React, { useState, useRef, useEffect } from "react";
import CameraControls from "camera-controls";
import * as THREE from 'three'
import "./HomePage.css";
import Lottie from 'react-lottie';
import StarryBackground from "../../components/Background/StarryBackground"
import { Canvas, useFrame } from "@react-three/fiber";
import { Island } from "../../../public/lowpoly_island/Scene";
import PlayButton from "../../components/PlayButton/PlayButton";
import { OrbitControls } from "@react-three/drei";
import { mediaPlayer } from "../../assets/mediaPlayer";
import animationData from "../../../public/Drag_to_discover_white";
import { FlyingRobot } from "../../../public/flying_robot/Scene";
import FlyingRobotSphere from "../../components/Spheres/Flying_robot_sphere";
import { Stegosaurs } from "../../../public/stegosaurs/Stegosaurs_SStenops";
import StegosaursSphere from "../../components/Spheres/Stegosaurs_sphere";
import { Plane } from "../../../public/plane/Plane";
import { Car } from "../../../public/car/Scene";
import { Duck } from "../../../public/duck/Scene"
import DuckSphere  from "../../components/Spheres/DuckSphere";
import AnimatedText from "../../../src/assets/AnimatedText/AnimatedText";



const HomePage = () => {
  const [isPlaying, setIsPlaying] = useState(false);  // audio playing
  const audioRef = useRef(null);
  const [showLottie, setShowLottie] = useState(true); //  animation drag visibility
  const [currentStage, setCurrentStage] = useState(0);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.5;
    audio.loop = true;

    const playAudio = () => {
      audio.play().catch(() => {
        document.addEventListener('click', playAudio);
      });
    };

    if (isPlaying) {
      audio.play().catch(() => {
        document.addEventListener('click', playAudio);
      });
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
      document.removeEventListener('click', playAudio);
    };
  }, [isPlaying]);

  const handleUserDrag = () => {
    setShowLottie(false); //hide explore animation on drag
  };
  
  const handleSphereClick = () => {
    console.log('sphere clicked');
  };

  const handleSphereHover  = () => {
    console.log('sphere hovered');
  }

  return (
    <>
        {/* <TopNav></TopNav> */}
      <audio ref={audioRef} src={mediaPlayer.musicPath} autoPlay />

      <div className="homepage_container">
      
        <div className="info_container">
          {/* <InfoSection currentStage={currentStage} /> */}
        </div>

        {showLottie && (
          <div className="lottie-container">
            <Lottie 
              options={defaultOptions}
              height={400}
              width={400}
            />
            <p className="lottie-text">DRAG TO EXPLORE</p>
          </div>
        )}
        <div className = "animatedTextcontainer">
        <AnimatedText />
        </div>
        

        <PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

        <Canvas
          camera={{ position: [-250, 150, -700], fov: 40 }}
          onPointerDown={handleUserDrag} 
          color="#2596be"
          
        >
          
          <StarryBackground position={[0, 0, -500]}  /> 
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 90, 5]} intensity={4} />

          
          <Island 
            position={[40, -50, 30]}
            setCurrentStage={setCurrentStage}
          />

          <FlyingRobot position={[140, 80, 50]} scale={[25, 25, 25]} 
          onHover={handleSphereHover}/>
          <FlyingRobotSphere
            position={[145, 110, 50]}
            onClick={handleSphereClick}
            onHover={handleSphereHover}
          />

          <Stegosaurs position={[95, -55, -2]} scale={[13, 13, 13]} />
          {/* <StegosaursSphere
            position={[95, -10, -2]}
            onClick={handleSphereClick}
            onHover={handleSphereHover}
          /> */}

          <Plane position={[-80, 40, 100]} scale={[8, 8, 8]} />
          

          <Car position={[-60, -45, 75]} scale={[0.06, 0.06, 0.06]} />

          <Duck position={[10, -48, -37]} scale={[8, 8, 8]} />
          <DuckSphere
            position={[10, -23, -37]}
            onClick={handleSphereClick}
            onHover={handleSphereHover}
          />

          
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
};

export default HomePage;
