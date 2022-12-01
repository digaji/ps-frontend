import React, {useState} from "react";

function ProfilePage(){
    const [file, setFile] = useState();
    function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  
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
            <label class="w-48 h-48 group rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
            <input type="file" id="image" onChange={handleChange} />
            <img src={file} />
  </label>
  <div class="preview">
   <img id="file-ip-1-preview"/>
 </div>
</div>
      
  <div class="col-span-2 font-Inter text-black text-[40px] md:text-[40px] font-[700] pt-20 "> John Doe </div>
  <div class="col-span-2 pt-0"> Semester 5, 2025</div>
  <div class="col-span-2 col-span-2 box-content h-20 w-90 p-4 bg-[#EEEE] m4 pt">

<ul class="list-none">
  <li>Hello Everyone, my name is John Doe. I like programming and cooking.</li>
  <li>Nice to meet you.</li>
  <li>Github: http://</li>
</ul>


    </div> 
</div>
  );
};

export default ProfilePage;
