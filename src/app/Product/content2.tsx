'use client';
import React from "react";
import styles from "./content2.module.css";
import Image from "next/image";
import Containerimage1  from '../../../public/Productimages/content2image1.svg';
import Containerimage2  from '../../../public/Productimages/content2image2.svg';

const Content2: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* First Container */}
      <div className={styles.firstContainer}>
        <p className={styles.heading}>Multi-Storey Steel Building</p>
        <Image
         src={Containerimage1}
          alt="Multi-Storey Steel Building"
          className={styles.image}
        />
        <div className={styles.textBox}>
          <h2>Cutting-Edge Solutions for Multi-Storey Steel Building Manufacturing
          </h2>
          <p>
          A multi-storey steel building uses steel as the main material for its frame, columns, and beams. Known for strength, durability, and flexibility, steel structures are commonly used in industrial and residential projects. They are lightweight, cost-effective, quick to erect, and fire-resistant, making them a safer and more efficient alternative to traditional buildings.
          </p>
          <h2>Mekark Multi-Storey Steel Building Manufacturer - Chennai
          </h2>
          <p>
          Steel is gaining popularity in high-rise construction due to its versatility, recyclability, and quick installation. It offers design flexibility, energy efficiency, and aligns with sustainability goals, making it ideal for modern urban development.
          </p>
          <p>
          Mekark, a top manufacturer in Chennai, offers customized, durable, and sustainable multi-storey steel building solutions. With years of industry experience, our expert team delivers cost-effective services tailored to meet customer needs.          </p>
        </div>
      </div>

      {/* Second Container */}
      <div className={styles.secondContainer}>
        <div className={styles.flexBox}>
          <Image
         src={Containerimage2}
         alt="Multi-Storey Steel Building2"
            className={styles.largeImage}
          />
          <div className={styles.textBlock}>
            <h2>Benefits of Mekark's Multi-Storey Steel Buildings</h2>
            <p>
           <b> Durable & Weather-Resistant:</b>  Long-lasting steel resists corrosion.

            </p>
            <p>
            <b>Flexible Design:</b>  Customizable to fit any project needs.

            </p>
            <p>
          <b>  Fast & Cost-Efficient:</b> Quick construction with reduced material and labor costs.
            </p>
            <p>
           <b> Eco-Friendly:</b> : Recyclable steel with energy-efficient features.

            </p>
            <p>
            <b> Safe & Secure: </b>Fire-resistant and built to withstand natural disasters.
            </p>
            <p>
            <b> Low Maintenance: </b> Minimal upkeep, reducing long-term costs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content2;
