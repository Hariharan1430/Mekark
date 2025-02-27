'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import styles from "./navbar.module.css";
import logo from "../../../public/Navbarimages/Logo.svg"; 
import phoneIcon from "../../../public/Navbarimages/phoneicon.svg";
import whatsappIcon from "../../../public/Navbarimages/whatsupicon.svg";
import hamburgerIcon from "../../../public/Navbarimages/mdi_menu.svg"; 
import closeIcon from "../../../public/HomeImages/clear.svg"; 

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); 

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path: string) => {
    // Remove trailing slashes for consistent comparison
    const currentPath = pathname.replace(/\/+$/, ""); 
    const targetPath = path.replace(/\/+$/, ""); 
    return currentPath === targetPath;
  };

  return (
    <nav className={styles.navbarContainer} aria-label="Main Navigation">
      {/* Desktop/Laptop View */}
      <div className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logoBox}>
          <Link href="/" passHref legacyBehavior>
            <a aria-label="Home">
              <Image src={logo} alt="Company Logo" className={styles.logo} />
            </a>
          </Link>
        </div>

        {/* Links and Icons */}
        <div className={styles.linksAndIcons}>
          {/* Navigation Links */}
          <ul className={styles.navLinks}>
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/About" },
              { name: "Products", path: "/Product" },
              { name: "Equipment", path: "/Equipment" },
              { name: "Insights", path: "/Insights" },
              { name: "Events", path: "/Events" },
              { name: "Contact", path: "/Contact" },
              { name: "FAQ's", path: "/Faq" },
            ].map((link) => (
              <li key={link.name}>
                <Link href={link.path} passHref legacyBehavior>
                  <a
                    title={`Go to ${link.name}`}
                    className={isActive(link.path) ? styles.activeLink : ""}
                  >
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className={styles.iconBox}>
            <Link href="tel:+1234567890" passHref legacyBehavior>
              <a aria-label="Call us" className={styles.iconLink}>
                <Image src={phoneIcon} alt="Phone Icon" className={styles.icon} />
              </a>
            </Link>
            <Link href="https://wa.me/1234567890" passHref legacyBehavior>
              <a
                aria-label="Chat on WhatsApp"
                className={styles.iconLink}
                target="_blank"
                rel="noopener noreferrer"
              >
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
          <Link href="/" passHref legacyBehavior>
            <a aria-label="Home">
              <Image src={logo} alt="Company Logo" className={styles.logo} />
            </a>
          </Link>
        </div>

        {/* WhatsApp & Call Icons */}
        <div className={styles.mobileIcons}>
          <Link href="tel:+1234567890" passHref legacyBehavior>
            <a aria-label="Call us" className={styles.iconLink}>
              <Image src={phoneIcon} alt="Phone Icon" className={styles.icon} />
            </a>
          </Link>
          <Link href="https://wa.me/1234567890" passHref legacyBehavior>
            <a
              aria-label="Chat on WhatsApp"
              className={styles.iconLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={whatsappIcon} alt="WhatsApp Icon" className={styles.icon} />
            </a>
          </Link>

          {/* Hamburger Menu */}
          {!isMenuOpen && (
            <button
              className={styles.hamburgerIcon}
              onClick={toggleMenu}
              aria-label="Open menu"
            >
              <Image
                src={hamburgerIcon}
                alt="Open Menu Icon"
                className={styles.hamburger}
              />
            </button>
          )}
        </div>

        {/* Background Overlay */}
        <div
          className={`${styles.overlay} ${isMenuOpen ? styles.showOverlay : ""}`}
          onClick={closeMenu}
        ></div>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ""}`}>
          {/* Close Button */}
          <div className={styles.intIconWrapper}>
            <button
              className={styles.intIconButton}
              onClick={closeMenu}
              aria-label="Close menu"
            >
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
                <Link href={link.path} passHref legacyBehavior>
                  <a
                    title={`Go to ${link.name}`}
                    className={isActive(link.path) ? styles.activeLink : ""}
                    onClick={closeMenu}
                  >
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