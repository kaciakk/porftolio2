import React from "react";
import ProjectCard from "./ProjectCard";
import rps from "../assets/rps.png";
import soka from "../assets/soka.png";
import blp from "../assets/blp.png";
import snake from "../assets/snake.png";
import ttt from "../assets/ttt.png";
import hangman from "../assets/hangman.png";
import carrental from "../assets/carrental.png";
import {
  SiReact,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";
export default function Project() {
  return (
    <div className=" max-w-[90rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-gray-800">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl mt-4 font-bold md:text-4xl md:leading-tight">
          Projects
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className="opacity-0 scale-95 intersect:opacity-100 intersect:scale-100 transition-all duration-700 bg-gradient-to-br from-[#fefcff] via-[#fbfaff] to-[#f7f5ff] rounded-xl shadow-md p-2">
          <ProjectCard
            img={soka}
            alt="soka-image"
            status="Work in progress"
            tittle="SOKA"
            description="An engineering project focused on developing a web application for managing diet, workouts, and training plans. SOKA includes a diet generator, custom meal tracking, personalized workout scheduling, and a chat module for direct contact with a dietitian or personal trainer. Built with a modern tech stack, the app offers a user-friendly and responsive interface for promoting healthy lifestyle habits."
            href=""
            hrefgit="https://github.com/kaciakk/Praca"
          >
            <SiMongodb className="text-[#47A248]" />
            <SiExpress className="text-[#000000]" />
            <SiReact className="text-[#61DAFB] " />
            <SiNodedotjs className="text-[#339933]" />
            <SiTailwindcss className="text-[#06B6D4]" />
          </ProjectCard>
        </div>
        <div className="opacity-0 scale-95 intersect:opacity-100 intersect:scale-100 transition-all duration-700 bg-gradient-to-br from-[#fefcff] via-[#fbfaff] to-[#f7f5ff] rounded-xl shadow-md p-2">
          <ProjectCard
            img={blp}
            alt="blp-image"
            status="Work in progress"
            tittle="BLP"
            description="A modern, responsive website developed for a company specializing in the installation of air conditioning systems, ventilation, photovoltaics, heat pumps, and hosting services. The platform showcases the company’s full range of services, highlights completed projects, and includes an intuitive contact form for customer inquiries."
            href="https://blp-test1.netlify.app/"
            hrefgit=""
          >
            <SiReact className="text-[#61DAFB] " />
            <SiTailwindcss className="text-[#06B6D4]" />
          </ProjectCard>
        </div>
        <div className="opacity-0 scale-95 intersect:opacity-100 intersect:scale-100 transition-all duration-700 bg-gradient-to-br from-[#fefcff] via-[#fbfaff] to-[#f7f5ff] rounded-xl shadow-md p-2">
          <ProjectCard
            img={carrental}
            alt="carrental-image"
            status="To be updated"
            tittle="Car Rental"
            description="A web application for managing car rentals. Users can browse available cars, make reservations, and manage their bookings. Admin users have access to an admin panel where they can add new cars and manage all rentals. The app includes user authentication and integrates with a MongoDB database."
            href="https://kaciak-rock-paper-scissors.netlify.app/"
            hrefgit="https://github.com/kaciakk/rent-a-car"
          >
            <SiMongodb className="text-[#47A248]" />
            <SiExpress className="text-[#000000]" />
            <SiReact className="text-[#61DAFB] " />
            <SiNodedotjs className="text-[#339933]" />
          </ProjectCard>
        </div>
        <div className="opacity-0 scale-95 intersect:opacity-100 intersect:scale-100 transition-all duration-700 bg-gradient-to-br from-[#fefcff] via-[#fbfaff] to-[#f7f5ff] rounded-xl shadow-md p-2">
          <ProjectCard
            img={rps}
            alt="rps-image"
            status="Done"
            tittle="Rock Paper Scissors"
            description="A simple interactive game built with HTML, CSS, and JavaScript. The user plays against the computer by selecting rock, paper, or scissors. The game includes score tracking and dynamic feedback after each round."
            href="https://kaciak-rock-paper-scissors.netlify.app/"
            hrefgit="https://github.com/kaciakk/rock-paper-scissors-2"
          >
            <SiJavascript className="text-[#F7DF1E]" />
            <SiCss3 className="text-[#1572B6]" />
            <SiHtml5 className="text-[#E34F26]" />
          </ProjectCard>
        </div>
        <div className="opacity-0 scale-95 intersect:opacity-100 intersect:scale-100 transition-all duration-700 bg-gradient-to-br from-[#fefcff] via-[#fbfaff] to-[#f7f5ff] rounded-xl shadow-md p-2">
          <ProjectCard
            img={ttt}
            alt="ttt-image"
            status="To be updated"
            tittle="Tic-Tac-Toe"
            description="A classic two-player game implemented using vanilla JavaScript. Features a 3x3 grid, turn-based logic, and automatic win/draw detection."
            href="https://kaciak-tic-tac-toe.netlify.app/"
            hrefgit="https://github.com/kaciakk/tic-tac-toe"
          >
            <SiJavascript className="text-[#F7DF1E]" />
            <SiCss3 className="text-[#1572B6]" />
            <SiHtml5 className="text-[#E34F26]" />
          </ProjectCard>
        </div>
        <div className="opacity-0 scale-95 intersect:opacity-100 intersect:scale-100 transition-all duration-700 bg-gradient-to-br from-[#fefcff] via-[#fbfaff] to-[#f7f5ff] rounded-xl shadow-md p-2">
          <ProjectCard
            img={snake}
            alt="snake-image"
            status="To be updated"
            tittle="SNAKE"
            description="A browser-based version of the retro Snake game, built using HTML5 Canvas and JavaScript. The player controls a growing snake to collect food while avoiding collisions. The game features increasing difficulty and real-time rendering, showcasing animation, keyboard control handling, and collision logic."
            href="https://kaciak-snake.netlify.app/"
            hrefgit="https://github.com/kaciakk/snake"
          >
            <SiJavascript className="text-[#F7DF1E]" />
            <SiCss3 className="text-[#1572B6]" />
            <SiHtml5 className="text-[#E34F26]" />
          </ProjectCard>
        </div>
        <div className="opacity-0 scale-95 intersect:opacity-100 intersect:scale-100 transition-all duration-700 bg-gradient-to-br from-[#fefcff] via-[#fbfaff] to-[#f7f5ff] rounded-xl shadow-md p-2">
          <ProjectCard
            img={hangman}
            alt="hangman-image"
            status="To be updated"
            tittle="Hangman"
            description="A classic word-guessing game built with vanilla JavaScript, HTML, and CSS. Players try to guess the hidden word letter by letter, with a limited number of incorrect attempts allowed. The game features dynamic UI updates, a visual hangman drawing, and basic string and array manipulation to handle game logic. Great practice for working with user input and conditionals."
            href="https://kaciak-hangman.netlify.app/"
            hrefgit="https://github.com/kaciakk/Hangman"
          >
            <SiJavascript className="text-[#F7DF1E]" />
            <SiCss3 className="text-[#1572B6]" />
            <SiHtml5 className="text-[#E34F26]" />
          </ProjectCard>
        </div>
      </div>
    </div>
  );
}
