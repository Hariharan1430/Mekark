import React from "react";
import styles from "./box7.module.css";
import awardIcon from "../../../public/HomeImages/Box7Icon1.svg";
import projectIcon from "../../../public/HomeImages/box7-Icon2.svg";
import customerIcon from "../../../public/HomeImages/Box7Icon3.svg";
import employeeIcon from "../../../public/HomeImages/Box7Icon4.svg";
import Image from "next/image";

const Box7: React.FC = () => {
    return (
      <div className={styles.box7}>
        <div className={styles.imageContainer}>
          {/* Background Image */}
          <div className={styles.background}></div>
          
          {/* 4 Boxes */}
           <div className={styles.statsContainer}>
            <div className={styles.statBoxLEFT}>
            <div className={styles.statBox}>
              <div className={styles.icon}>
                <Image src={awardIcon} alt="Awards" />
              </div >
              <div className={styles.number}>25+</div>
              <div className={styles.description}>Award Won</div>
            </div >
            <div className={styles.statBox}>
              <div className={styles.icon}>
                <Image src={projectIcon} alt="Projects"  />
              </div>
              <div className={styles.number}>1,200</div>
              <div className={styles.description}>Project Completed</div>
            </div>
            </div>
            <div className={styles.statBoxRight}>

            <div className={styles.statBox}>
              <div className={styles.icon}>
                <Image src={customerIcon} alt="Customers"  />
              </div>
              <div className={styles.number}>100%</div>
              <div className={styles.description}>Satisfied Customers</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.icon}>
                <Image src={employeeIcon} alt="Employees"  />
              </div>
              <div className={styles.number}>1,200</div>
              <div className={styles.description}>Employed</div>
            </div>
            </div>
          </div> 
        </div>
  
        {/* Paragraph Section */}
        <p className={styles.paragraph}>
          With 25+ awards and 1,200 projects, our team delivers innovative PEB
          solutions from design to construction, exceeding expectations every step of
          the way. We leverage cutting-edge technology to ensure quality and
          efficiency in every project.
        </p>
      </div>
    );
  };
  
  export default Box7;