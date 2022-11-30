import React from "react";
// import poster1 from "../src/poster1.png";
// import poster2 from "../src/poster2.png";
// import poster3 from "../src/poster3.png";

const ProjectCard = () => {
  return (
    <>
      <div className="px-44 font-Inter font-light text-[44px]">
        Projects List
        <div class="border-b-4 border-black-500/100 pb-0"></div>
      </div>

      <div className="max-w-[1240px] mx-auto text-black relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-10 gap-y-16 pt-5 sm:pt-2 text-white">
          <div className="bg-gray-300 rounded shadow-2xl">
            <div className="p-8 text-center">
              <img
                class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-10 flex h-48 w-96 md:w-[250px] md:h-[350px]"
                // src={poster1}
                src="https://cdn.discordapp.com/attachments/1031973075371184228/1047529227886542878/image.png"
                // width="150"
                // height="150"
              ></img>
              <div className="pl-2 font-bold font-Inter text-black text-[20px] md:text-[24px] font-[700]">
                Project1
              </div>
              <div>
                <h3>This is project 1 </h3>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 rounded shadow-2xl">
            <div className="p-8 text-center">
              <img
                class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-10 flex w-[200px] h-[230px] md:w-[250px] md:h-[350px]"
                // src={poster2}
                src="https://cdn.discordapp.com/attachments/1031973075371184228/1047529323537649795/image.png"
                // width="150"
                // height="150"
              ></img>
              <div className="pl-2 font-bold font-Inter text-black text-[20px] md:text-[24px] font-[700]">
                Project2
              </div>
              <div>
                <h3>This is project 2 </h3>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 rounded shadow-2xl">
            <div className="p-8 text-center">
              <img
                class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-10 flex w-[200px] h-[230px] md:w-[250px] md:h-[350px]"
                // src={poster3}
                src="https://cdn.discordapp.com/attachments/1031973075371184228/1047529352197308516/image.png"
                // width="150"
                // height="150"
              ></img>
              <div className="pl-2 font-bold font-Inter text-black text-[20px] md:text-[24px] font-[700]">
                Project3
              </div>
              <div>
                <h3>This is project 3 </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
