import React from "react";
import styles from "./Second.module.scss";

const Second = ({ state }) => {
  let push;
  if (state === false) {
    push = styles.main;
  } else {
    push = styles.toggle;
  }
  return (
    <div className={push}>
      <div className={styles.center}>
        <div className={styles.center_inside}>Home</div>
        <div className={styles.center_inside}>Services</div>
        <div className={styles.center_inside}>Products</div>
        <div className={styles.center_inside}>Contakt Us</div>
      </div>
    </div>
  );
};

export default Second;
