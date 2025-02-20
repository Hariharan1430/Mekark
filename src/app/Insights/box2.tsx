'use client';
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styles from './box2.module.css';
import { useRouter } from 'next/navigation';
import Box3 from './box3';

type TabType = 'Gallery' | 'Infographics' | 'Blogs';

type Box2Props = {
  onTabChange: (tab: TabType) => void;
};

const Box2: React.FC<Box2Props> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState<TabType>('Gallery');
  const [currentSet, setCurrentSet] = useState(0);
  const [deviceType, setDeviceType] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);

  const tabLabels: Record<TabType, string> = {
    Gallery: 'Gallery',
    Infographics: 'Infographics',
    Blogs: 'Blogs',
  };

  const imageSets: Record<TabType, string[]> = useMemo(() => ({
    Gallery: [
      '/Eventsimage/factorygallery-1.jpg', '/Eventsimage/factorygallery-2.jpg', '/Eventsimage/factorygallery-3.jpg',
      '/Eventsimage/factorygallery-5.jpg', '/Eventsimage/factorygallery-6.jpg', '/Eventsimage/factorygallery-7.jpg',
      '/Eventsimage/factorygallery-8.jpg', '/Eventsimage/factorygallery-9.jpg', '/Eventsimage/factorygallery-10.jpg',
      '/Eventsimage/factorygallery-11.jpg', '/Eventsimage/factorygallery-12.jpg', '/Eventsimage/factorygallery-14.jpg',
      '/Eventsimage/factorygallery-15.jpg', '/Eventsimage/factorygallery-2.jpg', '/Eventsimage/factorygallery-1.jpg',
      '/Eventsimage/factorygallery-3.jpg',
    ],
    Infographics: [
      '/Eventsimage/infographic-01.jpg', '/Eventsimage/infographic-02.jpg', '/Eventsimage/infographic-03.jpg',
      '/Eventsimage/infographic-04.jpg', '/Eventsimage/infographic-05.jpg', '/Eventsimage/infographic-06.jpg',
      '/Eventsimage/infographic-07.jpg', '/Eventsimage/infographic-08.jpg', '/Eventsimage/infographic-09.jpg',
      '/Eventsimage/infographic-10.jpg',
    ],
    Blogs: [],
  }), []);

  const imagesPerPage = useMemo(() => ({
    desktop: 16,
    tablet: 12,
    mobile: 8,
  }), []);

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

  const handleTabChange = useCallback((tab: TabType) => {
    setActiveTab(tab);
    setCurrentSet(0);
    onTabChange(tab);
  }, [onTabChange]);

  const getImagesForCurrentSet = useCallback(() => {
    const perPage = imagesPerPage[deviceType];
    const startIdx = currentSet * perPage;
    return imageSets[activeTab].slice(startIdx, startIdx + perPage);
  }, [activeTab, currentSet, deviceType, imagesPerPage, imageSets]);

  const totalSets = useMemo(
    () => Math.ceil(imageSets[activeTab].length / imagesPerPage[deviceType]),
    [activeTab, deviceType, imageSets, imagesPerPage]
  );

  // Swipe Gesture Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const difference = touchStartX.current - touchEndX;

    if (difference > 50 && currentSet < totalSets - 1) {
      setCurrentSet((prev) => prev + 1);
    } else if (difference < -50 && currentSet > 0) {
      setCurrentSet((prev) => prev - 1);
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
     {activeTab !== 'Blogs' && (
    <>
      <div className={styles["gear-top-left1"]}></div>
      <div className={styles["gear-bottom-right1"]}></div>
      <div className={styles["gear-top-left2"]}></div>
      <div className={styles["gear-bottom-right2"]}></div>
    </>
  )}
      <div className={styles.tabBar}>
        {Object.keys(imageSets).map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? styles.activeTab : styles.tab}
            onClick={() => handleTabChange(tab as TabType)}
          >
            {tabLabels[tab as TabType]}
          </button>
        ))}
      </div>
    
      {activeTab === 'Blogs' ? (
        <Box3 /> 
      ) : (
        <div 
        className={styles.galleryContainer}
        ref={galleryRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={`${styles.imageGrid} ${activeTab === 'Infographics' ? styles.infographicGrid : ''}`}>
          {getImagesForCurrentSet().map((src, idx) => (
            <img key={idx} src={src} alt={`Insights ${idx + 1}`} loading="lazy"  onClick={() => openImage(idx)} />
          ))}
        </div>

        <div className={styles.pagination}>
          {Array.from({ length: totalSets }).map((_, idx) => (
            <span
              key={idx}
              className={currentSet === idx ? styles.activeDot : styles.dot}
              onClick={() => setCurrentSet(idx)}
              role="button"
              aria-label={`Go to set ${idx + 1}`}
            ></span>
          ))}
        </div>
      </div>
      )}


      {enlargedImage && (
  <div className={styles.enlargedOverlay} onClick={closeImage}>
    <div className={`${styles.enlargedImageContainer} ${activeTab === 'Infographics' ? styles.largeInfographic : ''}`}>
      <button
        className={styles.arrowLeft}
        onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
        aria-label="Previous Image"
      >‹</button>

      <img src={enlargedImage} className={styles.enlargedImage} alt="Enlarged Event" />

      <button
        className={styles.arrowRight}
        onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
        aria-label="Next Image"
      >›</button> 
    </div>
  </div>
)}

    </div>
  );
};

export default Box2;
