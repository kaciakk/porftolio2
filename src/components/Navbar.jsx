import React, { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Funkcja do płynnego scrolla
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // zamykamy menu po kliknięciu (na mobile)
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <nav
        className="w-full max-w-5xl bg-white border border-gray-200 rounded-[24px] mx-2 flex items-center justify-between p-2 sm:px-6 md:px-8"
        aria-label="Primary Navigation"
      >
        <a
          href="#"
          onClick={() => scrollToSection("hero")}
          className="flex items-center"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-[120px] h-[40px] pb-1 cursor-pointer motion-preset-seesaw"
          />
        </a>

        {/* Hamburger menu - tylko na mobile */}
        <button
          className="md:hidden flex items-center justify-center size-9.5 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // Ikona "X"
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            // Ikona hamburgera
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        <div
          className={`flex flex-col md:flex-row md:items-center md:gap-6 absolute md:static top-full left-0 right-0 bg-white md:bg-transparent border md:border-0 rounded-b-xl md:rounded-none p-4 md:p-0 transition-transform duration-300 md:transition-none ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-[-20px] opacity-0 pointer-events-none md:pointer-events-auto"
          } md:opacity-100 md:translate-y-0`}
        >
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            className="py-2 md:py-0 px-4 md:px-1 text-gray-600 hover:text-gray-900 font-medium cursor-pointer border-b-2 border-transparent hover:border-blue-600 md:border-b-0 md:hover:border-b-2 transition"
          >
            O mnie
          </a>
          <a
            href="#project"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("project");
            }}
            className="py-2 md:py-0 px-4 md:px-1 text-gray-600 hover:text-gray-900 font-medium cursor-pointer border-b-2 border-transparent hover:border-blue-600 md:border-b-0 md:hover:border-b-2 transition"
          >
            Projekty
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="py-2 md:py-0 px-4 md:px-1 text-gray-600 hover:text-gray-900 font-medium cursor-pointer border-b-2 border-transparent hover:border-blue-600 md:border-b-0 md:hover:border-b-2 transition"
          >
            Kontakt
          </a>

          <a
            href="#"
            className="mt-3 md:mt-0 w-full md:w-auto whitespace-nowrap py-2 px-4 text-sm font-medium rounded-full border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-blue-700"
          >
            CV
          </a>
        </div>
      </nav>
    </header>
  );
}
