import React from 'react'
import styles from "./equipment.module.css"
import Box3 from "./box3"
const Equipmentpage = () => {
  return (
      <div className={styles.container}>
        {/* Box1 */}
       <div className={styles.box1}>
        <div className={styles.overlay}>
          <p className={styles.title}>Pressure Part</p>
        </div>
      </div>
                
         {/* Box2 */}
      <div  className={styles.box2}>
    <p className={styles.title1box2}>Manufacture and Supplier  </p>
    <p className={styles.title2box2}> for Pressure Part</p>

    <p className={styles.parabox2}>Mekark Provide high Quality pressure parts equipment Accessories in Chennai. We are business to
business Manufacturer and Supplier for all our customers. Our Service Provider including
</p>
    </div>

    <Box3 />

      </div>
  )
}

export default Equipmentpage