import styles from "./CTA.module.css";
import ctaMoneyClip from "../assets/images/cta-money-clip.png";

const CTA = () => {
  return (
    // This top-level section is now just a container for the two parts
    <section id="consultation" className={styles.ctaSection}>
      {/* Part 1: Centered content (headline and buttons) */}
      <div className={`container ${styles.contentWrapper}`}>
        <h2 className={styles.headline}>
          Request a <span className={styles.highlight}>schedule</span> for
          consultation
        </h2>

        <div className={styles.buttonGroup}>
          <a href="#financing-today" className={styles.ctaButtonPrimary}>
            Apply for Financing Today
          </a>
          <a href="tel:+2347017653091" className={styles.ctaButtonSecondary}>
            Call us (+2347017653091)
          </a>
        </div>
      </div>

      {/* Part 2: The full-bleed background image */}
      <div className={styles.imageWrapper}>
        <img
          src={ctaMoneyClip}
          alt="Money hanging from a clip"
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default CTA;
