import React, { useState, useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../azureAuth.config";
import { callMsGraph } from "../azureGraph.config";

const HOST = "http://localhost:8000";

async function createUser(provider, providerId, useremail, username) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  console.log(useremail);
  var raw = JSON.stringify({
    "provider_id": providerId,
    "provider": provider,
    "name": username,
    "email": useremail,
    "profile_pic": "123",
    "description": `Hi, my name is ${username}. Very nice to meet you.`,
    "graduation_year": "2025",
    "current_semester": "3"
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const res = await fetch(`${HOST}/service/user/v1`, requestOptions)
    .then(response => response.text())
    .then(result => JSON.parse(result))
    .catch(error => console.log(error));
  return res;
}

async function findCreateUserByProviderId(provider, providerId, useremail, username) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  const res = await fetch(`${HOST}/service/user/v1/${provider}/${providerId}`, requestOptions)
    .then(response => response.text())
    .then(result => JSON.parse(result))
    .catch(error => JSON.parse(error.text()));
  
  const USER_PROVIDER_ID_NOT_EXISTS = "USER_PROVIDER_ID_NOT_EXISTS";
  if (res.message.includes(USER_PROVIDER_ID_NOT_EXISTS)) {
    console.log("USER DOES NOT EXIST")
    const res = createUser(provider, providerId, useremail, username);
    console.log(res);
    return res.user;
  } else {
    return res.user;
  }
}

function ProfilePage() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const {instance, accounts} = useMsal();
  const [graphData, setGraphData] = useState(null);

  const [userData, setUserData] = useState({
    "provider_id": "1",
    "provider": "MSFT",
    "name": "",
    "email": "",
    "profile_pic": "",
    "description": "",
    "graduation_year": "",
    "current_semester": ""
  });


  function RequestProfileData() {
    // Silently acquires an access token which is then attached to a request for MS Graph data
    instance.acquireTokenSilent({
        ...loginRequest,
        account: accounts[0]
    }).then((response) => {
        callMsGraph(response.accessToken).then(response => {
          const providerId = response.id;
          const provider = "MSFT";
          const useremail = response.mail;
          const username = response.displayName;
          console.log(response);
          setGraphData(response);
          return findCreateUserByProviderId(provider, providerId, useremail, username);
        }).then(user => {
          console.log(user);
          setUserData(_ => user);
        })
        ;
    }).catch(error => console.log(error));
  }

  useEffect(() => {
    RequestProfileData();
  }, []);

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
      <div className="col-span-2 pt-0"> Semester {userData.current_semester}, {userData.graduation_year}</div>
      <div className="col-span-2 box-content h-20 w-90 p-4 bg-[#EEEE] m4 pt">
        <ul className="list-none">
          <li>{userData.description}</li>
        </ul>
      </div>
    </div>
  );
}

export default ProfilePage;
