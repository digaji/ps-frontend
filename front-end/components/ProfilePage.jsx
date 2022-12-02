import React, { useState, useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../azureAuth.config";
import { callMsGraph } from "../azureGraph.config";

function ProfilePage() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

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
    <div className="grid grid-cols-4 gap-4">
      <div className="cursor-pointer object-left-top row-span-3 py-20 px-40">
        <div className="overflow-hidden relative w-48 h-48 bg-gray-100 rounded-full dark:bg-gray-600">
          <svg
            className="absolute -left-1 w-12 h-12 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
          <label className="w-48 h-48 group rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
            <input type="file" id="image" onChange={handleChange} />
            <img src={file} />
          </label>
          <div className="preview">
            <img id="file-ip-1-preview" />
          </div>
        </div>
      </div>
      <div className="col-span-2 font-Inter text-black text-[40px] md:text-[40px] font-[700] pt-20 ">
        { graphData ? <div> {graphData.givenName} {graphData.surname} </div> : <div> John Doe </div> }
      </div>
      <div className="col-span-2 pt-0"> Semester 5, 2025</div>
      <div className="col-span-2 box-content h-20 w-90 p-4 bg-[#EEEE] m4 pt">
        <ul className="list-none">
          <li>Hello Everyone, my name is John Doe. I like programming and cooking.</li>
          <li>Nice to meet you.</li>
          <li>Github: http://</li>
        </ul>
      </div>
    </div>
  );
}

export default ProfilePage;
