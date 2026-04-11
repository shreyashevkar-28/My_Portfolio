import { useEffect } from "react"
import { Link } from "react-scroll"

import profile from "./assets/profile.jpeg"
import project1 from "./assets/project1.jpg"
import project2 from "./assets/proj2.PNG"
import cert1 from "./assets/cert1.jpg"
import cert2 from "./assets/cert2.jpg"
import cert3 from "./assets/cert3.png"

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    background: #070c14;
    color: #cbd5e1;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(14,165,233,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(14,165,233,0.025) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
    z-index: 0;
  }

  /* ── NAVBAR ── */
  .navbar {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(7,12,20,0.95);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border-bottom: 1px solid rgba(14,165,233,0.35);
  }
  .navbar-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
  }
  .nav-brand {
    font-family: 'Manrope', sans-serif;
    font-size: 1.25rem;
    font-weight: 900;
    color: #38bdf8;
  }
  .nav-links { display: flex; gap: 2rem; list-style: none; }
  .nav-link {
    font-size: 0.82rem;
    font-weight: 600;
    color: #64748b;
    cursor: pointer;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition: color 0.2s;
    position: relative;
    padding-bottom: 3px;
  }
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    height: 1.5px; width: 0;
    background: #38bdf8;
    transition: width 0.25s ease;
  }
  .nav-link:hover { color: #e2e8f0; }
  .nav-link:hover::after { width: 100%; }

  /* ── HOME ── */
  #home {
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
    min-height: calc(100vh - 58px);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    padding: 3rem 2rem;
  }
  .home-img-wrap {
    flex-shrink: 0;
    position: relative;
    animation: fadeSlideLeft 0.8s ease both;
  }
  .home-img-wrap::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 1rem;
    background: linear-gradient(135deg, #38bdf8, #6366f1);
    z-index: -1;
  }
  .home-img {
    width: 290px;
    height: 360px;
    object-fit: cover;
    border-radius: 0.85rem;
    display: block;
  }
  .home-text {
    flex: 1;
    max-width: 520px;
    animation: fadeSlideRight 0.8s ease both;
  }
  .home-greeting {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.17em;
    text-transform: uppercase;
    color: #38bdf8;
    margin-bottom: 0.85rem;
    display: flex;
    align-items: center;
    gap: 0.45rem;
  }
  .home-greeting::before {
    content: '';
    display: inline-block;
    width: 22px; height: 1px;
    background: #38bdf8;
  }
  .home-name {
    font-family: 'Manrope', sans-serif;
    font-size: clamp(2.4rem, 4vw, 3.2rem);
    font-weight: 800;
    color: #f1f5f9;
    line-height: 1.08;
    letter-spacing: -0.03em;
    margin-bottom: 0.65rem;
  }
  .home-role { font-size: 1rem; color: #64748b; margin-bottom: 1rem; }
  .home-role span { color: #38bdf8; font-weight: 600; }
  .home-desc { font-size: 1rem; line-height: 1.8; color: #94a3b8; margin-bottom: 2rem; }
  .home-cta { display: flex; gap: 0.75rem; flex-wrap: wrap; }

  .btn-primary {
    padding: 0.65rem 1.6rem;
    background: #0ea5e9;
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    transition: background 0.2s, transform 0.2s;
  }
  .btn-primary:hover { background: #0284c7; transform: translateY(-2px); }

  .btn-outline {
    padding: 0.65rem 1.6rem;
    background: transparent;
    color: #94a3b8;
    font-weight: 600;
    font-size: 0.9rem;
    border: 1px solid rgba(100,116,139,0.3);
    border-radius: 0.4rem;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    transition: border-color 0.2s, color 0.2s, transform 0.2s;
  }
  .btn-outline:hover { border-color: #94a3b8; color: #e2e8f0; transform: translateY(-2px); }

  /* ── SHARED SECTION ── */
  .section {
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
    padding: 2.5rem 2rem;
    width: 100%;
  }
  .section-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #38bdf8;
    margin-bottom: 0.5rem;
  }
  .section-tag::before {
    content: '';
    display: inline-block;
    width: 18px; height: 1px;
    background: #38bdf8;
  }
  .section-title {
    font-family: 'Manrope', sans-serif;
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    font-weight: 800;
    color: #f1f5f9;
    letter-spacing: -0.02em;
    margin-bottom: 1.5rem;
  }

  /* ── ABOUT ── */
  .about-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 4rem;
    align-items: start;
  }
  .about-text p { font-size: 1rem; line-height: 1.9; color: #94a3b8; margin-bottom: 0.85rem; }
  .about-text p strong { color: #e2e8f0; font-weight: 600; }
  .about-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 0.65rem; }
  .stat-card {
    background: rgba(14,165,233,0.04);
    border: 1px solid rgba(14,165,233,0.11);
    border-radius: 0.65rem;
    padding: 1.1rem 0.75rem;
    text-align: center;
    transition: border-color 0.25s, transform 0.25s;
  }
  .stat-card:hover { border-color: rgba(56,189,248,0.3); transform: translateY(-2px); }
  .stat-num {
    font-family: 'Manrope', sans-serif;
    font-size: 1.4rem;
    font-weight: 800;
    color: #38bdf8;
    line-height: 1;
    margin-bottom: 0.2rem;
  }
  .stat-label {
    font-size: 0.62rem;
    font-weight: 600;
    color: #475569;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  /* ── SKILLS ── */
  .skills-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 1rem; }
  .skill-card {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 0.8rem;
    padding: 1rem 1.4rem;
    transition: border-color 0.25s, transform 0.25s;
  }
  .skill-card:hover { border-color: rgba(56,189,248,0.2); transform: translateY(-3px); }
  .skill-header { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem; }
  .skill-icon { font-size: 1rem; line-height: 1; flex-shrink: 0; }
  .skill-title { font-size: 0.78rem; font-weight: 700; color: #38bdf8; text-transform: uppercase; letter-spacing: 0.08em; }
  .skill-pills { display: flex; flex-wrap: wrap; gap: 0.3rem; }
  .pill {
    background: rgba(56,189,248,0.06);
    border: 1px solid rgba(56,189,248,0.13);
    color: #94a3b8;
    border-radius: 999px;
    padding: 0.22rem 0.8rem;
    font-size: 0.9rem;
    font-weight: 500;
  }

  /* ── PROJECTS ── */
  .projects-grid { display: flex; flex-direction: column; gap: 1rem; width: 100%; }
  .project-card {
    height: 150px;
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 0.9rem;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    color: inherit;
    transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
  }
  .project-card:hover {
    border-color: rgba(56,189,248,0.25);
    transform: translateY(-3px);
    box-shadow: 0 10px 32px rgba(14,165,233,0.08);
  }
  .project-img {
    width: 30%;
    height: 100%;
    object-fit: cover;
    flex-shrink: 0;
    display: block;
    filter: brightness(0.8) saturate(0.9);
    transition: filter 0.3s;
  }
  .project-card:hover .project-img { filter: brightness(1) saturate(1); }
  .project-body {
    width: 70%;
    padding: 1rem 1.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .project-number {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    color: #38bdf8;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
  }
  .project-title {
    font-family: 'Manrope', sans-serif;
    font-size: 1.05rem;
    font-weight: 700;
    color: #f1f5f9;
    margin-bottom: 0.35rem;
  }
  .project-desc { font-size: 0.88rem; line-height: 1.6; color: #64748b; }

  /* ── CERTIFICATES ── */
  .certs-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1rem; width: 100%; }
  .cert-card {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 0.75rem;
    overflow: hidden;
    transition: border-color 0.25s, transform 0.25s;
  }
  .cert-card:hover { border-color: rgba(99,102,241,0.25); transform: translateY(-3px); }
  .cert-img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    display: block;
    filter: brightness(0.78);
    transition: filter 0.3s;
  }
  .cert-card:hover .cert-img { filter: brightness(0.92); }
  .cert-body { padding: 0.85rem 0.9rem; }
  .cert-name { font-size: 0.9rem; font-weight: 500; color: #e2e8f0; margin-bottom: 0.4rem; line-height: 1.4; }
  .cert-link {
    font-size: 0.72rem;
    font-weight: 600;
    color: #6366f1;
    text-decoration: none;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    transition: color 0.2s;
  }
  .cert-link:hover { color: #818cf8; }

  /* ── CONTACT ── */
  .contact-wrap { display: flex; flex-direction: column; align-items: center; }
  .contact-subtitle {
    font-size: 1rem;
    color: #64748b;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    max-width: 500px;
    text-align: center;
  }
  .contact-cards { display: grid; grid-template-columns: repeat(2,1fr); gap: 0.7rem; width: 100%; max-width: 680px; }
  .contact-item {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 0.7rem;
    padding: 1rem 1.1rem;
    text-decoration: none;
    color: inherit;
    transition: border-color 0.25s, transform 0.25s;
  }
  .contact-item:hover { border-color: rgba(56,189,248,0.22); transform: translateY(-2px); }
  .contact-type { font-size: 0.65rem; font-weight: 700; color: #38bdf8; text-transform: uppercase; letter-spacing: 0.11em; margin-bottom: 0.2rem; }
  .contact-val { font-size: 0.88rem; color: #94a3b8; word-break: break-all; }

  /* ── DIVIDER ── */
  .divider {
    position: relative; z-index: 1;
    max-width: 1100px; margin: 0 auto;
    height: 1px; width: 100%;
    background: rgba(255,255,255,0.05);
  }

  /* ── FOOTER ── */
  .footer {
    position: relative; z-index: 1;
    padding: 1.25rem 2rem;
    text-align: center;
    font-size: 0.78rem;
    color: #334155;
    border-top: 1px solid rgba(255,255,255,0.04);
  }

  /* ── ANIMATIONS ── */
  @keyframes fadeSlideLeft {
    from { opacity: 0; transform: translateX(-30px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeSlideRight {
    from { opacity: 0; transform: translateX(30px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .reveal.visible { opacity: 1; transform: translateY(0); }
  .reveal-delay-1 { transition-delay: 0.1s; }
  .reveal-delay-2 { transition-delay: 0.2s; }
  .reveal-delay-3 { transition-delay: 0.3s; }

  /* ── RESPONSIVE ── */
  @media (max-width: 768px) {
    #home { flex-direction: column; text-align: center; min-height: auto; padding: 2.5rem 1.5rem; gap: 2rem; }
    .home-greeting, .home-cta { justify-content: center; }
    .home-img { width: 200px; height: 250px; }
    .home-text { max-width: 100%; }
    .about-grid, .skills-grid, .certs-grid { grid-template-columns: 1fr; }
    .project-card { height: auto; flex-direction: column; }
    .project-img { width: 100%; height: 160px; }
    .project-body { width: 100%; }
    .contact-cards { grid-template-columns: 1fr; }
    .nav-links { gap: 1rem; }
    .navbar-inner { padding: 0.9rem 1.25rem; }
  }
`

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

const skills = [
  { icon: '⌨️', title: 'Languages',          items: ['C', 'C++', 'Java', 'Python'] },
  { icon: '🌐', title: 'Web Development',     items: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'] },
  { icon: '🛠️', title: 'Tools & Databases',  items: ['VS Code', 'IntelliJ IDEA', 'MySQL', 'MongoDB'] },
  { icon: '🤝', title: 'Professional Skills', items: ['Leadership', 'Teamwork', 'Project Management', 'Critical Thinking'] },
]

const certs = [
  { img: cert1, name: 'Python Programming Certification', link: cert1 },
  { img: cert2, name: 'Web Development Certification',    link: cert2 },
  { img: cert3, name: 'Java Programming Certification',   link: cert3 },
]

const contacts = [
  { type: 'Email',    val: 'shreyashevkar@gmail.com',       href: 'mailto:shreyashevkar@gmail.com' },
  { type: 'Phone',    val: '+91 9423003820',                href: 'tel:+919423003820' },
  { type: 'LinkedIn', val: 'linkedin.com/in/shreyashevkar', href: 'https://www.linkedin.com/in/shreya-shevkar-908b11340/' },
  { type: 'GitHub',   val: 'github.com/shreyashevkar-28',   href: 'https://github.com/shreyashevkar-28' },
]

const navItems = ['home','about','skills','projects','certifications','contact']

export default function App() {
  useReveal()

  return (
    <>
      <style>{styles}</style>

      {/*
        STICKY NAVBAR WORKS BECAUSE:
        - Nav is a direct child of #root (no wrapper div)
        - #root has `all: unset; display: block` from index.html
        - body is the scroll container — sticky anchors to it correctly
      */}
      <nav className="navbar">
        <div className="navbar-inner">
          <span className="nav-brand">Shreya Shevkar</span>
          <ul className="nav-links">
            {navItems.map(id => (
              <li key={id}>
                <Link to={id} smooth duration={500} offset={-58} spy className="nav-link">
                  {id === 'certifications' ? 'Certs' : id.charAt(0).toUpperCase() + id.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section id="home">
        <div className="home-img-wrap">
          <img src={profile} alt="Shreya Shevkar" className="home-img" />
        </div>
        <div className="home-text">
          <div className="home-greeting">Hello, World</div>
          <h1 className="home-name">Shreya Sunil Shevkar</h1>
          <p className="home-role"><span>Computer Engineering</span> Student</p>
          <p className="home-desc">Aspiring software developer passionate about building modern web applications and solving real-world problems through technology.</p>
          <div className="home-cta">
            <Link to="projects" smooth duration={500} offset={-58} className="btn-primary">View Projects ↓</Link>
            <Link to="contact"  smooth duration={500} offset={-58} className="btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section id="about" className="section">
        <div className="reveal">
          <div className="section-tag">About me</div>
          <h2 className="section-title">Who I Am</h2>
        </div>
        <div className="about-grid">
          <div className="about-text reveal reveal-delay-1">
            <p><strong>Hi, I'm Shreya</strong> — a Computer Engineering student passionate about building impactful technology.</p>
            <p>🎓 Pursuing <strong>B.Tech in Computer Science & Engineering</strong> at COEP Technological University, Pune.</p>
            <p>💻 I enjoy working with C, C++, Java, and Web Development while strengthening my understanding of AI, Data Structures, Algorithms, and Software Development.</p>
            <p>🚀 My focus is on improving problem-solving skills, building meaningful projects, and exploring Artificial Intelligence and innovative software systems. I believe technology has the power to bridge inequality and solve real-world problems.</p>
          </div>
          <div className="about-stats reveal reveal-delay-2">
            {[
              { num: '2+',     label: 'Projects Built' },
              { num: '3+',     label: 'Certifications' },
              { num: 'B.Tech', label: 'Degree' },
              { num: 'COEP',   label: 'University' },
            ].map(s => (
              <div className="stat-card" key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section id="skills" className="section">
        <div className="reveal">
          <div className="section-tag">Expertise</div>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>
        <div className="skills-grid">
          {skills.map((sk, i) => (
            <div className={`skill-card reveal reveal-delay-${(i % 3) + 1}`} key={sk.title}>
              <div className="skill-header">
                <span className="skill-icon">{sk.icon}</span>
                <span className="skill-title">{sk.title}</span>
              </div>
              <div className="skill-pills">
                {sk.items.map(item => <span className="pill" key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      <section id="projects" className="section">
        <div className="reveal">
          <div className="section-tag">Work</div>
          <h2 className="section-title">Featured Projects</h2>
        </div>
        <div className="projects-grid">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-card reveal reveal-delay-1">
            <img src={project1} alt="Smart Code Search" className="project-img" />
            <div className="project-body">
              <div className="project-number">01 / Project</div>
              <div className="project-title">Smart Code Search</div>
              <p className="project-desc">A system designed to manage student records, grades and academic performance efficiently using modern programming practices.</p>
            </div>
          </a>
          <a href="https://github.com/shreyashevkar-28/My_Portfolio.git" target="_blank" rel="noopener noreferrer" className="project-card reveal reveal-delay-2">
            <img src={project2} alt="Portfolio Website" className="project-img" />
            <div className="project-body">
              <div className="project-number">02 / Project</div>
              <div className="project-title">Personal Portfolio Website</div>
              <p className="project-desc">A responsive portfolio website developed using React and Tailwind CSS to showcase my projects, skills and certifications.</p>
            </div>
          </a>
        </div>
      </section>

      <div className="divider" />

      <section id="certifications" className="section">
        <div className="reveal">
          <div className="section-tag">Credentials</div>
          <h2 className="section-title">Certifications</h2>
        </div>
        <div className="certs-grid">
          {certs.map((c, i) => (
            <div className={`cert-card reveal reveal-delay-${i + 1}`} key={c.name}>
              <img src={c.img} alt={c.name} className="cert-img" />
              <div className="cert-body">
                <div className="cert-name">{c.name}</div>
                <a href={c.link} target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate ↗</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      <section id="contact" className="section">
        <div className="contact-wrap">
          <div className="reveal">
            <div className="section-tag" style={{justifyContent:'center'}}>Contact</div>
            <h2 className="section-title" style={{textAlign:'center'}}>Let's Connect</h2>
          </div>
          <p className="contact-subtitle reveal">Always open to new opportunities, collaborations, or a friendly chat about tech.</p>
          <div className="contact-cards reveal">
            {contacts.map(c => (
              <a className="contact-item" key={c.type} href={c.href} target="_blank" rel="noopener noreferrer">
                <div className="contact-type">{c.type}</div>
                <div className="contact-val">{c.val}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">© 2026 Shreya Sunil Shevkar</footer>
    </>
  )
}