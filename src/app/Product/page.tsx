'use client';
import React from 'react'
import styles from "./product.module.css"
import TabBar from './box3'
import IconBox from './iconbox'


const Productpage = () => {
  return (
      <div className={styles.container}>
        {/* Box1 */}
       <div className={styles.box1}>
        <div className={styles.overlay}>
          <p className={styles.title}>Products</p>
        </div>
      </div>

        {/* Box2 */}
      
      <div className={styles.box2}>
        <p className={styles.title1box2}>Our Industry Solutions</p>
        <p className={styles.title2box2}>Delivering the Best Global Industry Services </p> 
        <p className={styles.parabox2}>
        Our Mekark Industry specialized in Pre-Engineered Building Manufacturer, Multi-storey Building Manufacturer, 
MEP Services, Civil Construction, Design Services, Prefabricated Building Manufacturer, Multi Level Car 
Parking system Manufacturer and Warehouse shed Constructions
        </p>
      </div>

      <TabBar />
      <IconBox />

      </div>
  )
}

export default Productpage