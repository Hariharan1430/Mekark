'use client'
import React, { useState } from 'react'
import styles from "./events.module.css"
import Box2 from './box2'

const EventPage = () => {
   const [activeTab, setActiveTab] = useState<'Chennai Events' | 'Madurai Events' | 'Office Celebration'>('Chennai Events');
  
    const handleTabChange = (tab: 'Chennai Events' | 'Madurai Events' | 'Office Celebration') => {
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

export default EventPage