// src/components/Services.tsx

import React from "react";
import styles from "./Services.module.css";

// 1. Import the specific icons we need from the library
import { FaFileSignature, FaChartLine, FaUsers } from "react-icons/fa";

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <div className="container">
        {/* --- Section Headline --- */}
        <div className={styles.headlineContainer}>
          <h2 className={styles.headline}>
            Tailored Solutions for the Energy Sector
          </h2>
          <p className={styles.subheadline}>
            We provide a focused suite of financial services designed to ensure
            your projects are funded, successful, and sustainable.
          </p>
        </div>

        {/* --- Services Grid --- */}
        <div className={styles.servicesGrid}>
          {/* Card 1: Contract-Based Financing */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <FaFileSignature className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Contract-Based Financing</h3>
            <p className={styles.cardDescription}>
              Secure the critical funding you need to confidently execute
              high-value contracts with major oil and gas corporations.
            </p>
          </div>

          {/* Card 2: Growth Capital Facilities */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <FaChartLine className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Growth Capital Facilities</h3>
            <p className={styles.cardDescription}>
              Access flexible credit lines designed to support your company's
              expansion, equipment acquisition, and operational needs.
            </p>
          </div>

          {/* Card 3: Strategic Financial Guidance */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <FaUsers className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Strategic Financial Guidance</h3>
            <p className={styles.cardDescription}>
              We offer more than just capital. Our streamlined process and
              expert guidance ensure your projects are successful from start to
              finish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
