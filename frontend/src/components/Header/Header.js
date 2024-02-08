import React from "react";
import styles from "./Header.module.css"; // Importujemy style z pliku .module.css
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="logo.png" alt="Logo" className={styles.logo} />
        {/* <span className={styles.logotext}>Nazwa Strony</span> */}
      </div>
      <div className={styles.navContainer}>
        <Link to="/kalendarz" className={styles.navLink}>
          Kalendarz
        </Link>
        <Link to="/pokoje" className={styles.navLink}>
          Pokoje
        </Link>
        <Link to="/dodatki" className={styles.navLink}>
          Dodatki
        </Link>
      </div>
    </header>
  );
}

export default Header;
