import React from "react";

const ProjectCard = () => {
  return (
    <>
    <div className="px-44 font-Inter font-light text-[44px]">

      Projects List

      <div class="border-b-4 border-black-500/100 pb-0"></div>
    </div>
    
    <div className='max-w-[1240px] mx-auto text-black relative'>
        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-10 gap-y-16 pt-5 sm:pt-2 text-white'>
            <div className='bg-gray-300 rounded shadow-2xl'>
                <div className='p-8 text-center'>
                    <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-10 flex h-48 w-96 md:w-[259px] md:h-[289px]"></img>
                    <div className='pl-2 font-bold font-Inter text-black text-[20px] md:text-[24px] font-[700]'>Project1</div>
                </div>
            </div>
            <div className='bg-gray-300 rounded shadow-2xl'>
                <div className='p-8 text-center'>
                    <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-10 flex w-[200px] h-[230px] md:w-[259px] md:h-[289px]"></img>
                    <div className='pl-2 font-bold font-Inter text-black text-[20px] md:text-[24px] font-[700]'>Project2</div>
                </div>
            </div>
            <div className='bg-gray-300 rounded shadow-2xl'>
                <div className='p-8 text-center'>
                    <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-10 flex w-[200px] h-[230px] md:w-[259px] md:h-[289px]"></img>
                    <div className='pl-2 font-bold font-Inter text-black text-[20px] md:text-[24px] font-[700]'>Project3</div>
                </div>
                </div>
            </div>
            </div>



</>
  );
};

export default ProjectCard;
