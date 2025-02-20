'use client';
import React from "react";
import styles from "./content1.module.css";
import Image from "next/image";
import Containerimage1  from '../../../public/Productimages/content5image1.png';
import Containerimage2  from '../../../public/Productimages/content5image2.png';

const Content4: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* First Container */}
      <div className={styles.firstContainer}>
        <p className={styles.heading}>Industrial Shed</p>
        <Image
         src={Containerimage1}
          alt="Pre-Engineered Building"
          className={styles.image}
        />
        <div className={styles.textBox}>
          <h2>Ideal Industrial Shed Solutions for Your Business
          </h2>
          <p>
          Industrial sheds are vital for businesses needing dedicated spaces for storage, manufacturing, or processing. Built from high-quality materials, these sheds are designed to withstand tough weather and heavy loads, making them a reliable choice for long-term use. Their durability and corrosion resistance make them a popular option in various industries. Industrial sheds can also be customized with features like mezzanine levels, loading docks, and specialized storage solutions to optimize space and improve efficiency. A well-constructed shed can enhance productivity, reduce costs, and provide secure storage for inventory and equipment.          </p>
          <h2>
          Mekark          </h2>
          <p>
          is a leading manufacturer and supplier of industrial shed structures in India, offering top-tier solutions at competitive prices. Our sheds are built using high-quality materials and come with a lifetime guarantee of durability. We provide a wide range of customizable options, including insulation, ventilation, lighting, and specialized storage features.
          Known for timely project delivery, budget-friendly solutions, and exceptional customer support, Mekark is committed to safety and compliance with industry regulations. For businesses seeking quality, customization, and reliable expertise, Mekark is the best choice for industrial shed solutions.                 </p>
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
            <h2>Benefits of Choosing Mekark for Industrial Sheds</h2>
            <p>
           <b>Custom Solutions:</b> Mekark designs and builds industrial sheds customized to each business's unique sizes, shapes, and features.

            </p>
            <p>
            <b>Durability:</b> Built with high-quality materials for lasting performance.

            </p>
            <p>
          <b> Efficiency:</b>  Cost-effective, minimal disruption during construction.

            </p>
            <p>
           <b>Reliable Storage:</b>Secure, long-lasting solutions for your business.

            </p>
          
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content4;
