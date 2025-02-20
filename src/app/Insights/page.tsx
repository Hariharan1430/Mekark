'use client'
import React, { useState } from 'react'
import styles from "./insights.module.css"
import Box2 from './box2'

const InsightsPage = () => {
   const [activeTab, setActiveTab] = useState<'Gallery' | 'Infographics' | 'Blogs'>('Gallery');
  
    const handleTabChange = (tab: 'Gallery' | 'Infographics' | 'Blogs') => {
      setActiveTab(tab);
    };
  return (
    <div className={styles.container}>
    {/* Box1 */}
    <div className={styles.box1}>
        <div className={styles.overlay}>
          <p className={styles.title}>{activeTab}</p> 
        </div>
      </div>

    {/* Box2 */}
    < Box2  onTabChange={handleTabChange}/>
  
  
  </div>

  )
}

export default InsightsPage