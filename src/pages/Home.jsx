import React from 'react'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Выберите вашу роль</h1>
        <a href="/cook"  className={styles.a} >Повар</a>
        <a href="/waiter"  className={styles.a}>Официант</a>
        <a href="/admin"  className={styles.a}>Администратор</a>
    </div>
  )
}

export default Home