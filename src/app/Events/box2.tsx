'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './box2.module.css';

type Box2Props = {
  onTabChange: (tab: 'Chennai Events' | 'Madurai Events' | 'Office Celebration') => void;
};

const Box2: React.FC<Box2Props> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState<'Chennai Events' | 'Madurai Events' | 'Office Celebration'>('Chennai Events');
  const [currentSet, setCurrentSet] = useState(0);
  const [deviceType, setDeviceType] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);

  const tabLabels = {
    'Chennai Events': 'Chennai',
    'Madurai Events': 'Madurai',
    'Office Celebration': 'Office Celebration',
  };

  const handleTabChange = (tab: 'Chennai Events' | 'Madurai Events' | 'Office Celebration') => {
    setActiveTab(tab);
    setCurrentSet(0);
    onTabChange(tab);
  };

  const imageSets: Record<'Chennai Events' | 'Madurai Events' | 'Office Celebration', string[]> = {
   'Chennai Events': [
      '/Eventsimage/Chennai1.png', '/Eventsimage/Chennai2.png', '/Eventsimage/Chennai3.png',
      '/Eventsimage/Chennai4.png', '/Eventsimage/Chennai5.png', '/Eventsimage/Chennai6.png',
      '/Eventsimage/Chennai7.png', '/Eventsimage/Chennai8.png', '/Eventsimage/Chennai9.png',
      '/Eventsimage/Chennai10.png', '/Eventsimage/Chennai11.png', '/Eventsimage/Chennai12.png',
      '/Eventsimage/Chennai13.png', '/Eventsimage/Chennai14.png', '/Eventsimage/Chennai15.png',
      '/Eventsimage/Chennai16.png', '/Eventsimage/Chennai17.png', '/Eventsimage/Chennai18.png',
      '/Eventsimage/Chennai19.png', '/Eventsimage/Chennai20.png', '/Eventsimage/Chennai21.png',
      '/Eventsimage/Chennai22.png', '/Eventsimage/Chennai23.png', '/Eventsimage/Chennai24.png',
      '/Eventsimage/Chennai25.png', '/Eventsimage/Chennai26.png', '/Eventsimage/Chennai27.png',
      '/Eventsimage/Chennai28.png', '/Eventsimage/Chennai29.png', '/Eventsimage/Chennai30.png',
      '/Eventsimage/Chennai31.png', '/Eventsimage/Chennai32.png',
    ],
    'Madurai Events': [ '/Eventsimage/Chennai1.png', '/Eventsimage/Chennai2.png', '/Eventsimage/Chennai3.png',
      '/Eventsimage/Chennai4.png', '/Eventsimage/Chennai5.png', '/Eventsimage/Chennai6.png',
      '/Eventsimage/Chennai7.png', '/Eventsimage/Chennai8.png', '/Eventsimage/Chennai9.png',
      '/Eventsimage/Chennai10.png', '/Eventsimage/Chennai11.png', '/Eventsimage/Chennai12.png',
      '/Eventsimage/Chennai13.png', '/Eventsimage/Chennai14.png', '/Eventsimage/Chennai15.png',
      '/Eventsimage/Chennai16.png', '/Eventsimage/Chennai17.png', '/Eventsimage/Chennai18.png',
      '/Eventsimage/Chennai19.png', '/Eventsimage/Chennai20.png', '/Eventsimage/Chennai21.png',
      '/Eventsimage/Chennai22.png', '/Eventsimage/Chennai23.png', '/Eventsimage/Chennai24.png',
      '/Eventsimage/Chennai25.png', '/Eventsimage/Chennai26.png', '/Eventsimage/Chennai27.png',
      '/Eventsimage/Chennai28.png', '/Eventsimage/Chennai29.png', '/Eventsimage/Chennai30.png',
      '/Eventsimage/Chennai31.png', '/Eventsimage/Chennai32.png',],
    'Office Celebration': []
  };

  const imagesPerPage = {
    desktop: 16, 
    tablet: 12,  
    mobile: 8,   
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setDeviceType('desktop');
      else if (window.innerWidth > 600) setDeviceType('tablet');
      else setDeviceType('mobile');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getImagesForCurrentSet = () => {
    const perPage = imagesPerPage[deviceType];
    const startIdx = currentSet * perPage;
    return imageSets[activeTab].slice(startIdx, startIdx + perPage);
  };

  const totalSets = Math.ceil(imageSets[activeTab].length / imagesPerPage[deviceType]);

  // Swipe Gesture Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const difference = touchStartX.current - touchEndX;

    if (difference > 50 && currentSet < totalSets - 1) {
      setCurrentSet((prev) => prev + 1); // Swipe left (Next Set)
    } else if (difference < -50 && currentSet > 0) {
      setCurrentSet((prev) => prev - 1); // Swipe right (Previous Set)
    }
  };

  // Image Enlarging
  const openImage = (index: number) => {
    setEnlargedImage(getImagesForCurrentSet()[index]);
    setCurrentImageIndex(index);
  };

  const closeImage = () => {
    setEnlargedImage(null);
    setCurrentImageIndex(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (currentImageIndex !== null) {
      const newIndex = direction === 'next' ? currentImageIndex + 1 : currentImageIndex - 1;
      const images = getImagesForCurrentSet();

      if (newIndex >= 0 && newIndex < images.length) {
        setEnlargedImage(images[newIndex]);
        setCurrentImageIndex(newIndex);
      }
    }
  };

  return (
    <div className={styles.box2}>
      <div className={styles["gear-top-left1"]}></div>
      <div className={styles["gear-bottom-right1"]}></div>
      <div className={styles["gear-top-left2"]}></div>
      <div className={styles["gear-bottom-right2"]}></div>
      <div className={styles.tabBar}>
        {Object.keys(imageSets).map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? styles.activeTab : styles.tab}
            onClick={() => handleTabChange(tab as 'Chennai Events' | 'Madurai Events' | 'Office Celebration')}
          >
            {tabLabels[tab as 'Chennai Events' | 'Madurai Events' | 'Office Celebration']}
          </button>
        ))}
      </div>

      <div 
        className={styles.galleryContainer}
        ref={galleryRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.imageGrid}>
          {getImagesForCurrentSet().map((src, idx) => (
            <img key={idx} src={src} alt={`Event ${idx + 1}`} onClick={() => openImage(idx)} />
          ))}
        </div>

        <div className={styles.pagination}>
          {Array.from({ length: totalSets }).map((_, idx) => (
            <span
              key={idx}
              className={currentSet === idx ? styles.activeDot : styles.dot}
              onClick={() => setCurrentSet(idx)}
            ></span>
          ))}
        </div>
      </div>

      {enlargedImage && (
  <div className={styles.enlargedOverlay} onClick={closeImage}>
    <div className={styles.enlargedImageContainer}>
      <button className={styles.arrowLeft} onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}>‹</button>
      <img src={enlargedImage} className={styles.enlargedImage} alt="Enlarged Event" />
      <button className={styles.arrowRight} onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}>›</button>
    </div>
  </div>
)}
    </div>
  );
};

export default Box2;
