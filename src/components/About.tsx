// src/components/About.tsx

import styles from "./About.module.css";
import aboutImage from "../assets/about-image.jpg"; // 1. Import the image

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={`container ${styles.aboutContainer}`}>
        {/* Column 1: The Text Content (No changes here) */}
        <div className={styles.textContent}>
          <h2 className={styles.headline}>
            Your Strategic
            <br />
            Financial Partner.
          </h2>
          <p className={styles.bodyText}>
            CertOrg is a specialized financial services firm dedicated to
            empowering businesses within the oil and gas industry. We provide
            tailored credit facilities to support your contracts, enabling
            significant growth and operational excellence.
          </p>
          <p className={styles.bodyText}>
            Our focus is on delivering innovative financing solutions that help
            you navigate the complexities of the energy sector, ensuring
            seamless project execution and fostering sustainable, long-term
            partnerships.
          </p>
        </div>

        {/* Column 2: The Visual Element (Updated) */}
        <div className={styles.visualContent}>
          <div className={styles.visualBox}>
            {/* 2. Add the image tag */}
            <img
              src={aboutImage}
              alt="Modern architecture representing financial structure"
              className={styles.aboutImage}
            />
            {/* 3. The accent shape now sits on top of the image */}
            <div className={styles.accentShape}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
