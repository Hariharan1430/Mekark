'use client'
import React from "react";
import styles from "./content1.module.css";
import Image from "next/image";
import Containerimage1  from '../../../public/Productimages/Containerimage1.svg';
import Containerimage2  from '../../../public/Productimages/Containerimage2.svg';

const PreEngineeredBuilding: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* First Container */}
      <div className={styles.firstContainer}>
        <p className={styles.heading}>Pre-Engineered Building Manufacturer</p>
        <Image
         src={Containerimage2}
          alt="Pre-Engineered Building"
          className={styles.image}
        />
        <div className={styles.textBox}>
          <h2>How Pre-Engineered Building Manufactured?</h2>
          <p>
          Pre-engineered Buildings As the name implies, it involves the pre-engineering of structural parts. PEB supplies portions that vary in length depending on the requirement. These are steel-framed factories that are welded together on-site. It can easily be enlarged later by simply adding bays. Its high-quality painting system ensures extended durability and little maintenance. PEBs are typically used for industrial, commercial, and institutional buildings, such as warehouses, factories, schools, and retail buildings. PEBs are typically used for industrial, commercial, and institutional buildings, such as warehouses, factories, schools, and retail buildings. They can also be used for infrastructure projects such as airports, bridges, and railways.

          </p>
          <p>
          Pre-engineered buildings (PEBs) are structures that are designed, manufactured, and assembled off-site, typically in a factory, using advanced manufacturing techniques and technology. PEBs are constructed using pre-fabricated components that are assembled on-site, resulting in a faster, more efficient construction process compared to traditional construction methods.

          </p>
          <p>
          Mekark is a leading pre-engineered buildings (PEBs) manufacturer that offers customized and cost-effective solutions for commercial, industrial, and residential structures. With over 20 years of experience, their innovative designs and use of advanced technology ensure quality and timely delivery of projects. Mekark's commitment to sustainability and customer satisfaction makes them a reliable choice for PEBs.
          </p>
        </div>
      </div>

      {/* Second Container */}
      <div className={styles.secondContainer}>
        <div className={styles.flexBox}>
          <Image
         src={Containerimage1}
         alt="Pre-Engineered Structure"
            className={styles.largeImage}
          />
          <div className={styles.textBlock}>
            <h2>Mekark Pre-Engineered Building Manufacturer Offering</h2>
            <p>
           <b> Construction time:</b> PEB reduces the total construction cost by the least 40% which leads to faster occupancy and early revenue.

            </p>
            <p>
            <b>Lower cost:</b> Saving is accomplished in design, manufacturing and erection cost.

            </p>
            <p>
          <b>  Large clear span:</b> In PEB the buildings can be given up to 90m clear spans which is the important advantage of PEB with column free space.

            </p>
            <p>
           <b> Flexibility of expansion:</b> PEB can be easily expanded in length by adding additional bays.


            </p>
            <p>
            <b> Quality control:</b> PEB's are manufactured under controlled conditions depending on the site and hence the quality is assured.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PreEngineeredBuilding;
