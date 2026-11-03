import React from "react";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
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
        <a href="#nishy" className="logo">
          <img src="/images/logologoL.png" alt="logo" />
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
        <div className="nav-actions">
          <div className="social-links">
            <a
              href="mailto:naymaaminnishy22@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email Nayma"
              className="hover:from-amber-200 hover:to-amber-900 bg-gradient-to-r"
            >
              <SiGmail className="text-base md:text-xl xl:text-2xl" />
            </a>
            <a
              href="https://github.com/Nayma-Amin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="hover:from-teal-200 hover:to-teal-900 bg-gradient-to-r"
            >
              <FaGithub className="text-base md:text-xl xl:text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/nayma-amin-nishy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="hover:from-blue-200 hover:to-blue-900 bg-gradient-to-r"
            >
              <FaLinkedinIn className="text-base md:text-xl xl:text-2xl" />
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/1VffTvHLlO5UOvI1oZ5FJXcUjsl6RQpOr/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="pill shrink-0"
          >
            <div className="inner">Resume</div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
