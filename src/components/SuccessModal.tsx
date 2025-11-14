// src/components/SuccessModal.tsx

import React from "react";
import styles from "./SuccessModal.module.css";
import { FaCheckCircle } from "react-icons/fa";

// Define the component's props for TypeScript
interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null; // Don't render anything if the modal is not open
  }

  return (
    // The dark overlay that covers the page
    <div className={styles.modalOverlay}>
      {/* The white modal box */}
      <div className={styles.modalContent}>
        <FaCheckCircle className={styles.icon} />
        <h2 className={styles.title}>Enquiry Sent!</h2>
        <p className={styles.message}>
          Thank you for reaching out. We have received your message and our team
          will get back to you shortly.
        </p>
        <button onClick={onClose} className={styles.closeButton}>
          Got it
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
