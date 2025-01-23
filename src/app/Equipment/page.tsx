'use client'
import React, { useState } from 'react';
import styles from "./equipment.module.css";
import Box3 from "./box3";
import GalleryBox from './gallery';

const Equipmentpage = () => {
  const [activeTab, setActiveTab] = useState<'Pressure Part' | 'Non Pressure Part' | 'Storage Unit'>('Pressure Part');

  const handleTabChange = (tab: 'Pressure Part' | 'Non Pressure Part' | 'Storage Unit') => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.container}>
      {/* Box1 */}
      <div className={styles.box1}>
        <div className={styles.overlay}>
          <p className={styles.title}>{activeTab}</p> 
        </div>
      </div>

      {/* Box2 */}
      <div className={styles.box2}>
        <p className={styles.title1box2}>Manufacture and Supplier</p>
        <p className={styles.title2box2}>for {activeTab}</p> 
        <p className={styles.parabox2}>
          Mekark Provide high Quality {activeTab.toLowerCase()} equipment Accessories in Chennai. We are business to
          business Manufacturer and Supplier for all our customers. Our Service Provider including
        </p>
      </div>

      <Box3 onTabChange={handleTabChange} /> 
      <GalleryBox />
    </div>
  );
};

export default Equipmentpage;
