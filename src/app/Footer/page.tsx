'use client'
import styles from "./footer.module.css";
import Image from "next/image";
import WorkerImage from "../../../public/FooterImages/Man.svg"
import Logo from "../../../public/FooterImages/Footerlogo.svg"
import Locationlogo from "../../../public/FooterImages/location.svg"
import Phonelogo from "../../../public/FooterImages/phone.svg"
import Messagelogo from "../../../public/FooterImages/message.svg"
import Emaillogo from "../../../public/FooterImages/email.svg"
import Fbicon from "../../../public/FooterImages/fbicon.svg"
import Youtubeicon from "../../../public/FooterImages/youtubeicon.svg"
import Linkedicon from "../../../public/FooterImages/linkedicon.svg"
import Whatsupicon from "../../../public/FooterImages/whatsupicon.svg"
import Instaicon from "../../../public/FooterImages/instaicon.svg"



const Footer = () => {
  return (
    <div className={styles.mainContainer}>
      {/* Worker Image Section */}
      <div className={styles.workerContainer}>
        <Image
          src={WorkerImage}
          alt="Worker Image"
          width={250}
          height={250}
          className={styles.workerImage}
          priority
        />
      </div>

      {/* Blue Box Section */}
      <div className={styles.blueBoxContainer}>
        <div className={styles.headingContainer}>
          <p className={styles.headingText}>Let's Get in Touch!</p>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.contentContainer}>
        {/* Left Box */}
        <div className={styles.leftBox}>
          <div className={styles.logoSection}>
            <Image
              src={Logo}
              alt="Logo"
              width={120}
              height={120}
              priority
            />
            <p className={styles.description}>
              Mekark provides innovative solutions for <br></br>
               residential and commercial
              clients worldwide.
            </p>
          </div>
        </div>

        {/* Right Box */}
        <div className={styles.rightBox}>
         

          {/* Useful Links */}
          <div className={styles.linksBox}>
            <h3 className={styles.sectionTitle}>Useful Links</h3>
            <ul className={styles.linkList}>
              <li><a href="/about">About Us</a></li>
              <li><a href="/products">Our Products</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/career">Career</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
           {/* Quick Links */}
           <div className={styles.linksBox}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li><a href="/peb">PEB Services</a></li>
              <li><a href="/mechanical">Mechanical System</a></li>
              <li><a href="/electrical">Electrical System</a></li>
              <li><a href="/plumbing">Plumbing System</a></li>
              <li><a href="/hvac">HVAC System</a></li>
              <li><a href="/warehouse Constructions">Warehouse Constructions</a></li>
            </ul>
          </div>

          {/* Address Area */}
          <div className={styles.addressBox}>
            <h3 className={styles.sectionTitle}>Our Address</h3>
            <div className={styles.addressContent}>
              <Image src={Locationlogo} alt="Location Icon" width={20} height={20} />
              <p className={styles.linkList}>15, 62nd street, Ashok Nagar, Chennai-600083</p>
            </div>
            <div className={styles.addressContent}>
              <Image src={Phonelogo} alt="Phone Icon" width={20} height={20} />
              <p className={styles.linkList}>Phone: +91 97909 24754</p>
            </div>
            <div className={styles.addressContent}>
              <Image src={Messagelogo} alt="message Icon" width={20} height={20} />
              <p className={styles.linkList}>Tel: 044 - 47709518</p>
            </div>
            <div className={styles.addressContent}>
              <Image src={Emaillogo} alt="Email Icon" width={20} height={20} />
              <p className={styles.linkList}>Email: admin@mekark.com</p>
            </div>

            {/* Social Media */}
            <div className={styles.socialIcons}>
              <span className={styles.sectionTitle}>Follow us:</span>
              <a href="https://www.facebook.com" target="_blank">
                <Image src={Fbicon} alt="Facebook" width={24} height={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <Image src={Youtubeicon} alt="Instagram" width={24} height={24} />
              </a>
              <a href="https://www.youtube.com" target="_blank">
                <Image src={Linkedicon} alt="YouTube" width={24} height={24} />
              </a>
              <a href="https://www.youtube.com" target="_blank">
                <Image src={Whatsupicon} alt="YouTube" width={24} height={24} />
              </a>
              <a href="https://www.youtube.com" target="_blank">
                <Image src={Instaicon} alt="YouTube" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <p>Copyright © 2024 Mekark</p>
        </div>
        <div className={styles.privacyPolicy}>
          <a href="/privacy">Privacy</a>&<a href="/terms">PolicyTerms</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
