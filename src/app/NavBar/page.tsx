'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import logo from "../../../public/Navbarimages/Logo.svg"; // Replace with actual logo path
import phoneIcon from "../../../public/Navbarimages/phoneicon.svg"; // Replace with phone icon path
import whatsappIcon from "../../../public/Navbarimages/whatsupicon.svg"; // Replace with WhatsApp icon path
import hamburgerIcon from "../../../public/Navbarimages/mdi_menu.svg"; // Replace with hamburger icon path
import closeIcon from "../../../public/HomeImages/clear.svg"; // Replace with close icon path

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
              <Link legacyBehavior href="/Product">
                <a title="View our Products">Products</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/Equipment">
                <a title="Explore Equipment">Equipment</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/Insights">
                <a title="Read Insights">Insights</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/Events">
                <a title="Check out Events">Events</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/Contact">
                <a title="Contact Us">Contact</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/Faq">
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

      {/* WhatsApp & Call Icons */}
      <div className={styles.mobileIcons}>
        <Link legacyBehavior href="tel:+1234567890">
          <a aria-label="Call us" className={styles.iconLink}>
            <Image src={phoneIcon} alt="Phone Icon" className={styles.icon} />
          </a>
        </Link>
        <Link legacyBehavior href="https://wa.me/1234567890">
          <a aria-label="Chat on WhatsApp" className={styles.iconLink}>
            <Image src={whatsappIcon} alt="WhatsApp Icon" className={styles.icon} />
          </a>
        </Link>

        {/* Hamburger Menu */}
        {!isMenuOpen && (
          <button className={styles.hamburgerIcon} onClick={toggleMenu} aria-label="Open menu">
            <Image src={hamburgerIcon} alt="Open Menu Icon" className={styles.hamburger} />
          </button>
        )}
      </div>

      {/* Background Overlay */}
      <div className={`${styles.overlay} ${isMenuOpen ? styles.showOverlay : ""}`} onClick={closeMenu}></div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ""}`}>
        {/* Close Button */}
        <div className={styles.intIconWrapper}>
          <button className={styles.intIconButton} onClick={closeMenu} aria-label="Close menu">
            <Image src={closeIcon} alt="Close Menu Icon" className={styles.intIcon} />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={styles.mobileNavLinks}>
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/About" },
            { name: "Products", path: "/Product" },
            { name: "Equipment", path: "/Equipment" },
            { name: "Insights", path: "/Insights" },
            { name: "Events", path: "/Events" },
            { name: "Contact", path: "/Contact" },
            { name: "FAQs", path: "/Faq" },
          ].map((link) => (
            <li key={link.name}>
              <Link legacyBehavior href={link.path}>
                <a title={link.name} onClick={closeMenu}>
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

    </nav>
  );
};

export default Navbar;