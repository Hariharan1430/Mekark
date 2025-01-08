'use client';
import React, { useState } from "react";
import styles from "./gallery.module.css";
import Rightarrow from "../../../public/Galleryimages/arrowright.svg";
import Lefttarrow from "../../../public/Galleryimages/arrowleft.svg";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const images = [
  "/Galleryimages/Pressure Part-img1.png",
  "/Galleryimages/Pressure Part-img2.png",
  "/Galleryimages/Pressure Part-img3.png",
  "/Galleryimages/Pressure Part-img4.png",
  "/Galleryimages/Pressure Part-img5.png",
  "/Galleryimages/Non Pressure Part-img1.png",
  "/Galleryimages/Non Pressure Part-img2.png",
  "/Galleryimages/Non Pressure Part-img3.png",
  "/Galleryimages/Non Pressure Part-img4.png",
  "/Galleryimages/Non Pressure Part-img5.png",
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < images.length - 5) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 5);

  // Handlers for swipe gestures
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextImage, // Swipe left to move to the next image
    onSwipedRight: prevImage, // Swipe right to move to the previous image
    trackMouse: true, // Enable mouse swipes for desktop
  });

  return (
    <div className={styles.container} {...swipeHandlers}>
      {/* First Div */}
      <div className={styles.textContainer}>
        <p className={styles.heading1}>Gallery</p>
        <p className={styles.heading2}>On Going and Completed Projects</p>
      </div>

      {/* Second Div */}
      <div className={styles.galleryContainer}>
        {/* Left Arrow */}
        <button
          className={styles.arrowButton}
          onClick={prevImage}
          disabled={currentIndex === 0}
        >
          <Image src={Lefttarrow} alt="Left Arrow" />
        </button>

        {/* Image Row */}
        <div className={styles.imageRow}>
          {visibleImages.map((src, index) => {
            let imgClass = "";
            if (index === 0) imgClass = styles.cornerImage;
            else if (index === 1 || index === 3) imgClass = styles.sideImage;
            else if (index === 2) imgClass = styles.centerImage;
            else if (index === 4) imgClass = styles.cornerImage;

            return (
              <img
                key={src}
                src={src}
                alt={`Gallery image ${index + 1}`}
                className={`${styles.image} ${imgClass}`}
              />
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          className={styles.arrowButton}
          onClick={nextImage}
          disabled={currentIndex >= images.length - 5}
        >
          <Image src={Rightarrow} alt="Right Arrow" />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
