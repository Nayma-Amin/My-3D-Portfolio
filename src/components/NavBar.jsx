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
          <a href="#nishy" className="logo">
            <img
              src="/images/top.png"
              alt="logo"
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
            <Shimmering>Nayma Amin Nishy</Shimmering>
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
          <a href="https://drive.google.com/file/d/1L26QXIiyHNACdACi609U9mQowqD60kT3/view?usp=sharing" className="contact-btn group">
            <div className="inner">
              <span>Resume</span>
            </div>
          </a>
        </Fade>
      </div>
    </header>
  );
};

export default NavBar;
