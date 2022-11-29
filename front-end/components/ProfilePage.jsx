import React from "react";

const ProfilePage = () => {
  return (
    <>
      {/* <div className="grid grid-cols-4 gap-4 py-20 px-40">
 <img class=" overflow-hidden relative w-44 h-44 bg-gray-100 rounded-full dark:bg-gray-600" src={"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"} alt="Avatar">
  </img>
  <div className = "text-[40px] text-extrabold"> John Doe </div>
  <div className = "grid grid-row text-[12px]"> Semester 5, Batch 2024</div>

    <div className="box-content h-28 w-32 p-4
                border-4 bg-green-500 m4">
        A Computer Science Portal
    </div>

  <div className="">



  </div>
 </div> */}

      <div className="grid grid-cols-4 gap-4">
        <div className="object-left-top row-span-3 py-20 px-40">
          <div className="overflow-hidden relative w-48 h-48 bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              className="absolute -left-1 w-12 h-12 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </div>
        </div>
        <div className="col-span-2 font-Inter text-black text-[40px] md:text-[40px] font-[700] pt-20 ">
          John Doe
        </div>
        <div className="col-span-2 pt-0"> Semester 5, 2025</div>
        <div className="col-span-2 box-content h-20 w-90 p-4 bg-[#EEEE] m4 pt">
          <ul className="list-none">
            <li>
              Hello Everyone, my name is John Doe. I like programming and
              cooking.
            </li>
            <li>Nice to meet you.</li>
            <li>Github: http://</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
