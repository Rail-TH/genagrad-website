import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from "framer-motion";
import GalleryPage from "./Gallery-page";
import MainPage from "./Main-page";

function Header() {
  return (
    <>
      <header>
        <Link to="/" className="headerLogo">
          Генаград
        </Link>
        <section>
          <nav className="urls">
            <motion.div
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/gallery" className="navLink">галерея</Link>
            </motion.div>
            <motion.a
              href="#urls"
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.85 }}
              className="navLink"
            >
              ссылки
            </motion.a>
            <motion.a
              href="#info"
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.85 }}
              className="navLink"
            >
              о сайте
            </motion.a>
          </nav>
          <nav className="burger-menu">
            <input type="checkbox" id="burger-toggle" />
            <label htmlFor="burger-toggle" className="burger-icon">&#9776;</label>
            <ul className="menu-items">
              <li>
                <motion.div
                  initial={{ scale: 1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/gallery" className="navLink">галерея</Link>
                </motion.div>
              </li>
              <li>
                <motion.a
                  href="#urls"
                  initial={{ scale: 1 }}
                  whileTap={{ scale: 0.85 }}
                >
                  ссылки
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#info"
                  initial={{ scale: 1 }}
                  whileTap={{ scale: 0.85 }}
                >
                  о сайте
                </motion.a>
              </li>
            </ul>
          </nav>
        </section>
      </header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </>
  );
}

export default Header;