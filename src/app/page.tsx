import Image from "next/image";
import styles from "./page.module.css";
import { DESTINATIONS } from "./_data/destinations";
import { AU_PARTNERS, NZ_PARTNERS, EU_PARTNERS } from "./_data/partners";
import { Flag } from "./_components/Flag";

type TeamMember = {
  name: string;
  role: string;
  initials: string;
  photo?: string;
};

type Testimonial = {
  body: string;
  name: string;
  role: string;
  photo?: string;
};

type LeadershipMember = TeamMember & { message: string };

const SERVICES: Array<{
  title: string;
  desc: string;
  iconClass: string;
  icon: React.ReactNode;
}> = [
  {
    title: "University Selection",
    desc: "Personalised shortlisting matched to your goals, budget and academic profile.",
    iconClass: "featureIconBlue",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: "Application Support",
    desc: "Document review, statements of purpose and direct submission via our partner network.",
    iconClass: "featureIconAmber",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="15" x2="15" y2="15" />
        <line x1="9" y1="11" x2="15" y2="11" />
      </svg>
    ),
  },
  {
    title: "Visa Assistance",
    desc: "Expert guidance on student visa requirements, finances and interview preparation.",
    iconClass: "featureIconMint",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Scholarship Guidance",
    desc: "Discover merit and need-based funding to make studying abroad more affordable.",
    iconClass: "featureIconCoral",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="6" />
        <path d="M8.21 13.89L7 22l5-3 5 3-1.21-8.12" />
      </svg>
    ),
  },
  {
    title: "Pre-Departure Briefing",
    desc: "Cultural orientation, accommodation tips and travel checklists so you arrive ready.",
    iconClass: "featureIconSky",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
      </svg>
    ),
  },
  {
    title: "Post-Arrival Support",
    desc: "Settlement help, academic check-ins and migration pathways through our 9 offices worldwide.",
    iconClass: "featureIconViolet",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const OFFICES: Array<{ city: string; country: string; hq?: boolean }> = [
  { city: "Melbourne", country: "Australia", hq: true },
  { city: "Scotland", country: "United Kingdom" },
  { city: "Milwaukee, WI", country: "United States" },
  { city: "Montreal", country: "Canada" },
  { city: "Lahore", country: "Pakistan" },
  { city: "Gujranwala", country: "Pakistan" },
  { city: "Sargodha", country: "Pakistan" },
  { city: "Mandi Bahudin", country: "Pakistan" },
];

const LEADERSHIP: LeadershipMember[] = [
  {
    name: "Safdar Iqbal",
    role: "Director",
    initials: "SI",
    photo: "/team/safdar-iqbal.jpg",
    message:
      "It is our mission to provide the highest quality education consultancy services that empower informed decisions about your academic future.",
  },
  {
    name: "Junaid Ahmed",
    role: "General Manager",
    initials: "JA",
    photo: "/team/junaid-ahmed.png",
    message:
      "We deliver highly personalised, data-driven strategies — committed to integrity, global expertise and your professional success.",
  },
  {
    name: "Sidra Akram",
    role: "Manager",
    initials: "SA",
    message:
      "Your satisfaction is our top priority. We pride ourselves on professionalism, integrity and a personalised approach to each client.",
  },
];

const TEAM: TeamMember[] = [
  { name: "Hassan Munir", role: "Operations Manager", initials: "HM", photo: "/team/hassan-munir.jpg" },
  { name: "Waqar Saeed", role: "Media & Marketing", initials: "WS", photo: "/team/waqar-saeed.jpg" },
  { name: "Amina Saeed", role: "Country Head — Australia", initials: "AS" },
  { name: "Faisal Sardar", role: "Head — UK & Europe", initials: "FS", photo: "/team/faisal-sardar.jpg" },
  { name: "Jahanzaib Javed", role: "Head — UK & Europe", initials: "JJ", photo: "/team/jahanzaib-javed.jpg" },
  { name: "Roshan Sheikh", role: "Country Head — Canada", initials: "RS" },
  { name: "Bilal Ch", role: "Manager — Gujranwala", initials: "BC", photo: "/team/bilal-ch.jpg" },
  { name: "Kashif Sheikh", role: "Manager — Lahore", initials: "KS" },
  { name: "Atif Sahi", role: "Manager — Mandi Bahudin", initials: "AS" },
  { name: "Wajahat", role: "Case Officer", initials: "W", photo: "/team/wajahat.jpg" },
  { name: "Suleman Khan", role: "Case Officer", initials: "SK", photo: "/team/suleman-khan.jpg" },
  { name: "Soha Syed", role: "Case Officer", initials: "SS" },
];

const TESTIMONIALS: Testimonial[] = [
  {
    body: "The guidance and support I received from Australian Education Consultants helped me secure my dream university placement.",
    name: "Nasar Iqbal",
    role: "Student, Australia",
    photo: "/stories/nasar-iqbal.jpg",
  },
  {
    body: "I never thought getting into a top-ranked college would be so easy, but with their help, I made it happen!",
    name: "Faisal Nawaz",
    role: "Student, UK",
    photo: "/stories/faisal-nawaz.jpg",
  },
  {
    body: "I was able to make informed decisions about my future thanks to their expertise and personalised approach.",
    name: "Awais Ahmed",
    role: "Student, Canada",
    photo: "/stories/awais-ahmed.jpg",
  },
  {
    body: "Honesty, professionalism and expertise — when these come together, they form Australian Education Consultants.",
    name: "Muhammad Asad Tipu",
    role: "Client",
    photo: "/stories/asad-tipu.jpg",
  },
  {
    body: "Your team's expertise and dedication really made a difference in achieving our goals. Thank you for the excellent service and support.",
    name: "Ali Arslan",
    role: "Client",
    photo: "/stories/ali-arslan.jpg",
  },
  {
    body: "I am very thankful to AEC for helping me choose one of Australia's finest institutions and guiding me through my visa application.",
    name: "Muhammad Talha",
    role: "Student, Australia",
    photo: "/stories/muhammad-talha.jpg",
  },
];

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Avatar({
  photo,
  initials,
  name,
  className,
}: {
  photo?: string;
  initials: string;
  name: string;
  className: string;
}) {
  return (
    <div className={className}>
      {photo ? (
        <Image src={photo} alt={name} fill sizes="120px" />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section id="top" className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroDots} />
        <div className={`container ${styles.heroInner}`}>
          <div>
            <span className={styles.heroPill}>
              <span />
              Free consultations open · 9 offices worldwide
            </span>
            <h1 className={styles.heroTitle}>
              Study abroad with{" "}
              <span className={styles.heroTitleAccent}>confidence,</span>{" "}
              not guesswork.
            </h1>
            <p className={styles.heroLead}>
              We&apos;re a registered Australian education consultancy helping
              students place into universities and colleges across six
              destinations — with honest advice, direct partner deals and
              end-to-end visa support.
            </p>
            <div className={styles.heroActions}>
              <a href="#contact" className="btn btn-primary">
                Book a free consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#destinations" className="btn btn-secondary">
                Explore destinations
              </a>
            </div>

            <div className={styles.heroTrust}>
              <div className={styles.heroAvatars}>
                {[
                  "/stories/nasar-iqbal.jpg",
                  "/stories/ali-arslan.jpg",
                  "/stories/awais-ahmed.jpg",
                  "/stories/muhammad-talha.jpg",
                ].map((src, i) => (
                  <div key={src} className={styles.heroAvatar}>
                    <Image src={src} alt="" width={40} height={40} priority={i === 0} />
                  </div>
                ))}
              </div>
              <div className={styles.heroTrustText}>
                <strong>1,000+ students placed</strong>
                <span>Trusted by families across 5 countries</span>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroPanel}>
              <div className={styles.heroPanelHeader}>
                <div>
                  <div className={styles.heroPanelTitle}>Your application journey</div>
                  <div className={styles.heroPanelSub}>End-to-end, stress-free</div>
                </div>
                <span className={styles.heroPanelTag}>Active</span>
              </div>

              <div className={`${styles.heroPanelStep}`}>
                <span className={`${styles.heroStepIcon} ${styles.heroStepIconDone}`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span className={styles.heroStepDone}>Free consultation booked</span>
              </div>
              <div className={`${styles.heroPanelStep}`}>
                <span className={`${styles.heroStepIcon} ${styles.heroStepIconDone}`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span className={styles.heroStepDone}>Profile assessment complete</span>
              </div>
              <div className={styles.heroPanelStep}>
                <span className={styles.heroStepIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                </span>
                <span>University shortlist</span>
              </div>
              <div className={styles.heroPanelStep}>
                <span className={styles.heroStepIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                </span>
                <span>Application submission</span>
              </div>
              <div className={styles.heroPanelStep}>
                <span className={styles.heroStepIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                </span>
                <span>Visa & departure support</span>
              </div>
            </div>

            <div className={`${styles.heroFloatCard} ${styles.heroFloatCard1}`}>
              <span className={styles.heroFloatIcon} style={{ background: "rgba(16,185,129,0.12)", color: "#047857" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              <span>Visa approved</span>
            </div>
            <div className={`${styles.heroFloatCard} ${styles.heroFloatCard2}`}>
              <span className={styles.heroFloatIcon} style={{ background: "rgba(245,158,11,0.15)", color: "#d97706" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M8.21 13.89L7 22l5-3 5 3-1.21-8.12" /></svg>
              </span>
              <span>Scholarship offer</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="container">
        <div className={styles.statsStrip}>
          <div className={styles.statsCard}>
            <div className={styles.stat}>
              <strong>1,000+</strong>
              <span>Students placed</span>
            </div>
            <div className={styles.stat}>
              <strong>30+</strong>
              <span>Partner institutes</span>
            </div>
            <div className={styles.stat}>
              <strong>9</strong>
              <span>Offices worldwide</span>
            </div>
            <div className={styles.stat}>
              <strong>98%</strong>
              <span>Visa success rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section id="about" className="section">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImageWrap}>
              <div className={styles.aboutCertWrap}>
                <Image
                  src="/certificates/qeac.jpg"
                  alt="QEAC Certificate of Achievement — Safdar Iqbal"
                  width={604}
                  height={791}
                  priority
                  className={styles.aboutCertMain}
                />
              </div>

              <div className={styles.aboutCertBadge}>
                <span className={styles.aboutCertBadgeIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div className={styles.aboutCertText}>
                  <strong>QEAC Certified Counsellor</strong>
                  <span>PIER Network · Agent ID 00257787</span>
                </div>
              </div>
            </div>
            <div>
              <span className="eyebrow">About us</span>
              <h2 className="section-title">
                A trusted partner for your global education journey.
              </h2>
              <p>
                Australian Education Consultants is a leading education
                consultancy dedicated to helping students achieve their
                academic and professional goals. Our team of experienced
                advisors offers personalised guidance to students looking to
                study abroad.
              </p>
              <ul className={styles.aboutList}>
                {[
                  { title: "Personalised approach", desc: "We take time to understand your unique goals, profile and constraints." },
                  { title: "Transparency & honesty", desc: "Unbiased advice tailored to your specific circumstances — no hard sells." },
                  { title: "Direct partner network", desc: "Direct relationships with 30+ universities and colleges across six destinations." },
                  { title: "End-to-end support", desc: "From shortlisting and applications to visa, departure and arrival in your new country." },
                ].map((item) => (
                  <li key={item.title}>
                    <span className={styles.aboutListIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className={styles.aboutListContent}>
                      <strong>{item.title}</strong>
                      <span>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="section section-alt">
        <div className="container">
          <span className="eyebrow">What we offer</span>
          <h2 className="section-title">Everything you need, in one place.</h2>
          <p className="section-lead">
            From shortlisting the right institute to landing in your new
            country — our advisors guide you through every step.
          </p>

          <div className={styles.featureGrid}>
            {SERVICES.map((s) => (
              <div key={s.title} className={styles.featureCard}>
                <span className={`${styles.featureIcon} ${styles[s.iconClass]}`}>
                  {s.icon}
                </span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VISION ============ */}
      <section id="vision" className="section">
        <div className="container">
          <div className={styles.visionCard}>
            <div className={styles.visionContent}>
              <div className={styles.visionLabel}>“</div>
              <div>
                <h2>Trusted. Respected. Dedicated to your success.</h2>
                <p>
                  Our vision is to be a trusted and respected education
                  agency — empowering students and families with the
                  knowledge and resources to make informed decisions, and
                  guiding them through the complex, ever-changing landscape
                  of global education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRESENCE ============ */}
      <section id="presence" className="section section-alt">
        <div className="container">
          <span className="eyebrow">Global presence</span>
          <h2 className="section-title">Close to you. Close to the institutes.</h2>
          <p className="section-lead">
            With 9 offices across Australia, the UK, Europe, Canada, the USA
            and Pakistan, we&apos;re always within reach.
          </p>

          <div className={styles.officeMap}>
            {OFFICES.map((o) => (
              <div
                key={o.city + o.country}
                className={`${styles.officeCard} ${o.hq ? styles.officeCardHQ : ""}`}
              >
                <span className={styles.officeCardCity}>
                  {o.city}
                  {o.hq && (
                    <span style={{ marginLeft: "auto", fontSize: "0.7rem", color: "#047857", fontWeight: 700, letterSpacing: "0.06em" }}>
                      HQ
                    </span>
                  )}
                </span>
                <span className={styles.officeCardCountry}>{o.country}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DESTINATIONS ============ */}
      <section id="destinations" className="section">
        <div className="container">
          <span className="eyebrow">Where you can study</span>
          <h2 className="section-title">Six destinations. Endless possibilities.</h2>
          <p className="section-lead">
            We work directly with universities across six top destinations —
            so your application reaches decision-makers faster.
          </p>

          <div className={styles.destGrid}>
            {DESTINATIONS.map((d) => (
              <div key={d.code} className={styles.destCard}>
                <div className={styles.destCardBg}>
                  <Image
                    src={d.photo}
                    alt={`${d.name} skyline`}
                    fill
                    sizes="(max-width: 900px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.destFlagWrap}>
                  <Flag code={d.code} size={48} />
                </div>
                <span className={styles.destCardArrow} aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
                <div className={styles.destCardContent}>
                  <h3>{d.name}</h3>
                  <span>{d.tagline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PARTNERS ============ */}
      <section id="partners" className="section section-alt">
        <div className="container">
          <span className="eyebrow">Partner institutes</span>
          <h2 className="section-title">30+ universities &amp; colleges on board.</h2>
          <p className="section-lead">
            Direct partnerships mean faster decisions, exclusive offers and
            trusted pathways for every student we work with.
          </p>

          {(
            [
              { label: "Australia · 21 institutes", items: AU_PARTNERS },
              { label: "New Zealand · 5 institutes", items: NZ_PARTNERS },
              { label: "Europe · 1 institute", items: EU_PARTNERS },
            ] as const
          ).map((group) => (
            <div key={group.label} className={styles.regionBlock}>
              <span className={styles.regionTab}>{group.label}</span>
              <div className={styles.partnerGrid}>
                {group.items.map((p) => (
                  <div key={p.name} className={styles.partnerCard}>
                    <div
                      className={styles.partnerLogo}
                      style={
                        {
                          ["--logo-pad" as string]: `${p.pad ?? 8}px`,
                        } as React.CSSProperties
                      }
                    >
                      <Image
                        src={p.logo}
                        alt={`${p.name} logo`}
                        width={120}
                        height={120}
                      />
                    </div>
                    <span className={styles.partnerName}>{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ TEAM ============ */}
      <section id="team" className="section">
        <div className="container">
          <span className="eyebrow">Meet the team</span>
          <h2 className="section-title">The people behind your success.</h2>
          <p className="section-lead">
            A dedicated, qualified team spread across Australia, the UK,
            Europe, Canada, the USA and Pakistan — ready to support your
            journey.
          </p>

          {/* Leadership */}
          <div className={styles.teamLead}>
            {LEADERSHIP.map((m) => (
              <div key={m.name} className={styles.teamLeadCard}>
                <div className={styles.teamLeadBody}>
                  <Avatar
                    className={styles.teamAvatar}
                    photo={m.photo}
                    initials={m.initials}
                    name={m.name}
                  />
                  <div className={styles.teamLeadName}>{m.name}</div>
                  <div className={styles.teamLeadRole}>{m.role}</div>
                  <p className={styles.teamLeadMessage}>“{m.message}”</p>
                </div>
              </div>
            ))}
          </div>

          {/* Wider team */}
          <div className={styles.teamGrid}>
            {TEAM.map((m) => (
              <div key={m.name + m.role} className={styles.teamCard}>
                <Avatar
                  className={styles.teamAvatar}
                  photo={m.photo}
                  initials={m.initials}
                  name={m.name}
                />
                <div className={styles.teamName}>{m.name}</div>
                <div className={styles.teamRole}>{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STORIES ============ */}
      <section id="stories" className="section section-alt">
        <div className="container">
          <span className="eyebrow">Success stories</span>
          <h2 className="section-title">Real students. Real outcomes.</h2>
          <p className="section-lead">
            A few of the many journeys we&apos;ve had the privilege to be a
            part of.
          </p>

          <div className={styles.testimonialGrid}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className={styles.testimonialCard}>
                <div className={styles.testimonialStars} aria-label="5-star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className={styles.testimonialBody}>“{t.body}”</p>
                <div className={styles.testimonialAuthor}>
                  <Avatar
                    className={styles.testimonialAvatar}
                    photo={t.photo}
                    initials={getInitials(t.name)}
                    name={t.name}
                  />
                  <div>
                    <div className={styles.testimonialName}>{t.name}</div>
                    <div className={styles.testimonialRole}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="section">
        <div className="container">
          <span className="eyebrow">Get in touch</span>
          <h2 className="section-title">Let&apos;s plan your next chapter.</h2>
          <p className="section-lead">
            Book a free, no-obligation consultation with our advisors and
            start mapping your study-abroad journey today.
          </p>

          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h3>Contact information</h3>
              <p>
                Reach out by phone or email, or visit our head office in
                Melbourne. We respond within one business day.
              </p>
              <div className={styles.contactList}>
                <div className={styles.contactRow}>
                  <span className={styles.contactIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <strong>Head Office</strong>
                    <span>8 Olympic Way, Craigieburn (3064), VIC, Australia</span>
                  </div>
                </div>
                <div className={styles.contactRow}>
                  <span className={styles.contactIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div>
                    <strong>Phone</strong>
                    <a href="tel:+61424671555">+61 424 671 555</a>
                  </div>
                </div>
                <div className={styles.contactRow}>
                  <span className={styles.contactIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:info@ae-consultants.com.au">info@ae-consultants.com.au</a>
                  </div>
                </div>
                <div className={styles.contactRow}>
                  <span className={styles.contactIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </span>
                  <div>
                    <strong>Website</strong>
                    <span>www.ae-consultants.com.au</span>
                  </div>
                </div>
              </div>
            </div>

            <form
              className={styles.contactForm}
              action="mailto:info@ae-consultants.com.au"
              method="post"
              encType="text/plain"
            >
              <h3>Send us a message</h3>
              <p>We&apos;ll get back to you within one business day.</p>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor="name">Full name</label>
                  <input id="name" name="name" type="text" required placeholder="Jane Doe" />
                </div>
                <div className={styles.formField}>
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required placeholder="you@example.com" />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" placeholder="+61 ..." />
                </div>
                <div className={styles.formField}>
                  <label htmlFor="destination">Preferred destination</label>
                  <select id="destination" name="destination" defaultValue="">
                    <option value="" disabled>Select a country</option>
                    <option>Australia</option>
                    <option>New Zealand</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>United States</option>
                    <option>Europe</option>
                  </select>
                </div>
              </div>
              <div className={styles.formField}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell us about your goals…" />
              </div>
              <button type="submit" className={styles.formSubmit}>
                Send message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
