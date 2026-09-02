"use client";

import { useEffect, useState } from "react";

const navItems = [
  {
    label: "PLATFORM",
    href: "#platform",
  },
  {
    label: "PROJECTS",
    href: "#projects",
  },
  {
    label: "CLOUD LAB",
    href: "#cloud-lab",
  },
  {
    label: "GUARDIAN",
    href: "#guardian",
  },
  {
    label: "ARCHITECTURE",
    href: "#architecture",
  },
  {
    label: "PROFILE",
    href: "#engineering-profile",
  },
  {
    label: "CONTACT",
    href: "#contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="navbar-inner">
        <a
          href="#top"
          className="navbar-brand"
          onClick={closeMenu}
        >
          <span
            className="navbar-globe"
            aria-hidden="true"
          >
            <span className="navbar-globe-latitude navbar-globe-latitude-one" />
            <span className="navbar-globe-latitude navbar-globe-latitude-two" />

            <span className="navbar-globe-longitude navbar-globe-longitude-one" />
            <span className="navbar-globe-longitude navbar-globe-longitude-two" />

            <span className="navbar-globe-horizontal" />
            <span className="navbar-globe-vertical" />
          </span>

          <span className="navbar-brand-text">
            ZONED<span>ACCURACY</span>
          </span>
        </a>

        <nav
          className={`navbar-links ${
            menuOpen
              ? "navbar-links-open"
              : ""
          }`}
          aria-label="Primary navigation"
        >
          {navItems.map((item, index) => (
            <a
              href={item.href}
              key={item.label}
              onClick={closeMenu}
            >
              <span>
                {String(
                  index + 1,
                ).padStart(2, "0")}
              </span>

              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <a
            href="https://github.com/LeftfaceKing?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-github"
          >
            GITHUB
            <span aria-hidden="true">↗</span>
          </a>

          <button
            type="button"
            className={`navbar-menu-button ${
              menuOpen
                ? "navbar-menu-button-open"
                : ""
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() =>
              setMenuOpen(
                (current) => !current,
              )
            }
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}