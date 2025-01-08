'use client';
import React, { useState } from 'react';
import styles from './box3.module.css';

type Box3Props = {
  onTabChange: (tab: 'Pressure Part' | 'Non Pressure Part' | 'Storage Unit') => void;
};

const Box3: React.FC<Box3Props> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState<'Pressure Part' | 'Non Pressure Part' | 'Storage Unit'>('Pressure Part');

  const handleTabChange = (tab: 'Pressure Part' | 'Non Pressure Part' | 'Storage Unit') => {
    setActiveTab(tab);
    onTabChange(tab); 
  };
  const pressureBoxes = [
    { id: 1, icon: "/EquipmentImages/Equpiment-icon1.svg", text: "Pressure Vessel" },
    { id: 2, icon: "/EquipmentImages/Equpiment-icon2.svg", text: "Jacket Vessel" },
    { id: 3, icon: "/EquipmentImages/Equpiment-icon3.svg", text: "Super Heater Coil" },
    { id: 4, icon: "/EquipmentImages/Equpiment-icon4.svg", text: "Heat Exchanger" },
    { id: 5, icon: "/EquipmentImages/Equpiment-icon5.svg", text: "Economizer Coil" },
    { id: 6, icon: "/EquipmentImages/Equpiment-icon6.svg", text: "Copper Heater Coil" },
    { id: 7, icon: "/EquipmentImages/Equpiment-icon7.svg", text: "Evaporator" },
    { id: 8, icon: "/EquipmentImages/Equpiment-icon8.svg", text: "Condenser" },
    { id: 9, icon: "/EquipmentImages/Equpiment-icon9.svg", text: "Piping & Pipeline Support" },
  ];

  const nonPressureBoxes = [
    { id: 1, icon: "/EquipmentImages/Equpiment-icon10.svg", text: "Non-IBR Boiler" },
    { id: 2, icon: "/EquipmentImages/Equpiment-icon11.svg", text: "Air Preheater" },
    { id: 3, icon: "/EquipmentImages/Equpiment-icon12.svg", text: "Non-IBR Boiler" },
    { id: 4, icon: "/EquipmentImages/Equpiment-icon13.svg", text: " Dust Collector" },
    { id: 5, icon: "/EquipmentImages/Equpiment-icon14.svg", text: " Ducting System" },
    { id: 6, icon: "/EquipmentImages/Equpiment-icon15.svg", text: "Dust Collector" },
    { id: 7, icon: "/EquipmentImages/Equpiment-icon16.svg", text: "Klin" },
    { id: 8, icon: "/EquipmentImages/Equpiment-icon17.svg", text: "Wind mill tower" },
    { id: 9, icon: "/EquipmentImages/Equpiment-icon18.svg", text: "  Wind mill turbine " },
  ];

  const storageBoxes = [
    { id: 1, icon: "/EquipmentImages/Equpiment-icon19.svg", text: " Chemical Storage Tank" },
    { id: 2, icon: "/EquipmentImages/Equpiment-icon20.svg", text: "Oil Storage Tank" },
    { id: 3, icon: "/EquipmentImages/Equpiment-icon21.svg", text: "Water Storage Tank" },
  ];
 
 
  const renderBoxes = (boxes: { id: number; icon: string; text: string }[]) => (
    <div className={styles.boxContainer}>
      <div
        className={`${styles.innerContainer} ${
          activeTab === 'Storage Unit' ? styles.storageUnit : ''
        }`}
      >
        {boxes.map((box) => (
          <div key={box.id} className={styles.box}>
            <div className={styles.iconContainer}>
              <img src={box.icon} alt={box.text} className={styles.icon} />
            </div>
            <p className={styles.text}>{box.text}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.box3}>
    <div className={styles.tabBar}>
      <button
        className={activeTab === 'Pressure Part' ? styles.activeTab : styles.tab}
        onClick={() => handleTabChange('Pressure Part')}
      >
        Pressure Part
      </button>
      <button
        className={activeTab === 'Non Pressure Part' ? styles.activeTab : styles.tab}
        onClick={() => handleTabChange('Non Pressure Part')}
      >
        Non Pressure Part
      </button>
      <button
        className={activeTab === 'Storage Unit' ? styles.activeTab : styles.tab}
        onClick={() => handleTabChange('Storage Unit')}
      >
        Storage Unit
      </button>
    </div>
    <div className={styles.content}>
      {activeTab === 'Pressure Part' && renderBoxes(pressureBoxes)}
      {activeTab === 'Non Pressure Part' && renderBoxes(nonPressureBoxes)}
      {activeTab === 'Storage Unit' && renderBoxes(storageBoxes)}
    </div>
  </div>
);
};


export default Box3;
