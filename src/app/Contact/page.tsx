'use client';
import React, { useState } from "react";
import styles from "./contact.module.css";

const Contactpage: React.FC = () => {
  const [countryCode, setCountryCode] = useState("+91"); 

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(e.target.value);
  };
  return (
    <div className={styles.container}>
      {/* Box1 */}
      <div className={styles.box1}>
        <div className={styles.overlay}>
          <p className={styles.title}>Get in touch with us</p>
        </div>
      </div>

      {/* Box2 */}
         <div className={styles.box2}>
      {/* Container 1: Contact Form */}
      <div className={styles.container1}>
      <p className={styles.heading}>Contact Us</p>
      <p className={styles.subheading}>
        We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
      </p>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Your name" className={styles.textfield} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="you@company.com" className={styles.textfield} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="phone">Phone number</label>
          <div className={styles.phoneField}>
            <select
              id="country-code"
              className={styles.countryCode}
              value={countryCode}
              onChange={handleCountryChange}
            >
              <option value="+91">Ind </option>
              <option value="+1">USA </option>
              <option value="+44">UK </option>
              <option value="+61">AUS</option>
              <option value="+81">JPN </option>
            </select>
            <input
              id="phone"
              type="tel"
              placeholder={`${countryCode} 00000 00000`}
              className={styles.phoneInput}
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="help">How can we help?</label>
          <textarea
            id="help"
            placeholder="Tell us a little about the project..."
            className={styles.textarea}
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>

      {/* Container 2: Map */}
      <div className={styles.mapContainer}>
        <iframe
          title="map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.8390132040732!2d80.2137121!3d13.0270537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52671dc9924e57%3A0x40f61357c3b2f5ea!2sMEKARK!5e0!3m2!1sen!2sin!4v1700000000000"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
      {/* Box3 */}
    </div>
  );
};

export default Contactpage;
