import styles from "./Footer.module.css";
import logo from "../assets/certorg-logo-white.svg";
// 1. Import the new background image
import footerBg from "../assets/images/pemex-collage.jpg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* The faint background image */}
      <img src={footerBg} alt="" className={styles.backgroundImage} />

      {/* The container for all the content, sits on top of the image */}
      <div className={`container ${styles.footerContent}`}>
        {/* Top row with three columns */}
        <div className={styles.topRow}>
          <div className={styles.logoColumn}>
            <img src={logo} alt="CertOrg Logo" className={styles.footerLogo} />
          </div>
          <div className={styles.linksColumn}>
            <a href="mailto:info@certorg.com">Contact details</a>
            <a href="mailto:info@certorg.com">Social links</a>
            <a href="mailto:info@certorg.com">Compliance</a>
          </div>
        </div>

        {/* Bottom row with the full copyright text */}
        <div className={styles.bottomRow}>
          <p>Copyright © 2025 CertOrg. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
