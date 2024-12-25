'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import logo from "../../../public/Navbarimages/Logo.svg"; // Replace with actual logo path
import phoneIcon from "../../../public/Navbarimages/phoneicon.svg"; // Replace with phone icon path
import whatsappIcon from "../../../public/Navbarimages/whatsupicon.svg"; // Replace with WhatsApp icon path
import hamburgerIcon from "../../../public/Navbarimages/mdi_menu.svg"; // Replace with hamburger icon path
import closeIcon from "../../../public/Navbarimages/CrossIcon.svg"; // Replace with close icon path

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbarContainer} aria-label="Main Navigation">
      {/* Desktop/Laptop View */}
      <div className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logoBox}>
          <Link legacyBehavior href="/">
            <a aria-label="Home">
              <Image src={logo} alt="Company Logo" className={styles.logo} />
            </a>
          </Link>
        </div>

        {/* Links and Icons */}
        <div className={styles.linksAndIcons}>
          {/* Navigation Links */}
          <ul className={styles.navLinks}>
            <li>
              <Link legacyBehavior href="/">
                <a title="Go to Home">Home</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/About">
                <a title="Learn more About Us">About</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/products">
                <a title="View our Products">Products</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/equipment">
                <a title="Explore Equipment">Equipment</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/insights">
                <a title="Read Insights">Insights</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/events">
                <a title="Check out Events">Events</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/contact">
                <a title="Contact Us">Contact</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/faqs">
                <a title="Frequently Asked Questions">FAQ's</a>
              </Link>
            </li>
          </ul>

          {/* Icons */}
          <div className={styles.iconBox}>
            <Link legacyBehavior href="tel:+1234567890">
              <a aria-label="Call us" className={styles.iconLink}>
                <Image src={phoneIcon} alt="Phone Icon" className={styles.icon} />
              </a>
            </Link>
            <Link legacyBehavior href="https://wa.me/1234567890">
              <a aria-label="Chat on WhatsApp" className={styles.iconLink}>
                <Image
                  src={whatsappIcon}
                  alt="WhatsApp Icon"
                  className={styles.icon}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile/Mini Tablet View */}
      <div className={styles.mobileNavbar}>
        {/* Logo */}
        <div className={styles.logoBox}>
          <Link legacyBehavior href="/">
            <a aria-label="Home">
              <Image src={logo} alt="Company Logo" className={styles.logo} />
            </a>
          </Link>
        </div>

        {/* Icons and Hamburger Menu */}
        <div className={styles.mobileIcons}>
          <Link legacyBehavior href="tel:+1234567890">
            <a aria-label="Call us" className={styles.iconLink}>
              <Image src={phoneIcon} alt="Phone Icon" className={styles.icon} />
            </a>
          </Link>
          <Link legacyBehavior href="https://wa.me/1234567890">
            <a aria-label="Chat on WhatsApp" className={styles.iconLink}>
              <Image
                src={whatsappIcon}
                alt="WhatsApp Icon"
                className={styles.icon}
              />
            </a>
          </Link>
          <button
            className={styles.hamburgerIcon}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <Image
              src={isMenuOpen ? closeIcon : hamburgerIcon}
              alt={isMenuOpen ? "Close Menu Icon" : "Open Menu Icon"}
              className={styles.hamburger}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNavLinks}>
            <li>
              <Link legacyBehavior href="/">
                <a title="Go to Home" onClick={closeMenu}>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/About">
                <a title="Learn more About Us" onClick={closeMenu}>
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/products">
                <a title="View our Products" onClick={closeMenu}>
                  Products
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/equipment">
                <a title="Explore Equipment" onClick={closeMenu}>
                  Equipment
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/insights">
                <a title="Read Insights" onClick={closeMenu}>
                  Insights
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/events">
                <a title="Check out Events" onClick={closeMenu}>
                  Events
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/contact">
                <a title="Contact Us" onClick={closeMenu}>
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/faqs">
                <a title="Frequently Asked Questions" onClick={closeMenu}>
                  FAQ's
                </a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
