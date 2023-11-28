import React from 'react'
import styles from './ColorButton.module.scss'
const ColorButton = ({ text, func, parameter, generate }) => {
  const handleClick = (event) => {
    event.stopPropagation();
    func(parameter);
  };

  if (generate) {
    return (
      <button className={styles.colorBtn_wait} disabled={true}>
        생성중...
      </button>
    );
  } else {
    return (
      <button className={styles.colorBtn} onClick={handleClick}>
        {text}
      </button>
    );
  }
};

export default ColorButton