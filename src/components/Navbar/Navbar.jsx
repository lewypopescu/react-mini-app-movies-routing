import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Link className={styles.link} to="/movies">
        Movies
      </Link>
    </nav>
  );
};

export default Navbar;
