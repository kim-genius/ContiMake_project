import React from 'react'
import styles from './Generatepage.module.css'
const Generatepage = () => {
  return (
    <div className={styles.generatepageWrapper}>
      <nav className={styles.navBar}></nav>
      <div className={styles.contentsWrapper}>
        <section className={styles.designTab}></section>
        <section className={styles.canvas}></section>
        <section className={styles.designTab}></section>
      </div>
    </div>
  )
}

export default Generatepage
