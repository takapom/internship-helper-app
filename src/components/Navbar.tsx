"use client"

import { useState } from "react"
import Link from "next/link"
import styles from "./navbar.module.css"
import { Menu, X, Moon, Sun } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <header className={`${styles.header} ${isDarkMode ? styles.dark : ""}`}>
      <svg width="0" height="0" className={styles.svgDefs}>
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <div className={styles.logoContainer}>
              <span className={styles.logoIcon}>
                <svg viewBox="0 0 24 24" fill="none" className={styles.logoSvg}>
                  <path
                    d="M22 8L12 2L2 8V16L12 22L22 16V8Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M6 12L12 16L18 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 2V10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className={styles.logoText}>
                <span className={styles.logoTextPrimary}>Shu</span>
                <span className={styles.logoTextSecondary}>Mail</span>
              </span>
            </div>
          </Link>
        </div>

        <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                Intern
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
              Job hunting
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                Blog
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

