'use client';
import React from "react";
import styles from "./content1.module.css";
import Image from "next/image";
import Containerimage1  from '../../../public/Productimages/content4image1.png';
import Containerimage2  from '../../../public/Productimages/content4image2.png';

const Content4: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* First Container */}
      <div className={styles.firstContainer}>
        <p className={styles.heading}>Warehouse Construction company</p>
        <Image
         src={Containerimage1}
          alt="Pre-Engineered Building"
          className={styles.image}
        />
        <div className={styles.textBox}>
          <h2>Selecting the Ideal Warehouse Contractors for Your Business
          </h2>
          <p>
          A warehouse shed is a freestanding structure designed to offer additional storage space for a wide range of items. Typically made from metal or steel with a sturdy frame, walls, and roof, these sheds can be customized to suit the unique needs of any business. They are commonly used for storing inventory, equipment, machinery, and other items that need protection from weather conditions. Warehouse sheds serve various industries such as manufacturing, logistics, agriculture, and construction. Their design often allows for easy assembly and disassembly, making them a flexible and cost-effective storage solution for businesses.          </p>
          <h2>
          Mekark Structure Pvt Ltd           </h2>
          <p>
          specializes in delivering top-notch warehouse shed solutions. Our team of experts offers custom designs and builds sheds in different sizes, styles, and materials tailored to your needs. Our sheds are built to be durable and low-maintenance, making them perfect for long-term storage. We also provide services like on-site storage, space rental, and warehouse management. With competitive pricing and outstanding customer service, Mekark ensures you receive the best warehouse shed solution for your business.          </p>
        </div>
      </div>

      {/* Second Container */}
      <div className={styles.secondContainer}>
        <div className={styles.flexBox}>
          <Image
         src={Containerimage2}
         alt="Pre-Engineered Structure"
            className={styles.largeImage}
          />
          <div className={styles.textBlock}>
            <h2>Prefabricated Warehouse Shed Solutions for Your Business</h2>
            <p>
            As a full-service provider, Mekark offers prefabricated warehouse shed solutions designed to fit any space. From custom designs to additional services like on-site storage and warehouse management, our experienced team guarantees high-quality, durable sheds that are easy to maintain. Count on us to meet your storage needs with cost-effective solutions and exceptional support.
           </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content4;
