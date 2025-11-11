import React from "react";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";
import { Shimmering } from "./effects/Shimmer";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <Fade>
          <a href="#nishy" className="logo flex items-center gap-2 flex-shrink-0">
            <img
              src="/images/logologoL.png"
              alt="logo"
              className="w-6 h-6 md:w-4 md:h-4 object-contain"
            />
            <Shimmering>
              <span className="inline md:hidden">Nayma</span>{" "}
              <span className="hidden md:inline">Nayma Amin Nishy</span>{" "}
            </Shimmering>
          </a>

          <nav className="desktop">
            <ul>
              {navLinks.map(({ link, name }) => (
                <li key={name} className="group">
                  <a href={link}>
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center mb-0 justify-start gap-2">
            <a
              href="mailto:naymaaminnishy22@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border p-2 rounded-full bg-black bg-gradient-to-r hover:from-amber-200 hover:to-amber-900"
            >
              {" "}
              <SiGmail className="md:text-2xl " />
            </a>{" "}
            <a
              href="https://github.com/Nayma-Amin"
              target="_blank"
              rel="noopener noreferrer"
              className="border p-2 rounded-full bg-black bg-gradient-to-r hover:from-teal-200 hover:to-teal-900"
            >
              {" "}
              <FaGithub className="md:text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/nayma-amin-nishy"
              target="_blank"
              rel="noopener noreferrer"
              className="border p-2 rounded-full bg-black bg-gradient-to-r hover:from-blue-200 hover:to-blue-900"
            >
              {" "}
              <FaLinkedinIn className="md:text-2xl" />
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/1L26QXIiyHNACdACi609U9mQowqD60kT3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block border border-white rounded-full overflow-hidden transition-all duration-500"
          >
            <div className="inner bg-white px-6 py-2 rounded-full transition-all duration-500 group-hover:bg-black">
              <span className="text-black font-semibold transition-all duration-500 group-hover:text-white">
                Resume
              </span>
            </div>
          </a>
        </Fade>
      </div>
    </header>
  );
};

export default NavBar;