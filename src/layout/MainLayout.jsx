import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
