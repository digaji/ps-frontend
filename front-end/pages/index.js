import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <ProjectCard/>
      </div>
  )
}
