import React from "react";
import styles from "./First.module.scss";
const menu = require("./menu.png");
const close = require("./close.png");

const First = ({ setState, state, funct }) => {
  let sup;
  let man;
  if (state === true) {
    sup = styles.center_right_img_imgc;
    man = styles.center_right_imgz_img2;
  } else {
    sup = styles.center_right_img_img1;
    man = styles.center_right_imgz_imgx;
  }
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div className={styles.center_left}>React</div>
        <div className={styles.center_right}>
          <div className={styles.center_right_inside}>Home</div>
          <div className={styles.center_right_inside}>Services</div>
          <div className={styles.center_right_inside}>Products</div>
          <div className={styles.center_right_inside}>Contakt Us</div>
          <div className={styles.center_right_color}>Sign Up</div>
          <div
            onClick={() => {
              funct(setState, state);
            }}
            className={styles.center_right_img}
          >
            <img className={sup} src={menu} alt="" />
          </div>
          <div
            onClick={() => {
              funct(setState, state);
            }}
            className={styles.center_right_imgz}
          >
            <img className={man} src={close} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
