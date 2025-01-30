'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './box2.module.css';

type Box2Props = {
  onTabChange: (tab: 'Gallery' | 'Infographics' | 'Blogs') => void;
};

const Box2: React.FC<Box2Props> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState<'Gallery' | 'Infographics' | 'Blogs'>('Gallery');
  const [currentSet, setCurrentSet] = useState(0);
  const [deviceType, setDeviceType] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);

  const tabLabels = {
    'Gallery': 'Gallery',
    'Infographics': 'Infographics',
    'Blogs': 'Blogs',
  };

  const handleTabChange = (tab: 'Gallery' | 'Infographics' | 'Blogs') => {
    setActiveTab(tab);
    setCurrentSet(0);
    onTabChange(tab);
  };

  const imageSets: Record<'Gallery' | 'Infographics' | 'Blogs', string[]> = {
   'Gallery': [
      '/Eventsimage/factorygallery-1.jpg', '/Eventsimage/factorygallery-2.jpg', '/Eventsimage/factorygallery-3.jpg',
      '/Eventsimage/factorygallery-5.jpg', '/Eventsimage/factorygallery-6.jpg', '/Eventsimage/factorygallery-7.jpg',
      '/Eventsimage/factorygallery-8.jpg', '/Eventsimage/factorygallery-9.jpg', '/Eventsimage/factorygallery-10.jpg',
      '/Eventsimage/factorygallery-11.jpg', '/Eventsimage/factorygallery-12.jpg', '/Eventsimage/factorygallery-14.jpg',
      '/Eventsimage/factorygallery-15.jpg', '/Eventsimage/factorygallery-2.jpg', '/Eventsimage/factorygallery-1.jpg',
      '/Eventsimage/factorygallery-3.jpg',
    ],
    'Infographics': 
    [ '/Eventsimage/infographic-01.jpg', '/Eventsimage/infographic-02.jpg', '/Eventsimage/infographic-03.jpg',
     '/Eventsimage/infographic-04.jpg', '/Eventsimage/infographic-05.jpg', '/Eventsimage/infographic-06.jpg',
'/Eventsimage/infographic-07.jpg', '/Eventsimage/infographic-08.jpg', '/Eventsimage/infographic-09.jpg',
      '/Eventsimage/infographic-10.jpg', ],
      
    'Blogs': []
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
            onClick={() => handleTabChange(tab as 'Gallery' | 'Infographics' | 'Blogs')}
          >
            {tabLabels[tab as 'Gallery' | 'Infographics' | 'Blogs']}
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
