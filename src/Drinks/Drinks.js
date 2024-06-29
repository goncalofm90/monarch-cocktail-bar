import React, { Component } from "react";
import DrinkCarousel from "../DrinkCarousel/DrinkCarousel";

export default function Drinks() {
  return (
    <div className="bg-black lg:flex lg:justify-between">
      <div className="relative isolate px-6 pt-14 lg:px-8 text-white w-full mb-10">
        <div className="mx-auto max-w-2xl ">
          <div className="text-center">
            <DrinkCarousel />
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        ></div>
      </div>
      <div className="relative flex">
        <video
          autoPlay
          loop
          muted
          className=" z-10 w-auto min-w-full min-h-full"
        >
          <source src="drinks.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
