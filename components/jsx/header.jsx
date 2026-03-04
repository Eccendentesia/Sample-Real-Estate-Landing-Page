import React, { useEffect, useState } from "react";
import "../css/header.css";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`main-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-wrapper">

          <div className="logo">
            UrbanAxis™
          </div>

          <button
            className="menu-toggle d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            ☰
          </button>

          <nav className="collapse d-lg-flex nav-links" id="navMenu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#service">service</a>
            <a href="#testimonial">Testimonial</a>
            <a href="#contact">Contact</a>
            <a href="#" className="header-cta">
              Book Consultation
            </a>
          </nav>

        </div>
      </div>
    </header>
  );
};