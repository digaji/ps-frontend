import React from 'react';
import ProjectCard from "../components/ProjectCard";
import ProfilePage from "../components/ProfilePage";
import Navbar from '../components/Navbar';

const project = () => {
  return (
    <div>
       <Navbar/>
       <ProfilePage />
       <ProjectCard />
   </div>

  );
};

export default project;