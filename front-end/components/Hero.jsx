import React, { useState, useEffect } from 'react';
import { useMsal } from "@azure/msal-react";
import ProjectCard from "../components/ProjectCard";
import ProfilePage from "../components/ProfilePage";
import { loginRequest } from "../azureAuth.config";
import { callMsGraph } from "../azureGraph.config";

const Hero = () => {
  const {instance, accounts} = useMsal();
  const [graphData, setGraphData] = useState(null);

  function RequestProfileData() {
    // Silently acquires an access token which is then attached to a request for MS Graph data
    instance.acquireTokenSilent({
        ...loginRequest,
        account: accounts[0]
    }).then((response) => {
        callMsGraph(response.accessToken).then(response => setGraphData(response));
    }).catch(error => console.log(error));
  }

  useEffect(() => {
    RequestProfileData();
  })

  return (
    <div>
       <ProfilePage graphData={graphData}/>
       <ProjectCard />
   </div>

  );
};

export default Hero;