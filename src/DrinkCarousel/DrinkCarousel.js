import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function DrinkCarousel() {
  return (
    <>
      <TECarousel
        crossfade
        ride="carousel"
        showControls
        prevBtnIcon={
          <>
            <span className="inline-block text-white h-8 w-8 [&>svg]:h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
          </>
        }
        nextBtnIcon={
          <>
            <span className="inline-block text-white h-8 w-8 [&>svg]:h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </>
        }
      >
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img src="milkpunch.png" className="block w-full" alt="..." />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white font-bold md:block">
              <p className="text-xs">Always tipsy, always classy. How?</p>
              <br />
              <p>At the Monarch, you can be everything... but never bored.</p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img src="fullvardier.jpg" className="block w-full" alt="..." />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white font-bold md:block">
              <p className="text-xs">
                "Everyone has his day, and some days last longer than others”.
              </p>
              <br />
              <p>
                Churchill said these exact words and ordered a Fullvardier
                after.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img src="strawberrying.png" className="block w-full" alt="..." />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white font-bold md:block">
              <p className="text-xs">
                “Strawberrying” my pain with his fingers, singing my life in his
                words.
              </p>
              <br />
              <p>Welcome to our royal nonsense.</p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={4}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img src="cocktail4.png" className="block w-full" alt="..." />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white font-bold md:block">
              <p className="text-xs">
                "Royal decree, we're all one cocktail away from discovering our
                royal bloodline.""
              </p>
              <br />
              <p>Welcome to our royal nonsense.</p>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}
