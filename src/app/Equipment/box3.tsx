'use client'
import React, { useState } from 'react';
import styles from './box3.module.css';

const Box3 = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabContents = [
    [
      { icon: "/EquipmentImages/Equpiment-icon1.svg", text: "Pressure Vessel" },
      { icon: "/EquipmentImages/Equpiment-icon2.svg", text: "Jacket Vessel" },
      { icon: "/EquipmentImages/Equpiment-icon3.svg", text: "Super Heater Coil" },
      { icon: "/EquipmentImages/Equpiment-icon4.svg", text: "Heat Exchanger" },
      { icon: "/EquipmentImages/Equpiment-icon5.svg", text: "Economizer Coil" },
      { icon: "/EquipmentImages/Equpiment-icon6.svg", text: "Copper Heater Coil" },
      { icon: "/EquipmentImages/Equpiment-icon7.svg", text: "Evaporator" },
      { icon: "/EquipmentImages/Equpiment-icon8.svg", text: "Condenser" },
      { icon: "/EquipmentImages/Equpiment-icon9.svg", text: "Piping & Pipeline Support" },
    ],
    [
      { icon: "/EquipmentImages/Equpiment-icon1.svg", text: "Pressure Vessel123" },
      { icon: "/EquipmentImages/Equpiment-icon2.svg", text: "Jacket Vessel" },
      { icon: "/EquipmentImages/Equpiment-icon3.svg", text: "Super Heater Coil" },
      { icon: "/EquipmentImages/Equpiment-icon4.svg", text: "Heat Exchanger" },
      { icon: "/EquipmentImages/Equpiment-icon5.svg", text: "Economizer Coil" },
      { icon: "/EquipmentImages/Equpiment-icon6.svg", text: "Copper Heater Coil" },
      { icon: "/EquipmentImages/Equpiment-icon7.svg", text: "Evaporator" },
      { icon: "/EquipmentImages/Equpiment-icon8.svg", text: "Condenser" },
      { icon: "/EquipmentImages/Equpiment-icon9.svg", text: "Piping & Pipeline Support" },
    ],
    [...Array(3).fill({ icon: '/icons/icon1.png', text: 'Box' })],
  ];

  return (
    <div className={styles.box3}>
      {/* Tab Bar */}
      <div className={styles.tabBar}>
        {['Tab 1', 'Tab 2', 'Tab 3'].map((label, idx) => (
          <button
            key={idx}
            className={`${styles.tabButton} ${activeTab === idx + 1 ? styles.active : ''}`}
            onClick={() => setActiveTab(idx + 1)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>
        <div className={styles.grid} data-tab={activeTab}>
          {tabContents[activeTab - 1].map((item, idx) => (
            <div key={idx} className={styles.gridItem}>
              <div className={styles.icon}>
                <img src={item.icon} alt={item.text} />
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Box3;
