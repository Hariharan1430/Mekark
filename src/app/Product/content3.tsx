'use client';
import React from "react";
import styles from "./content1.module.css";
import Image from "next/image";
import Containerimage1  from '../../../public/Productimages/content3image1.png';
import Containerimage2  from '../../../public/Productimages/Containerimage1.svg';

const Content3: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* First Container */}
      <div className={styles.firstContainer}>
        <p className={styles.heading}>Space Frame Structure</p>
        <Image
         src={Containerimage1}
          alt="Pre-Engineered Building"
          className={styles.image}
        />
        <div className={styles.textBox}>
          <h2>Flexibility of Space Frame Structures
          </h2>
          <p>
          Space frame structures have transformed large-span building construction with their functionality and visual appeal. At Mekark, we design durable, functional, and aesthetically pleasing space frames, delivering engineering excellence in every project.
          </p>
          <h2>
          Benefits of Mekark's Multi-Storey Steel Buildings
          </h2>
          <p>
          Space frame structures offer numerous advantages, including design flexibility with limitless geometric possibilities, large-span capabilities without internal supports, and exceptional strength and durability to withstand various forces. While they may require higher initial investment, their lightweight nature reduces material and foundation costs, offering long-term savings. These structures are also eco-friendly, promoting natural light and ventilation to lower energy consumption. At Mekark, we specialize in turnkey solutions for factory shed buildings, focusing on efficiency and sustainability. We also provide high-quality glasswool panels for enhanced energy efficiency and noise reduction. Contact us for a quote today!          </p>
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
            <h2>Why Choose Mekark for Space Frame Structures?</h2>
            <p>
           <b> Expert Team:</b> Skilled professionals ensure structural integrity and aesthetic appeal.

            </p>
            <p>
            <b>Collaborative Approach:</b> Close partnerships with clients to realize unique visions using advanced design software.

            </p>
            <p>
          <b>  Quality Commitment:</b> Emphasis on premium materials and adherence to safety standards.

            </p>
            <p>
           <b> Timely Completion:</b> Efficient project management minimizes delays and supports client planning.


            </p>
            <p>
            <b>
            Customer Satisfaction:</b> Strong focus on service and communication, fostering lasting relationships and reliability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content3;
