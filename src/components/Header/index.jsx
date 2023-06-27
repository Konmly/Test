import React from "react";
import styles from "./index.module.scss";
import logo from "./Callmar.png";

function Header() {
  
  return (
    <section className={styles.header}>
      <div>
      <img src={logo}  className={styles.logo}></img>
      </div>
      <div>
      <button className={styles.button}>Вход</button>
      <button className={`${styles.button} ${styles.button__outline}`}>Регистрация</button>
      </div>
    </section>
  );
}

export default Header;
