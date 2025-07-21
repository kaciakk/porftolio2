import React from "react";
import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-center
      bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')]
      bg-no-repeat bg-top bg-cover bg-center relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 max-w-[75rem] w-full px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* Tekst */}
        <div
          className="text-center md:text-left opacity-0 -translate-x-20
          intersect:opacity-100 intersect:translate-x-0 
          transition-all duration-1000 ease-out"
        >
          <h1 className="font-bold text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            HI! I am <span className="text-blue-600">Maciej</span>
          </h1>
          <div className="mt-5 max-w-2xl text-center md:text-left mx-auto md:mx-0">
            <p className="text-base sm:text-lg text-gray-600">
              I am in my fourth year of studying computer science. Over the past
              few years, I have focused on both acquiring knowledge and working
              on my personal projects. As a team member at PMI in Krakow, I have
              the opportunity to apply some of my knowledge in practical
              settings. I am currently seeking new opportunities in the
              front-end sector, which is my preferred area within IT. I aspire
              to grow in this field over the next few years, although I am open
              to exploring new technologies as well.
            </p>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={profile}
            className="rounded-full w-64 sm:w-80 md:w-[400px] lg:w-[500px] h-auto
            opacity-0 translate-x-20 intersect:opacity-100 intersect:translate-x-0
            transition-all duration-1000 ease-out"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
}
