// src/components/BuiltForEnergy.tsx

import React from "react";
import styles from "./BuiltForEnergy.module.css";
import energyIndustry from "../assets/images/energy-industry.png";

const BuiltForEnergy = () => {
  return (
    <section id="why-choose-us" className={styles.energySection}>
      {/* Column 1: Image */}
      <div className={styles.imageColumn}>
        <img
          src={energyIndustry}
          alt="Surreal collage representing the energy industry"
          className={styles.image}
        />
      </div>

      {/* Column 2: Text */}
      <div className={styles.textColumn}>
        <h2 className={styles.headline}>
          Built for the <span className={styles.highlight}>Energy</span> Sector
        </h2>
        <ul className={styles.featuresList}>
          <li>Deep understanding of oil & gas project cycles</li>
          <li>Fast, reliable credit disbursement</li>
          <li>Flexible terms tailored to contract duration</li>
          <li>Trusted partner for sustainable business growth</li>
          <li>Transparent processes and expert guidance</li>
        </ul>
      </div>
    </section>
  );
};

export default BuiltForEnergy;
