import React from 'react' 
import ProfilePage from "../components/ProfilePage";
import Navbar from "../components/Navbar";
import ProjectCard from '../components/ProjectCard';

const profile = () => {
  return (
    <div>
    <Navbar/>
    <ProfilePage />
    <ProjectCard/>
    </div>
  )
}

export default profile