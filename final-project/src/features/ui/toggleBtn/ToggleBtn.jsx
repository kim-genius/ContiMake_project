import React from 'react'
import styles from './ToggleBtn.module.scss'
import { Link, NavLink } from 'react-router-dom';
const ToggleBtn = (props) => {
  return (
    <ul className={styles.tab}>
      <NavLink to="/generate">
        {({ isActive }) => (
          <li className={isActive ? `${styles.active}` : ""}>{props.tab1}</li>
        )}
      </NavLink>
      <NavLink to="/edit">
      {({ isActive, isPending, isTransitioning }) => (
        <li className={isActive ? `${styles.active}` : ""}>{props.tab2}</li>
        )}
      </NavLink>
    </ul>
  )
}

export default ToggleBtn