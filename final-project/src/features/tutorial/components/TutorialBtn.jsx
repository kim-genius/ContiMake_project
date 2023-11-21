import React from "react";
import styles from "../styles/TutorialBtn.module.scss";

const TutorialBtn = ({ title, text, index, position, linePosition }) => {
  let { left, top } = position;
  // console.log(left, top)
  return (
    <div style={{ display: "flex", margin: "0", padding: "0" }}>
      <div style={{ width: "20%" }}>
        <button
          className={styles.button}
          style={{ transform: "translateX(10%)" }}
        >
          {parseInt(index) + 1} {title}
          <hr className={styles.line} />
          {text}
        </button>
      </div>
    </div>
  );
};

export default TutorialBtn;
