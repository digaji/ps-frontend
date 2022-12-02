import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import ProfilePage from "../components/ProfilePage";

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "../azureAuth.config";

const msalInstance = new PublicClientApplication(msalConfig);

export default function Home() {
  return (
<<<<<<< Updated upstream
    <>
      <MsalProvider instance={msalInstance}>
        <div>
          <Navbar />
          <Hero />
        </div>
      </MsalProvider>
=======
    <>   
        <div>
          <Navbar />
          This is homepage
        </div>
>>>>>>> Stashed changes
    </>
  );
}
