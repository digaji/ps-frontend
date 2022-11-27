import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import ProfilePage from "../components/ProfilePage";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
