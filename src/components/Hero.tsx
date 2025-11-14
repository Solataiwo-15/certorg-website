// src/components/Hero.tsx

import React from "react";
import styles from "./Hero.module.css";
import logoWhite from "../assets/certorg-logo-white.svg";

const Hero = () => {
  // 1. Define the handler function
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className={styles.heroWrapper}>
      <div className={styles.patternOverlay}></div>

      <div className={styles.heroContent}>
        <div className={styles.logoContainer}>
          <img src={logoWhite} alt="CertOrg Logo" className={styles.logo} />
        </div>

        <h1 className={styles.headline}>
          Powering Ambition in the <br />
          <span className={styles.highlight}>Energy Sector.</span>
        </h1>

        <p className={styles.subheadline}>
          CertOrg delivers specialized credit facilities for oil and gas
          contracts, turning your opportunities into operational success.
        </p>

        <div className={styles.buttonWrapper}>
          {/* 2. Add the onClick event to the button */}
          <button className={styles.ctaButton} onClick={handleScrollToContact}>
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
