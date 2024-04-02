import React, { useState } from "react";

import styles from "./navbar.module.css";
import { getUrl } from "../../../utils";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link className={styles.title} to="/home">
        <h2>SDG</h2>
      </Link>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen ? getUrl("nav/closeIcon.png") : getUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <Link className={styles.Link} to="/createBlog">New Story</Link>
          </li>
          <li>
            <Link className={styles.Link} to="/shop">Shop</Link>
          </li>
          <li>
            <Link className={styles.Link} to="/flightCalculator">Flight Calculator</Link>
          </li>
          <li>
            <Link className={styles.Link} to="/ecommerceCalculator">Ecommerce Calculator</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};