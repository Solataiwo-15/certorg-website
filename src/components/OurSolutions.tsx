// src/components/OurSolutions.tsx

import React from "react";
import styles from "./OurSolutions.module.css";
import solutionsMoney from "../assets/images/solutions-money.png";

const OurSolutions = () => {
  return (
    <section id="offerings" className={styles.solutionsSection}>
      <div className={`container ${styles.contentWrapper}`}>
        {/* Column 1: Text */}
        <div className={styles.textColumn}>
          <h2 className={styles.headline}>
            Our <span className={styles.highlight}>Financing</span> Solutions
          </h2>
          <ul className={styles.solutionsList}>
            <li>
              <strong>Contract Financing</strong>
              <p>Unlock funds tied to confirmed oil & gas contracts.</p>
            </li>
            <li>
              <strong>Invoice & Receivable Financing</strong>
              <p>Improve cash flow while awaiting payment.</p>
            </li>
            <li>
              <strong>Working Capital Support</strong>
              <p>Maintain smooth operations throughout project cycles.</p>
            </li>
            <li>
              <strong>Equipment Financing</strong>
              <p>Get essential tools without upfront strain.</p>
            </li>
          </ul>
        </div>

        {/* 
          =======================================================
          THE FIX: The extra divs for the circles have been removed.
          We only need the image itself now.
          =======================================================
        */}
        <div className={styles.imageColumn}>
          <img
            src={solutionsMoney}
            alt="Hands counting money with decorative shapes"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
