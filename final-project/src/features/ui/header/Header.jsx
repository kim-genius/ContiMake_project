<<<<<<< HEAD
import React from 'react'
import styles from './Header.module.css'
import Button from '../button/Button'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.headerBox}>
            <Link to='/'><img className={styles.logo} src='images/logo.png' alt='logo'/></Link>
            <Link to='/generate'>{Button('새 콘티 생성')}</Link>
        </div>
    </header>
   
  )
}

=======
import React from 'react'
import styles from './Header.module.css'
import Button from '../button/Button'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.headerBox}>
            <Link to='/'><img className={styles.logo} src='images/logo.png' alt='logo'/></Link>
            <Link to='/generate'>{Button('콘티 생성하기')}</Link>
        </div>
    </header>
   
  )
}

>>>>>>> 91e34bc ('add')
export default Header