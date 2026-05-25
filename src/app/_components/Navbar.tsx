"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#vision", label: "Vision" },
  { href: "#destinations", label: "Destinations" },
  { href: "#partners", label: "Partners" },
  { href: "#team", label: "Team" },
  { href: "#stories", label: "Success" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <Link href="#top" aria-label="AE-Consultants home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav
          className={`${styles.links} ${open ? styles.linksOpen : ""}`}
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.link}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className={styles.cta} onClick={() => setOpen(false)}>
            Free Consultation
          </a>
        </nav>

        <button
          className={styles.toggle}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>
    </header>
  );
}
