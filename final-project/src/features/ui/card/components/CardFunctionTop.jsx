import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/CardFunctionTop.module.scss";
import CardFunctionAnimation from "./CardFunctionAnimation";

const CardFunctionTop = () => {

  const [animationAvctive,setAnimationActive] =useState(false)

  CardFunctionAnimation(900,setAnimationActive)

  return (
    <section className={`${styles.cardTop} ${animationAvctive ? styles.cardAnimation:null}`}>
      <div className={styles.cardTopTitle}>
        <span>기능1</span>
        <h2>콘티생성</h2>
      </div>
      <div
        className={styles.cardTopBox}
        style={{
          backgroundImage:
            "url(https://mspoweruser.com/wp-content/uploads/2023/07/Best-Stable-Diffusion-Prompts.jpg)",
        }}
      >
        {" "}
      </div>
    </section>
  );
};

export default CardFunctionTop;
