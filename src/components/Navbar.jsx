import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>СтилКафе</h1>
      <a href='/' className={styles.a}>Главная</a>
    </div>
  )
}

export default Navbar