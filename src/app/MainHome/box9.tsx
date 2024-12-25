import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './box9.module.css';
import Leftarrow from '../../../public/HomeImages/Leftarrow.svg'; 
import Rightarrow from '../../../public/HomeImages/arrow-right.svg'; 
import arrowUp from '../../../public/HomeImages/arrow.svg'; 

const galleryData = [
  {
    id: 1,
    imageSrc: '/HomeImages/Rectangle.png',
    title: 'Pre-Engineered Structure',
    date: 'Sep 13 2023',
    description: 'The Rise of Pre-Engineered Structure: A Look at Industry Growth.',
  },
  {
    id: 2,
    imageSrc: '/HomeImages/Rectangle (1).svg',
    title: 'Multi Storey Buildings',
    date: 'Sep 16 2023',
    description: 'You will never believe Making multi-story buildings more energy efficient.',
  },
  {
    id: 3,
    imageSrc: '/HomeImages/Rectangle (2).png',
    title: 'PEB warehouses',
    date: 'Sep 21 2023',
    description: 'PEB warehouses are better than civil warehouses. How and why is it superio.',
  },
  {
    id: 4,
    imageSrc: '/HomeImages/Rectangle (2).png',
    title: 'Building 4',
    date: '2024-04-01',
    description: 'This is the description for Building 4.',
  },
  {
    id: 5,
    imageSrc: '/HomeImages/Rectangle (1).svg',
    title: 'Building 5',
    date: '2024-05-01',
    description: 'This is the description for Building 5.',
  },
  {
    id: 6,
    imageSrc: '/HomeImages/Rectangle (2).png',
    title: 'Building 6',
    date: '2024-06-01',
    description: 'This is the description for Building 6.',
  },
];

const GalleryContainer = () => {
  const [currentSet, setCurrentSet] = useState(0); 
  const [imagesPerSet, setImagesPerSet] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 450) {
        setImagesPerSet(1); 
      } else if (window.innerWidth < 1000) {
        setImagesPerSet(2); 
      } else {
        setImagesPerSet(3); 
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 
    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  const totalSets = Math.ceil(galleryData.length / imagesPerSet);

  const handleNext = () => {
    setCurrentSet((prev) => (prev + 1) % totalSets);
  };

  const handlePrevious = () => {
    setCurrentSet((prev) => (prev - 1 + totalSets) % totalSets);
  };

  const currentImages = galleryData.slice(
    currentSet * imagesPerSet,
    currentSet * imagesPerSet + imagesPerSet
  );

  return (
    <div className={styles.box9Container}>
      {/* Heading and Paragraph Section */}
      <div className={styles.headingSection}>
        <p className={styles.mainHeading}>Insights and Trends</p>
        <p className={styles.subHeading}>Industrial News</p>
        <p className={styles.paragraph}>
          Hardly able to cover it and seemed ready to slick off any moment.
        </p>
        <p className={styles.paragraph1}>
          His many legs, pitifully thin compared with the size of the rest of him.
        </p>
      </div>

      {/* Gallery Section */}
      <div className={styles.galleryContainer}>
        {currentImages.map((item) => (
          <div key={item.id} className={styles.galleryItem}>
            <div className={styles.outerFrame}>
              <img
                src={item.imageSrc}
                alt={item.title}
                className={styles.innerImage}
              />
            </div>
            <div className={styles.content}>
              <div className={styles.titleandtime}>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.date}>{item.date}</p>
              </div>
              <p className={styles.description}>{item.description}</p>
            </div>
            <button className={styles.discoverButton}>
              Discover{' '}
              <Image src={arrowUp} alt="Arrow Up" className={styles.arrowIcon} />
            </button>
          </div>
        ))}
      </div>

      {/* Arrow Section */}
      <div className={styles.arrowContainer}>
        {/* Left arrow button */}
        <button
          className={styles.arrowButton}
          onClick={handlePrevious}
          disabled={currentSet === 0} 
        >
          <Image src={Leftarrow} alt="Previous" className={styles.arrowImage} />
        </button>

        {/* Right arrow button */}
        <button
          className={styles.arrowButton}
          onClick={handleNext}
          disabled={currentSet >= totalSets - 1} 
        >
          <Image src={Rightarrow} alt="Next" className={styles.arrowImage} />
        </button>
      </div>
    </div>
  );
};

export default GalleryContainer;
