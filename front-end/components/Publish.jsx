<<<<<<< Updated upstream
import React from 'react'

const Publish = () => {
  return (
    <div>Publish</div>
  )
}

export default Publish
=======
import React from "react";


const Publish = () => {
    return (
        <>
        <div className="w-100% text-center font-Inter font-light text-[44px]">
        <h1>Publish Project</h1>
        </div>

    <div className="flex w-100% justify-center" >
        <div className="">
            <div className="pr-10 font-Inter font-light text-[22px]"> Project Information</div>
            <div className="font-Inter font-light text-[22px]"> Project Link</div>
            <div className="font-Inter font-light text-[22px]"> Contributors</div>    
        </div>

        <div className="">
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Project Title</label>
                <input type="text" id="small-input" class="mb-4 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>

            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Project Description</label>
                <input type="text" id="small-input" class="mb-4 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>

            <div class="flex items-center justify-center w-[1000px]">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-white hover:bg-gray-100 dark:border-gray-600 dark:hover:border-black dark:hover:bg-white">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (max. 3MB)</p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                </label>
            </div> 

            <button type="button" class="mt-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Next</button>

        </div>
    </div>
        
    </>

  );
};

export default Publish;
>>>>>>> Stashed changes
