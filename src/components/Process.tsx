import styles from "./Process.module.css";
import processGlobe from "../assets/images/process-globe.png";

const Process = () => {
  return (
    <section id="how-it-works" className={styles.processSection}>
      {/* This container is ONLY for the centered text content */}
      <div className="container">
        <h2 className={styles.headline}>
          Our <span className={styles.highlight}>3-Step</span> Process
        </h2>
      </div>

      {/* This is the new full-width container for the image and floating steps */}
      <div className={styles.graphicContainer}>
        <img
          src={processGlobe}
          alt="Globe with map pins"
          className={styles.image}
        />

        {/* The steps will be positioned relative to this full-width container */}
        <div className={`${styles.step} ${styles.step1}`}>
          <div className={styles.stepNumber}>1.</div>
          <div className={styles.stepText}>Submit Your Contract</div>
        </div>

        <div className={`${styles.step} ${styles.step2}`}>
          <div className={styles.stepNumber}>2.</div>
          <div className={styles.stepText}>Get Evaluated & Approved</div>
        </div>

        <div className={`${styles.step} ${styles.step3}`}>
          <div className={styles.stepNumber}>3.</div>
          <div className={styles.stepText}>
            Receive Funding & Execute Seamlessly
          </div>
        </div>
      </div>

      {/* This container is ONLY for the centered button */}
      <div className="container">
        <div className={styles.ctaWrapper}>
          <a href="mailto:certorg.io@gmail.com" className={styles.ctaButton}>
            Start your application today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
