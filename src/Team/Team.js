import React, { Component } from "react";
import TeamCard from "../TeamCard/TeamCard";

export default function Team() {
  return (
    <div className="bg-black lg:flex lg:justify-center items-center lg:h-lvh">
      <div className="relative isolate pt-14 text-white pb-10">
        <div className="mx-auto">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight sm:text-6xl uppercase pb-5">
              MEET THE COURT
            </h1>
            <TeamCard />
            <p className="mt-6 text-md leading-8 uppercase">
              When the Monarch looks at you like this, you know what to do.
            </p>
            <br />
            <p className="font-bold text-xl">Come visit us.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
