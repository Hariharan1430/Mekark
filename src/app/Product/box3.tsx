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
import ContactBox5 from './content5';
import { useSwipeable } from 'react-swipeable';

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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  // Function to calculate the number of tabs to show based on screen width
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

  // Handle previous button click
  const handlePrev = () => {
    if (visibleStart > 0) {
      setVisibleStart(visibleStart - 1);
    }
  };

  // Handle next button click
  const handleNext = () => {
    if (visibleStart + tabsToShow < tabs.length) {
      setVisibleStart(visibleStart + 1);
    }
  };

  // Mouse event handlers for click-and-drag navigation
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX;
    if (deltaX > 50) {
      // Drag right
      handlePrev();
      setIsDragging(false);
    } else if (deltaX < -50) {
      // Drag left
      handleNext();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Swipe handlers for touch navigation
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext, // Swipe left to move to the next set of tabs
    onSwipedRight: handlePrev, // Swipe right to move to the previous set of tabs
    trackMouse: false, // Disable mouse swipes (we handle mouse drag manually)
    trackTouch: true, // Enable touch swipes for mobile
  });

  return (
    <div className={styles.container}>
      {/* Tab Bar */}
      <div
        className={styles.tabBarWrapper}
        {...swipeHandlers} // Swipe gestures for mobile
        onMouseDown={handleMouseDown} // Mouse drag for desktop
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} // Stop dragging if mouse leaves the container
      >
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