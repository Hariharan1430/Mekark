'use client'
import React from 'react';
import styles from './box3.module.css';
import Image from 'next/image';
import icon1 from '../../../public/Contactimages/map.svg'
import icon2 from '../../../public/Contactimages/phone.svg'
import icon3 from '../../../public/Contactimages/ph_phone.svg'
import icon4 from '../../../public/Contactimages/mail.svg'



const ContactBox3 = () => {
  return (
    <div className={styles.mainContainer}>
      {/* First Container: Image */}
      <div className={styles.imageContainer}></div>

      {/* Second Container: Contact Info */}
      <div className={styles.contactInfoContainer}>
        <p className={styles.heading}>Contact Info</p>
        <div className={styles.infoRow}>
          <Image
            src={icon1}
            alt="Location"
            width={20}
            height={20}
            className={styles.icon}
          />
          <p>15, 62nd street, Ashok Nagar, Chennai - 600083</p>
        </div>
        <div className={styles.infoRow}>
          <Image
            src={icon1}
            alt="Location"
            width={20}
            height={20}
            className={styles.icon}
          />
          <p>Ram Complex, Ground Floor, Iyar Bungalow, Madurai - 625 014</p>
        </div>
      </div>

      {/* Third Container: Phone and Email */}
      <div className={styles.contactDetailsContainer}>
        <div className={styles.detailsRow}>
          <Image
            src={icon2}
            alt="Phone"
            width={20}
            height={20}
            className={styles.icon}
          />
          <p>+91 97909 24754</p>
        </div>
        <div className={styles.detailsRow}>
          <Image
            src={icon2}
            alt="Phone"
            width={20}
            height={20}
            className={styles.icon}
          />
          <p>+91 78239 67389</p>
        </div>
        <div className={styles.detailsRow}>
          <Image
            src={icon3}
            alt="Landline"
            width={20}
            height={20}
            className={styles.icon}
          />
          <p>044 - 47709518</p>
        </div>
        <div className={styles.detailsRow}>
          <Image
            src={icon4}
            alt="Email"
            width={20}
            height={20}
            className={styles.icon}
          />
          <p>admin@mekark.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactBox3;
