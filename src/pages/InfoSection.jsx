import IntroCard from "../pages/ProfileSection/IntroCard/IntroCard"
import AppsCard from "../pages/ProfileSection/AppsCard/AppsCard"
import ProjectsCard from "../pages/ProfileSection/ProjectsCard/ProjectsCard"
import SkillsCard from "../pages/ProfileSection/SkillsCard/SkillsCard"
import StudiesCard from "../pages/ProfileSection/StudiesCard/StudiesCard"

import React from "react";

const InfoSection = ({currentStage}) => {
    console.log("info current stage", currentStage);
    return (
        <div className={'info ${currentStage > 0 ? "visible" : ""}'}>
            {currentStage === 1 && <IntroCard/>}
            {currentStage === 2 && <AppsCard/>}
            {currentStage === 3 && <ProjectsCard/>}
            {currentStage === 4 && <SkillsCard/>}
            {currentStage === 5 && <StudiesCard/>}
        
        </div>
    );
};

export default InfoSection