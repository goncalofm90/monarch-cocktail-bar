import React, { Component } from "react";

export default function TeamCard() {
  return (
    <div className="md:flex md:justify-evenly lg:w-lvw">
      <div className="md:w-[300px] h-[420px] bg-transparent cursor-pointer group perspective m-5">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute backface-hidden border-2 w-full h-full">
            <img src="king.png" className="w-full h-full" />
          </div>
          <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
            <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
              <h1 className="text-3xl font-semibold pt-5">The King's Men</h1>
              <img src="rui.webp" className="w-full h-full" />
              <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125">
                Rui Barata
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[300px] h-[420px] bg-transparent cursor-pointer group perspective m-5">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute backface-hidden border-2 w-full h-full">
            <video autoPlay loop muted className=" z-10 w-auto h-full">
              <source src="funny.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
            <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
              <img src="cheers.jpg" className="w-full h-full" />
              <h1 className="text-3xl font-semibold">You</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[300px] h-[420px] bg-transparent cursor-pointer group perspective m-5">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute backface-hidden border-2 w-full h-full">
            <img src="man.png" className="w-full h-full" />
          </div>
          <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
            <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
              <h1 className="text-3xl font-semibold pt-5">The King's Men</h1>
              <img src="ze.webp" className="w-full h-full" />
              <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125">
                Zé Robertson
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
