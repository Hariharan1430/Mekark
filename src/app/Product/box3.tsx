'use client';
import React, { useState } from 'react';
import styles from './box3.module.css';
import Right from '../../../public/Productimages/RightArrow.svg';
import Left from '../../../public/Productimages/LeftArrow.svg';
import Image from 'next/image';
import ContentBox1 from './content1';


const TabBar: React.FC = () => {
  const tabs = [
    'PRE-ENGINEERED BUILDING',
    'MULTI-STOREY STEEL BUILDING',
    'SPACE FRAME STRUCTURE',
    'WAREHOUSE SHED',
    'INDUSTRIAL SHED',
    'FACTORY BUILDINGS',
    'INDUSTRIAL ENCLOSURES',
    'CIVIL CONSTRUCTION',
    'MEP',
    'DESIGN SERVICES',
    'MULTILEVEL CAR PARKING SYSTEM',
    'COLD STORAGE',
  ];

  const [visibleStart, setVisibleStart] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const getTabsToShow = () => {
    if (window.innerWidth <= 600) return 2; // Show 2 tabs on mobile
    if (window.innerWidth <= 1343) return 3; // Show 3 tabs on tablets
    return 5; // Default to 5 tabs on desktop
  };

  const [tabsToShow, setTabsToShow] = useState(getTabsToShow());

  React.useEffect(() => {
    const handleResize = () => {
      setTabsToShow(getTabsToShow());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleTabs = tabs.slice(visibleStart, visibleStart + tabsToShow);

  const handlePrev = () => {
    if (visibleStart > 0) {
      setVisibleStart(visibleStart - 1);
    }
  };

  const handleNext = () => {
    if (visibleStart + tabsToShow < tabs.length) {
      setVisibleStart(visibleStart + 1);
    }
  };

  return (
    <div className={styles.container}>
      {/* Tab Bar */}
      <div className={styles.tabBarWrapper}>
        <Image
          src={Left}
          alt="Previous"
          className={styles.arrow}
          onClick={handlePrev}
        />
        <div className={styles.tabBar}>
          {visibleTabs.map((tab, index) => (
            <button
              key={index}
              className={`${styles.tab} ${
                activeTab === visibleStart + index ? styles.activeTab : ''
              }`}
              onClick={() => setActiveTab(visibleStart + index)}
            >
              {tab}
            </button>
          ))}
        </div>
        <Image
          src={Right}
          alt="Next"
          className={styles.arrow}
          onClick={handleNext}
        />
      </div>

      {/* Content Box */}
      {activeTab === 0 && <ContentBox1 />}
    </div>
  );
};



export default TabBar;
