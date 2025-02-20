'use client';
import React, { useState, useEffect } from 'react';
import styles from './box3.module.css';
import Right from '../../../public/Productimages/RightArrow.svg';
import Left from '../../../public/Productimages/LeftArrow.svg';
import Image from 'next/image';
import ContentBox1 from './content1';
import ContentBox2 from './content2';
import ContactBox3 from './content3';
import ContactBox4 from './content4';
import ContactBox5 from './content5'

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
  const [tabsToShow, setTabsToShow] = useState(5); // Default value for tabs to show

  const getTabsToShow = () => {
    if (typeof window === 'undefined') return 5; // Default value for SSR
    if (window.innerWidth <= 600) return 2;
    if (window.innerWidth <= 1343) return 3;
    return 5;
  };

  useEffect(() => {
    const handleResize = () => {
      setTabsToShow(getTabsToShow());
    };

    // Set initial value on client-side mount
    setTabsToShow(getTabsToShow());

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
      {activeTab === 1 && <ContentBox2 />}
      {activeTab === 2 && <ContactBox3 />}
      {activeTab === 3 && <ContactBox4 />}
      {activeTab === 4 && <ContactBox5 />}



    </div>
  );
};

export default TabBar;
