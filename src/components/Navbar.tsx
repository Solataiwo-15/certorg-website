import { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/certorg-logo-white.svg"; // Assuming you have the white logo
import { FiMenu, FiX } from "react-icons/fi"; // Icons for the hamburger menu

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <a href="/" className={styles.logoLink}>
          <img src={logo} alt="CertOrg Logo" className={styles.logo} />
        </a>

        <nav
          className={`${styles.navLinks} ${
            isMobileMenuOpen ? styles.open : ""
          }`}
        >
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#offerings">Offerings</a>
            </li>
            <li>
              <a href="#why-choose-us">Why choose us</a>
            </li>
            <li>
              <a href="#how-it-works">How it works</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
        </nav>

        <button className={styles.hamburger} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
