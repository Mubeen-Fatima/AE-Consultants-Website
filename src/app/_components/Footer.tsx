import { Logo } from "./Logo";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Logo variant="light" />
            <p>
              A leading education consultancy helping students realise their
              dreams of studying at top institutions across the globe.
            </p>
            <p className={styles.tagline}>“Your Future Begins Here.”</p>
          </div>

          <div>
            <div className={styles.heading}>Quick Links</div>
            <ul className={styles.list}>
              <li><a href="#about">About Us</a></li>
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#partners">Partner Institutes</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className={styles.heading}>Services</div>
            <ul className={styles.list}>
              <li>University Selection</li>
              <li>Application Support</li>
              <li>Visa Assistance</li>
              <li>Pre-Departure Briefing</li>
              <li>Scholarship Guidance</li>
            </ul>
          </div>

          <div>
            <div className={styles.heading}>Get in Touch</div>
            <div className={styles.contact}>
              <div className={styles.contactRow}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>8 Olympic Way, Craigieburn (3064), VIC, Australia</span>
              </div>
              <div className={styles.contactRow}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:+61424671555">+61 424 671 555</a>
              </div>
              <div className={styles.contactRow}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:info@ae-consultants.com.au">info@ae-consultants.com.au</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div>© {new Date().getFullYear()} Australian Education Consultants Pty Ltd. All rights reserved.</div>
          <div>ACN 651 684 016 · Registered in Victoria, Australia</div>
        </div>

        <div className={styles.credit}>
          Developed by{" "}
          <a
            href="https://www.mubeenf.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mubeen F.
          </a>
        </div>
      </div>
    </footer>
  );
}
