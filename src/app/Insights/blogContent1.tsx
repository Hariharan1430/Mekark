'use client'
import React, { useState } from 'react'
import styles from "./blog1.module.css";

const BlogContent1 = () => {
  return (
    <div className={styles.blogContent}>
      {/* Box 1 */}
      <div className={styles.box1}>
        <img src="/Eventsimage/Blogsbox3image2.png" alt="Building Structure" className={styles.boxImage} />
        <h2>Understanding Pre-Engineered Buildings</h2>
        <h3>An in-depth look into the innovations shaping tomorrow.</h3>
        <p>Pre-Engineered Buildings (PEBs) represent a significant advancement in construction...</p>
      </div>

      {/* Box 2 */}
      <div className={styles.box2}>
        <div className={styles.leftContainer}>
          <img src="/mk66.png" alt="Factory Image" className={styles.innerImage} />
        </div>
        <div className={styles.rightContainer}>
          <h3>Accelerated Construction</h3>
          <p>The structural elements are pre-fabricated, cutting construction time significantly...</p>
        </div>
      </div>

      {/* Box 3 */}
      <div className={styles.box3}>
        <div className={styles.leftContainer}>
          <h3>Cost-Effectiveness</h3>
          <p>PEBs are more economical than traditional buildings, offering efficiency in resource utilization...</p>
        </div>
        <div className={styles.rightContainer}>
          <img src="/mk66.png" alt="Factory Image" className={styles.innerImage} />
        </div>
      </div>

      {/* Box 4 */}
      <div className={styles.box4}>
        <p>
          Pre-engineered buildings are widely used in industrial facilities, warehouses, commercial buildings...
        </p>
      </div>
    </div>
  );
};

export default BlogContent1;
