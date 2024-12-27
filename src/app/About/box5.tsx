import React, { useState } from 'react';
import styles from './box5.module.css';

const Box5: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vision' | 'equipment' | 'quality'>('vision');

  const handleTabChange = (tab: 'vision' | 'equipment' | 'quality') => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.box5}>
      {/* Tab Bar */}
      <div className={styles.tabBar}>
        <button
          className={activeTab === "vision" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("vision")}
        >
          <p className={styles.tabBarText}>VISION</p>
        </button>
        <button
          className={activeTab === "equipment" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("equipment")}
        >
          <p className={styles.tabBarText}>EQUIPMENT</p>
        </button>
        <button
          className={activeTab === "quality" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("quality")}
        >
          <p className={styles.tabBarText}>QUALITY</p>
        </button>
      </div>

      {/* Content Section */}
      <div className={styles.content}>
        {activeTab === 'vision' && (
          <>
            <div className={styles.imageContainer}>
              <img
                src="/Aboutimages/Tabimage1.png"
                alt="Vision"
                className={styles.image}
              />
            </div>
            <div className={styles.textContainer}>
              <p>
                Our Vision Is To Become The Most Respected Solution Providers In The
                Manufacturing Industry And Build A Modern Society. We Also Have A
                Services Sector That Strives To Achieve The Same Level Of Excellence And
                Cost-Effective Turnkey Solution For Our Customers.
              </p>
            </div>
          </>
        )}

        {activeTab === 'equipment' && (
          <>
            <div className={styles.imageContainer}>
              <img
                src="/path-to-photo2.jpg"
                alt="Equipment"
                className={styles.image}
              />
            </div>
            <div className={styles.textContainer}>
              <p>Equipment content goes here. Add the appropriate content for this tab.</p>
            </div>
          </>
        )}

        {activeTab === 'quality' && (
          <>
            <div className={styles.imageContainer}>
              <img
                src="/path-to-photo3.jpg"
                alt="Quality"
                className={styles.image}
              />
            </div>
            <div className={styles.textContainer}>
              <p>Quality content goes here. Add the appropriate content for this tab.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Box5;
