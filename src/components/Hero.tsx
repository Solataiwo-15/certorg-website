import styles from "./Hero.module.css";
import heroBg from "../assets/images/hero-background.jpg";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <img
        src={heroBg}
        alt="Oil rig at dusk"
        className={styles.backgroundImage}
      />
      <div className={styles.overlay}></div>

      {/* 
        ===========================================================
        THE FIX IS HERE: We have separated the container and content.
        ===========================================================
      */}

      {/* This outer div sets the max-width and aligns the whole block */}
      <div className="container">
        {/* This inner div holds the actual text and buttons */}
        <div className={styles.heroContent}>
          <h1 className={styles.headline}>
            <span className={styles.highlight}>Empowering</span> your growth in
            the oil & gas Sector
          </h1>
          <p className={styles.subheadline}>
            Tailored credit facilities that support your contracts, strengthen
            operations, and move your projects forward seamlessly.
          </p>
          <div className={styles.buttonGroup}>
            <a
              href="mailto:certorg.io@gmail.com"
              className={styles.ctaButtonPrimary}
            >
              Get financing support
            </a>
            <a
              href="mailto:certorg.io@gmail.com"
              className={styles.ctaButtonSecondary}
            >
              Book consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
