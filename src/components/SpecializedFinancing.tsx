import styles from "./SpecializedFinancing.module.css";
import financingHand from "../assets/images/financing-hand.png";

const SpecializedFinancing = () => {
  return (
    // The grid container is now on the top-level section element
    <section id="about" className={styles.financingSection}>
      {/* Column 1: Image - This will now occupy the first grid column */}
      <div className={styles.imageColumn}>
        <img
          src={financingHand}
          alt="Hand holding a stack of coins with a plant growing"
          className={styles.image}
        />
      </div>

      {/* Column 2: Text - This will occupy the second grid column */}
      <div className={styles.textColumn}>
        <h2 className={styles.headline}>
          Specialized <span className={styles.highlight}>Financing</span> for{" "}
          <span className={styles.highlight}>Energy-Sector</span> Businesses
        </h2>
        <p className={styles.bodyText}>
          We provide innovative, contract-backed credit solutions designed
          specifically for companies working with oil and gas operators.
        </p>
        <p className={styles.bodyText}>
          Our goal is simple, help you execute projects smoothly, maintain
          operational efficiency, and sustain long-term business growth.
        </p>
      </div>
    </section>
  );
};

export default SpecializedFinancing;
