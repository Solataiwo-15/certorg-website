// src/components/Footer.tsx

import styles from "./Footer.module.css";
import logoWhite from "../assets/certorg-logo-white.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.logoContainer}>
          <img
            src={logoWhite}
            alt="CertOrg Logo"
            className={styles.footerLogo}
          />
        </div>
        <div className={styles.copyright}>
          Copyright © 2025 CertOrg. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
