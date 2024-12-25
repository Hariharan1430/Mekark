import React, { useState, useEffect } from "react";
import styles from "./box6.module.css";
import Image from "next/image";
import arrowUp from "../../../public/HomeImages/arrow.svg";
import Leftarrow from "../../../public/HomeImages/Leftarrow.svg";
import Rightarrow from "../../../public/HomeImages/arrow-right.svg";

const Box6: React.FC = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setItemsPerPage(1); 
      } else if (window.innerWidth <= 900) {
        setItemsPerPage(2); 
      } else {
        setItemsPerPage(3); 
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const contentData = [
    {
      title: "Pre-Engineered Building",
      description:
        "MEKARK is specialized for innovative pre-engineered building manufacturers, delivering quality structures with speed and efficiency.",
    },
    {
      title: "Multi-Storey Steel Building",
      description:
        "MEKARK is one of the expert multi-storey steel building manufacturers, delivering durable, sustainable structures with customizable designs.",
    },
    {
      title: "Space Frame Structure",
      description:
        "Mekark is the pre-eminent manufacturer and supplier of high quality Space Frame Structural Systems in India.",
    },
    {
      title: "Industrial Structures",
      description:
        "We provide high-quality industrial structures tailored to meet the diverse needs of our clients.",
    },
    {
      title: "Modular Construction",
      description:
        "Our modular construction solutions are designed for efficiency and adaptability.",
    },
    {
      title: "Steel Bridges",
      description:
        "We specialize in designing and constructing durable steel bridges for various applications.",
    },
  ];

  // Handle the previous button click
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  // Handle the next button click
  const handleNext = () => {
    if (currentIndex + itemsPerPage < contentData.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  return (
    <div className={styles.box6}>
      <p className={styles.mainHeading}>Our Industry Solutions</p>
      <p className={styles.subHeading1}>Delivering the Best Global</p>
      <p className={styles.subHeading2}>Industry Services</p>

     
      <div className={styles.tabBar}>
        <button
          className={activeTab === "products" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("products")}
        >
          <p className={styles.tabBarText}>PRODUCTS</p>
        </button>
        <button
          className={activeTab === "equipment" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("equipment")}
        >
          <p className={styles.tabBarText}>EQUIPMENT</p>
        </button>
        <button
          className={activeTab === "design" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("design")}
        >
          <p className={styles.tabBarText}>DESIGN SERVICES</p>
        </button>
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>
        {activeTab === "products" && (
          <div className={styles.contentArea}>
            {contentData.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
              <div className={styles.contentBox} key={index}>
                <div className={styles.headingBox}>
                  <p className={styles.heading}>{item.title}</p>
                </div>
                <div className={styles.detailBox}>
                  <div className={styles.leftBox}>
                    <div className={styles.verticalLine}></div>
                  </div>
                  <div className={styles.rightBox}>
                    <p className={styles.description}>{item.description}</p>
                    <button className={styles.discoverButton}>
                      Discover <Image src={arrowUp} alt="Arrow Up" className={styles.arrowIcon} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === "equipment" && <p>Equipment content goes here.</p>}
        {activeTab === "design" && <p>Design Services content goes here.</p>}
      </div>

      {/* Arrow Buttons */}
      <div className={styles.arrowContainer}>
        <button
          className={styles.arrowButton}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <Image src={Leftarrow} alt="Previous" className={styles.arrowImage} />
        </button>
        <button
          className={styles.arrowButton}
          onClick={handleNext}
          disabled={currentIndex + itemsPerPage >= contentData.length}
        >
          <Image src={Rightarrow} alt="Next" className={styles.arrowImage} />
        </button>
      </div>
    </div>
  );
};

export default Box6;
