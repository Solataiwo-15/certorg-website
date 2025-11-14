// src/components/Contact.tsx

import React, { useState } from "react"; // 1. Import useState
import styles from "./Contact.module.css";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import SuccessModal from "./SuccessModal";

// Define a type for our form data for TypeScript
interface FormData {
  name: string;
  company: string;
  email: string;
  message: string;
}

const Contact = () => {
  // 2. State for form inputs
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  // 3. State for validation errors
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isModalOpen, setModalOpen] = useState(false);

  // 4. Handler for input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error for the field being edited
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  // 5. Validation and Submit Handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default page reload
    const validationErrors: Partial<FormData> = {};

    // Check for empty fields
    if (!formData.name.trim()) validationErrors.name = "Full Name is required.";
    if (!formData.company.trim())
      validationErrors.company = "Company Name is required.";
    if (!formData.email.trim()) {
      validationErrors.email = "Email Address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      // Simple email format check
      validationErrors.email = "Email address is invalid.";
    }
    if (!formData.message.trim())
      validationErrors.message = "Message is required.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Form is valid!
      setModalOpen(true);

      // Clear form and errors
      setErrors({});
      setFormData({ name: "", company: "", email: "", message: "" });
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <section id="contact-section" className={styles.contactSection}>
        <div className={`container ${styles.contactContainer}`}>
          <div className={styles.infoColumn}>
            <h2 className={styles.headline}>Let's Fuel Your Next Project.</h2>
            <p className={styles.subheadline}>
              Reach out to discover how our tailored financing can help you
              achieve your goals. Fill out the form and our team will be in
              touch shortly.
            </p>
            <div className={styles.contactDetails}>
              <a href="mailto:info@certorg.com" className={styles.contactItem}>
                <FaEnvelope className={styles.icon} /> info@certorg.com
              </a>
              <a href="tel:+1234567890" className={styles.contactItem}>
                <FaPhone className={styles.icon} /> +1 (234) 567-890
              </a>
            </div>
          </div>

          <div className={styles.formColumn}>
            {/* 6. Add onSubmit to the form tag */}
            <form
              className={styles.contactForm}
              onSubmit={handleSubmit}
              noValidate
            >
              {/* --- Full Name Input --- */}
              <div className={styles.inputGroup}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={errors.name ? styles.inputError : ""}
                />
                {/* 7. Conditionally render error message */}
                {errors.name && (
                  <p className={styles.errorMessage}>{errors.name}</p>
                )}
              </div>

              {/* --- Company Name Input --- */}
              <div className={styles.inputGroup}>
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Inc."
                  className={errors.company ? styles.inputError : ""}
                />
                {errors.company && (
                  <p className={styles.errorMessage}>{errors.company}</p>
                )}
              </div>

              {/* --- Email Address Input --- */}
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={errors.email ? styles.inputError : ""}
                />
                {errors.email && (
                  <p className={styles.errorMessage}>{errors.email}</p>
                )}
              </div>

              {/* --- Message Textarea --- */}
              <div className={styles.inputGroup}>
                <label htmlFor="message">How can we help?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className={errors.message ? styles.inputError : ""}
                />
                {errors.message && (
                  <p className={styles.errorMessage}>{errors.message}</p>
                )}
              </div>

              <button type="submit" className={styles.submitButton}>
                Submit Enquiry
                <FiArrowRight className={styles.buttonIcon} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 5. Render the modal component */}
      <SuccessModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Contact;
