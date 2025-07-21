import React from "react";
import { SiGithub } from "react-icons/si";
export default function ProjectCard({
  img,
  alt,
  status,
  tittle,
  description,
  children,
  href = "/",
  hrefgit = "",
}) {
  return (
    <a
      className="group flex flex-col focus:outline-hidden"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img
          className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
          src={img}
          alt={alt}
        />
        <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3">
          {status}
        </span>
        <a
          href={hrefgit}
          target="_blank "
          className="absolute right-2 bottom-4 end-0 font-medium text-4xl text-[#cac6da] py-1.5 px-3 hover:text-blue-600 motion-preset-pulse-sm motion-opacity-loop-95 motion-duration-2000 "
        >
          <SiGithub />
        </a>
      </div>

      <div className="mt-7 text-center">
        <h2 className="flex justify-center text-2xl font-semibold text-gray-800 group-hover:text-gray-600 mb-4">
          {tittle}
        </h2>
        <div className="flex justify-center mx-auto gap-2 mt-2 text-4xl">
          {children}
        </div>
        <p className="mt-3 text-gray-800">{description}</p>
      </div>
    </a>
  );
}
