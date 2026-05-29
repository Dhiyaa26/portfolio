import { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Certifications", "Contact"];

const SKILLS = [
  {
    cat: "QA Engineering",
    icon: "🔍",
    items: ["Manual Testing", "Test Case Writing", "Bug Reporting", "SDLC Basics", "Attention to Detail", "Critical Thinking"],
  },
  {
    cat: "Data Analytics",
    icon: "📊",
    items: ["SQL Basic"],
  },
  {
    cat: "Development",
    icon: "💻",
    items: ["HTML", "CSS", "JavaScript", "MySQL", "WordPress"],
  },
  {
    cat: "Tools",
    icon: "🛠",
    items: ["GitHub", "Figma", "XAMPP", "NetBeans", "Eclipse"],
  },
];

const PROJECTS = [
  {
    cat: "QA",
    catColor: "#e8b4c0",
    title: "E-Commerce Website Testing",
    summary: "Comprehensive manual testing of a student e-commerce project, identifying 14 functional bugs and UX issues across checkout and product listing flows.",
    tools: ["Test Cases", "Bug Reports", "SDLC", "Manual Testing"],
    icon: "🛒",
  },
  {
    cat: "QA",
    catColor: "#e8b4c0",
    title: "Website Usability Review",
    summary: "Heuristic evaluation and usability testing report for a university information portal. Documented pain points and proposed design improvements.",
    tools: ["Heuristic Evaluation", "Usability Testing", "Documentation"],
    icon: "🧪",
  },
  {
    cat: "Data",
    catColor: "#b4c8e8",
    title: "Student Performance Dashboard",
    summary: "Analyzed academic performance data using Excel and SQL. Built an interactive dashboard visualizing GPA trends, attendance correlation, and subject distributions.",
    tools: ["Excel", "SQL", "Data Visualization"],
    icon: "📈",
  },
  {
    cat: "Data",
    catColor: "#b4c8e8",
    title: "Sales Data Exploration",
    summary: "Explored a retail sales dataset to uncover seasonal trends, top-performing products, and regional patterns. Presented findings with clear visual storytelling.",
    tools: ["Excel", "SQL", "Charts", "Analysis"],
    icon: "🔢",
  },
  {
    cat: "Dev",
    catColor: "#b4e8c8",
    title: "Bakery Website",
    summary: "Designed and built a responsive bakery website with product catalog, contact form, and CMS integration using WordPress and custom CSS theming.",
    tools: ["WordPress", "HTML", "CSS", "PHP"],
    icon: "🍞",
  },
  {
    cat: "Dev",
    catColor: "#b4e8c8",
    title: "Book Collection Web App",
    summary: "Full-stack web application to manage a personal book collection with CRUD operations, search filtering, and MySQL database backend.",
    tools: ["PHP", "MySQL", "JavaScript", "XAMPP"],
    icon: "📚",
  },
];

const EXPERIENCES = [
  {
    role: "Quality Assurance Engineer - Intern",
    company: "Glints",
    time: "February - May 2026",
    desc: [
      "Conducted manual and basic automation testing on web and mobile application of Glints, including regression and end-to-end testing",
      "Created and executed test cases based on product requirement documents, user stories, and use cases, resulting in the identification and reporting of 20+ bugs that improved product stability before launch",
      "Identified, documented, and tracked bugs using JIRA across staging and production environments",
      "Assisted in preparing and supporting bug bash and UAT sessions, collaborating with cross-functional teams to ensure comprehensive test coverage and timely issue resolution",
    ],
    images: [
      "/img/glints1.jpeg",
      "/img/glints2.jpeg",
    ],
  },
  {
    role: "Quality Assurance Engineer - Intern",
    company: "PT Permata Indo Sejahtera",
    time: "July - September 2025",
    desc: [
      "Developed and executed manual test cases for web and mobile application features based on documentation and Figma designs",
      "Conducted functional testing during sprint cycles to identify bugs and ensure feature quality",
      "Utilized Qase.io for structured test case management, including test steps, preconditions, actual results, and supporting evidence",
      "Collaborated within agile scrum workflows alongside QA, developers, UI/UX designers, and project teams during product discussions and feature reviews",
      "Assisted in reporting testing results and tracking issues using project management tools such as Plaky",
    ],
    images: [
      "/img/permata1.jpeg",
      "/img/permata2.jpeg",
    ],
  },
  {
    role: "WordPress Developer Intern - Community Freelancer",
    org: "ScaleUP UKM",
    time: "july - november 2025",
    desc: [
      "Assisted in managing and developing WordPress-based websites for digital business projects using Kadence WP",
      "Supported website setup, customization, and project related adjustments based on client and project needs",
      "Participated in weekly coordination meetings with project managers to monitor project and client progress",
      "Contributed to project-based workflows supporting the digitalization of UMKM businesses in Indonesia",
      "Developed simple custom WordPress plugin features using PHP when needed for project requirements"
    ],
    images: [],
  },
  {
    role: "Coding Instructor - Part Time",
    company: "The Maker Hacker - PT Ralta Kreatif Nusantara",
    time: "september 2025 - januari 2026",
    desc: [
      "Guided more than 1 class within up to 5 students in creating simple animations and logic-based projects",
      "Taught basic coding concepts to elementary students using Scratch and Code.org",
      "Delivered interactive fun and engaging learning sessions in English to help students develop computational thinking and problem-solving skills",
      "Guided students in creating simple animations and logic-based projects"
    ],
    images: [
      "/img/ngajar1.jpeg",
      "/img/ngajar2.jpeg",
      "/img/ngajar3.jpeg",
    ],
    role: "Head of Secretariat - 2025 Junior National Wushu Championship",
    company: "Kementerian Pemuda dan Olahraga RI (Ministry of Youth and Sports of the Republic of Indonesia)",
    time: "November - Desember 2025",
    desc: [
      "led 8 people as team secretariat in organizing the 2025 Junior National Wushu Championship, a major national sports event with over 500 participants and 1000 spectators",
      "Completed administrative operations with stong committee communications before - during - after the event to ensure smooth execution and coordination among divisions",
      "Managed event documentation for internal and external use, including participant records, schedules, and official reports",
    ],
    images: [
      "/img/wushu1.jpeg",
      "/img/wushu2.jpeg",
      "/img/wushu3.jpeg",
    ],
  },
];

const CERTS = [
  { name: "SQL for Data Analysis", provider: "Dicoding", status: "Completed", icon: "🗃️" },
  { name: "Introduction to QA Testing", provider: "Udemy", status: "Completed", icon: "✅" },
  { name: "Advanced Excel for Data Analytics", provider: "Coursera", status: "In Progress", icon: "📊" },
  { name: "Power BI Fundamentals", provider: "Microsoft Learn", status: "In Progress", icon: "📉" },
  { name: "TOEFL Preparation", provider: "Self-Directed", status: "Ongoing", icon: "🌐" },
  { name: "API Testing Fundamentals", provider: "Postman", status: "Upcoming", icon: "🔌" },
];

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.cat === activeFilter);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: "#f8f7f5", color: "#1a1a2e", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { -webkit-font-smoothing: antialiased; }
        ::selection { background: #e8b4c0; color: #1a1a2e; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #f0eeea; }
        ::-webkit-scrollbar-thumb { background: #c9b8d4; border-radius: 99px; }

        .nav-link {
          color: #4a4a6a; text-decoration: none; font-size: 0.85rem; font-weight: 500;
          letter-spacing: 0.03em; padding: 6px 14px; border-radius: 99px;
          transition: all 0.2s; cursor: pointer;
        }
        .nav-link:hover { background: #ede8f5; color: #1a1a2e; }

        .btn-primary {
          display: inline-flex; align-items: center; gap: 7px;
          background: #1a1a2e; color: #f8f7f5; border: none; padding: 12px 26px;
          border-radius: 99px; font-family: 'Outfit', sans-serif; font-size: 0.9rem;
          font-weight: 600; cursor: pointer; transition: all 0.25s; letter-spacing: 0.02em;
          text-decoration: none;
        }
        .btn-primary:hover { background: #2d2d5e; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(26,26,46,0.18); }

        .btn-outline {
          display: inline-flex; align-items: center; gap: 7px;
          background: transparent; color: #1a1a2e; border: 1.5px solid #c5bfd8;
          padding: 11px 24px; border-radius: 99px; font-family: 'Outfit', sans-serif;
          font-size: 0.9rem; font-weight: 600; cursor: pointer; transition: all 0.25s;
          letter-spacing: 0.02em; text-decoration: none;
        }
        .btn-outline:hover { border-color: #1a1a2e; background: #f0eeea; transform: translateY(-2px); }

        .skill-pill {
          background: white; border: 1px solid #e8e4f0; border-radius: 8px; padding: 8px 14px;
          font-size: 0.82rem; font-weight: 500; color: #3d3d60; transition: all 0.2s; cursor: default;
        }
        .skill-pill:hover { background: #ede8f5; border-color: #c9b8d4; transform: translateY(-1px); }

        .project-card {
          background: white; border: 1px solid #ede8f5; border-radius: 18px; padding: 28px;
          transition: all 0.3s; cursor: pointer;
        }
        .project-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(26,26,46,0.1); border-color: #c9b8d4; }

        .filter-btn {
          padding: 7px 20px; border-radius: 99px; border: 1.5px solid #e0dce8; background: white;
          font-family: 'Outfit', sans-serif; font-size: 0.82rem; font-weight: 600; cursor: pointer;
          transition: all 0.2s; color: #4a4a6a;
        }
        .filter-btn:hover { border-color: #c9b8d4; background: #f5f2fa; }
        .filter-btn.active { background: #1a1a2e; color: white; border-color: #1a1a2e; }

        .timeline-dot {
          width: 12px; height: 12px; border-radius: 50%; background: #e8b4c0;
          border: 2.5px solid white; box-shadow: 0 0 0 3px #e8b4c0;
          flex-shrink: 0; margin-top: 5px;
        }

        .cert-card {
          background: white; border: 1px solid #ede8f5; border-radius: 14px; padding: 20px;
          display: flex; align-items: center; gap: 14px; transition: all 0.2s;
        }
        .cert-card:hover { transform: translateY(-3px); box-shadow: 0 12px 30px rgba(26,26,46,0.08); }

        .section-label {
          font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          color: #9b8fb0; margin-bottom: 10px;
        }
        .section-title {
          font-family: 'Lora', serif; font-size: clamp(1.7rem, 3.5vw, 2.4rem);
          font-weight: 600; color: #1a1a2e; line-height: 1.25;
        }

        .exp-img {
          width: 110px; height: 80px; object-fit: cover; border-radius: 10px;
          border: 1px solid #ede8f5; cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .exp-img:hover { transform: scale(1.05); box-shadow: 0 8px 20px rgba(26,26,46,0.15); }

        .hamburger { display: none; }
        @media (max-width: 768px) {
          .hamburger { display: flex; flex-direction: column; gap: 5px; cursor: pointer; padding: 6px; }
          .hamburger span { display: block; width: 22px; height: 2px; background: #1a1a2e; border-radius: 2px; transition: all 0.3s; }
          .desktop-nav { display: none !important; }
          .mobile-menu { position: fixed; top: 65px; left: 0; right: 0; background: rgba(248,247,245,0.98); backdrop-filter: blur(20px); padding: 20px; z-index: 999; border-bottom: 1px solid #ede8f5; display: flex; flex-direction: column; gap: 4px; }
          .hero-grid { flex-direction: column !important; }
          .hero-visual { display: none; }
          .about-grid { flex-direction: column !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .certs-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) { .mobile-menu { display: none !important; } }

        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes fadeDown { from { opacity:0; transform:translateY(-12px); } to { opacity:1; transform:translateY(0); } }
        .hero-anim { animation: fadeDown 0.7s ease forwards; }
        .hero-anim-1 { animation: fadeDown 0.7s 0.1s ease both; }
        .hero-anim-2 { animation: fadeDown 0.7s 0.25s ease both; }
        .hero-anim-3 { animation: fadeDown 0.7s 0.4s ease both; }
        .hero-anim-4 { animation: fadeDown 0.7s 0.55s ease both; }
        .float-shape { animation: float 6s ease-in-out infinite; }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(248,247,245,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid #ede8f5" : "none",
        transition: "all 0.35s ease",
        padding: "0 clamp(20px, 5vw, 80px)",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", height: 65, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "Lora, serif", fontSize: "1.2rem", fontWeight: 600, color: "#1a1a2e", letterSpacing: "-0.01em" }}>
            Dhiyaa<span style={{ color: "#e8b4c0" }}>.</span>
          </span>
          <div className="desktop-nav" style={{ display: "flex", gap: 2 }}>
            {NAV_LINKS.map(l => (
              <span key={l} className="nav-link" onClick={() => scrollTo(l)}>{l}</span>
            ))}
          </div>
          <a className="btn-primary desktop-nav" href="#" style={{ fontSize: "0.8rem", padding: "9px 20px", display: "inline-flex" }}>
            Download CV ↓
          </a>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map(l => (
            <span key={l} className="nav-link" style={{ fontSize: "1rem", padding: "12px 16px" }} onClick={() => scrollTo(l)}>{l}</span>
          ))}
        </div>
      )}

      {/* ── HERO ── */}
      <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px clamp(20px,5vw,80px) 60px", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", top: "10%", right: "8%", width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,180,192,0.22) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "15%", left: "3%", width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle, rgba(180,200,232,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="hero-grid" style={{ maxWidth: 1100, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", gap: 60, justifyContent: "space-between" }}>
          <div style={{ flex: "1 1 500px", maxWidth: 580 }}>
            <div className="hero-anim" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "white", border: "1px solid #ede8f5", borderRadius: 99, padding: "7px 16px", marginBottom: 28, fontSize: "0.78rem", fontWeight: 600, color: "#9b8fb0", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#a8d8a8", display: "inline-block" }} />
              Open to opportunities
            </div>
            <h1 className="hero-anim-1" style={{ fontFamily: "Lora, serif", fontSize: "clamp(2.6rem, 6vw, 4rem)", fontWeight: 600, lineHeight: 1.15, color: "#1a1a2e", marginBottom: 8 }}>
              Hi, I'm{" "}
              <span style={{ color: "#2d2d5e", fontStyle: "italic" }}>Dhiyaa</span>
              <span style={{ color: "#e8b4c0" }}>.</span>
            </h1>
            <p className="hero-anim-2" style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)", fontWeight: 500, color: "#6b6b8d", marginBottom: 20, letterSpacing: "-0.01em" }}>
              Aspiring QA Engineer & Data Analyst
            </p>
            <p className="hero-anim-3" style={{ fontSize: "0.97rem", lineHeight: 1.75, color: "#5a5a7a", maxWidth: 460, marginBottom: 38 }}>
              Informatics Engineering student with a passion for software quality, data-driven thinking, and building digital experiences that actually work well. Curious, growth-oriented, and ready for global opportunities.
            </p>
            <div className="hero-anim-4" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={() => scrollTo("Projects")}>View Projects →</button>
              <button className="btn-outline">Download CV ↓</button>
            </div>
            <div className="hero-anim-4" style={{ display: "flex", gap: 28, marginTop: 48, paddingTop: 32, borderTop: "1px solid #ede8f5" }}>
              {[["6+", "Projects"], ["4+", "Experiences"], ["2", "Focus Areas"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "Lora, serif", fontSize: "1.6rem", fontWeight: 700, color: "#1a1a2e", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: "0.75rem", color: "#9b8fb0", fontWeight: 500, marginTop: 4, letterSpacing: "0.04em", textTransform: "uppercase" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" style={{ flex: "0 0 360px", position: "relative" }}>
            <div className="float-shape" style={{ width: 320, height: 380, borderRadius: "40% 60% 55% 45% / 50% 45% 55% 50%", overflow: "hidden", boxShadow: "0 30px 80px rgba(26,26,46,0.1)" }}>
              <img src="/img/dhiyaa1.jpg" alt="Dhiyaa" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            {[
              { icon: "🔍", label: "QA Testing", top: -10, left: -30, delay: "0s" },
              { icon: "📊", label: "Data Analytics", bottom: 40, right: -35, delay: "1.5s" },
              { icon: "✨", label: "Detail-Oriented", top: "50%", left: -50, delay: "3s" },
            ].map(({ icon, label, top, bottom, left, right, delay }) => (
              <div key={label} style={{
                position: "absolute", top, bottom, left, right,
                background: "white", border: "1px solid #ede8f5", borderRadius: 12, padding: "8px 14px",
                display: "flex", alignItems: "center", gap: 7,
                fontSize: "0.75rem", fontWeight: 600, color: "#3d3d60",
                boxShadow: "0 8px 24px rgba(26,26,46,0.1)",
                animation: `float 5s ${delay} ease-in-out infinite`,
                whiteSpace: "nowrap",
              }}>
                <span style={{ fontSize: "0.9rem" }}>{icon}</span> {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "90px clamp(20px,5vw,80px)", background: "#f2eef8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div className="about-grid" style={{ display: "flex", gap: 60, alignItems: "center" }}>
              <div style={{ flex: "0 0 260px" }}>
                <div style={{ width: "100%", maxWidth: 260, aspectRatio: "4/5", borderRadius: 24, overflow: "hidden", boxShadow: "0 20px 50px rgba(26,26,46,0.1)" }}>
                  <img src="/img/dhiyaa2.png" alt="Dhiyaa" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <p className="section-label">Get to know me</p>
                <h2 className="section-title" style={{ marginBottom: 24 }}>A student building toward<br /><em>something meaningful.</em></h2>
                <p style={{ fontSize: "0.97rem", lineHeight: 1.85, color: "#5a5a7a", marginBottom: 18 }}>
                  I'm a final-year Informatics Engineering student with a growing fascination for what happens <em>between</em> when software is built and when it reaches the user which is exactly the space where QA Engineering lives. I believe quality isn't an afterthought; it's the detail that separates good products from great ones.
                </p>
                <p style={{ fontSize: "0.97rem", lineHeight: 1.85, color: "#5a5a7a", marginBottom: 18 }}>
                  Alongside that, I'm drawn to data the kind that tells honest stories about how people behave, what systems produce, and where things can be better. Data Analytics feels like a natural extension of how I already think: carefully, with curiosity and structure.
                </p>
                <p style={{ fontSize: "0.97rem", lineHeight: 1.85, color: "#5a5a7a", marginBottom: 32 }}>
                  I'm actively working on my English communication skills because I genuinely want to collaborate in global environments and because clear communication is itself a form of quality. I'm not just learning for a certificate; I'm learning to connect.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {["Informatics Engineering", "QA Engineering", "Data Analytics", "Global Mindset", "Web Development"].map(t => (
                    <span key={t} style={{ background: "white", border: "1px solid #dcd8ec", borderRadius: 8, padding: "7px 14px", fontSize: "0.8rem", fontWeight: 600, color: "#4a4a6a" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ padding: "90px clamp(20px,5vw,80px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <p className="section-label">What I work with</p>
            <h2 className="section-title" style={{ marginBottom: 50 }}>Skills & Competencies</h2>
          </Reveal>
          <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {SKILLS.map((s, i) => (
              <Reveal key={s.cat} delay={i * 0.08}>
                <div style={{ background: "white", border: "1px solid #ede8f5", borderRadius: 20, padding: "26px 28px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                    <span style={{ fontSize: "1.3rem" }}>{s.icon}</span>
                    <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1a1a2e" }}>{s.cat}</span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {s.items.map(item => (
                      <span key={item} className="skill-pill">{item}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding: "90px clamp(20px,5vw,80px)", background: "#f2eef8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <p className="section-label">Selected work</p>
            <h2 className="section-title" style={{ marginBottom: 14 }}>Featured Projects</h2>
            <p style={{ fontSize: "0.95rem", color: "#7a7a9a", marginBottom: 32 }}>Each project is approached as a case study — with purpose, process, and learning.</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 40 }}>
              {["All", "QA", "Data", "Dev"].map(f => (
                <button key={f} className={`filter-btn${activeFilter === f ? " active" : ""}`} onClick={() => setActiveFilter(f)}>
                  {{ All: "All Projects", QA: "🔍 QA", Data: "📊 Data", Dev: "💻 Dev" }[f]}
                </button>
              ))}
            </div>
          </Reveal>
          <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
            {filteredProjects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <div className="project-card">
                  <div style={{ width: "100%", height: 140, borderRadius: 12, background: `linear-gradient(135deg, ${p.catColor}55, ${p.catColor}22)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem", marginBottom: 20 }}>
                    {p.icon}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <span style={{ background: p.catColor + "55", color: "#3d3d60", borderRadius: 99, padding: "3px 12px", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>{p.cat}</span>
                  </div>
                  <h3 style={{ fontFamily: "Lora, serif", fontSize: "1.1rem", fontWeight: 600, color: "#1a1a2e", marginBottom: 10, lineHeight: 1.3 }}>{p.title}</h3>
                  <p style={{ fontSize: "0.87rem", color: "#6b6b8d", lineHeight: 1.7, marginBottom: 18 }}>{p.summary}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                    {p.tools.map(t => (
                      <span key={t} style={{ background: "#f5f2fa", border: "1px solid #e8e4f0", borderRadius: 6, padding: "3px 10px", fontSize: "0.75rem", fontWeight: 500, color: "#6b6b8d" }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <button style={{ flex: 1, padding: "9px", background: "#1a1a2e", color: "white", border: "none", borderRadius: 10, fontSize: "0.8rem", fontWeight: 600, cursor: "pointer" }}>View Details</button>
                    <button style={{ padding: "9px 14px", background: "white", color: "#4a4a6a", border: "1px solid #e8e4f0", borderRadius: 10, fontSize: "0.8rem", fontWeight: 600, cursor: "pointer" }}>GitHub ↗</button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={{ padding: "90px clamp(20px,5vw,80px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <p className="section-label">My journey</p>
            <h2 className="section-title" style={{ marginBottom: 50 }}>Experience & Activities</h2>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {EXPERIENCES.map((e, i) => (
              <Reveal key={e.role + e.org} delay={i * 0.1}>
                <div style={{ display: "flex", gap: 24, paddingBottom: i < EXPERIENCES.length - 1 ? 40 : 0 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div className="timeline-dot" />
                    {i < EXPERIENCES.length - 1 && (
                      <div style={{ width: 1.5, flex: 1, background: "linear-gradient(to bottom, #e8b4c0, #e8e4f0)", marginTop: 8 }} />
                    )}
                  </div>
                  <div style={{ flex: 1, paddingTop: 0 }}>
                    <div style={{ background: "white", border: "1px solid #ede8f5", borderRadius: 16, padding: "24px 26px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                        <div>
                          <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#1a1a2e", marginBottom: 3 }}>{e.role}</h3>
                          <p style={{ fontSize: "0.85rem", color: "#9b8fb0", fontWeight: 500 }}>{e.org}</p>
                        </div>
                        <span style={{ background: "#f5f2fa", border: "1px solid #e8e4f0", borderRadius: 99, padding: "4px 14px", fontSize: "0.75rem", fontWeight: 600, color: "#7a7a9a", whiteSpace: "nowrap" }}>{e.time}</span>
                      </div>
                      {Array.isArray(e.desc) ? (
                        <ul style={{ marginTop: 10, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                          {e.desc.map((point, j) => (
                            <li key={j} style={{ fontSize: "0.88rem", color: "#6b6b8d", lineHeight: 1.7 }}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p style={{ fontSize: "0.88rem", color: "#6b6b8d", lineHeight: 1.75, marginTop: 10 }}>{e.desc}</p>
                      )}
                      {e.images && e.images.length > 0 && (
                        <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
                          {e.images.map((src, idx) => (
                            <img key={idx} src={src} alt={`${e.role} documentation ${idx + 1}`} className="exp-img" />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" style={{ padding: "90px clamp(20px,5vw,80px)", background: "#f2eef8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <p className="section-label">Always learning</p>
            <h2 className="section-title" style={{ marginBottom: 12 }}>Certifications & Learning Journey</h2>
            <p style={{ fontSize: "0.95rem", color: "#7a7a9a", marginBottom: 46 }}>Growth is intentional. Here's what I've been working toward.</p>
          </Reveal>
          <div className="certs-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 14 }}>
            {CERTS.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.07}>
                <div className="cert-card">
                  <div style={{ width: 46, height: 46, borderRadius: 12, background: "linear-gradient(135deg, #ede8f5, #f5e8ed)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", flexShrink: 0 }}>
                    {c.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 700, fontSize: "0.88rem", color: "#1a1a2e", marginBottom: 3 }}>{c.name}</p>
                    <p style={{ fontSize: "0.78rem", color: "#9b8fb0" }}>{c.provider}</p>
                  </div>
                  <span style={{
                    padding: "4px 12px", borderRadius: 99, fontSize: "0.72rem", fontWeight: 700, flexShrink: 0,
                    background: c.status === "Completed" ? "#d4f0d4" : c.status === "In Progress" ? "#fff3d4" : c.status === "Ongoing" ? "#d4e8f5" : "#f0ede8",
                    color: c.status === "Completed" ? "#2d7a3d" : c.status === "In Progress" ? "#8a6200" : c.status === "Ongoing" ? "#1a5a8a" : "#6a5a4a",
                  }}>{c.status}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div style={{ marginTop: 40, background: "linear-gradient(135deg, #1a1a2e, #2d2d5e)", borderRadius: 20, padding: "28px 32px", display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center" }}>
              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#e8b4c0", marginBottom: 6 }}>Currently Focused On</p>
                <p style={{ fontFamily: "Lora, serif", fontSize: "1.1rem", color: "white", fontWeight: 600 }}>SQL Optimization · Power BI · API Testing · English Communication</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "90px clamp(20px,5vw,80px)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <p className="section-label">Let's connect</p>
            <h2 className="section-title" style={{ marginBottom: 18 }}>Open to New Opportunities</h2>
            <p style={{ fontSize: "0.97rem", color: "#6b6b8d", lineHeight: 1.8, marginBottom: 48 }}>
              Currently open to internship and entry-level opportunities in <strong>QA Engineering</strong> and <strong>Data Analytics</strong>. I'd love to connect with teams who value curiosity and careful thinking.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", marginBottom: 48 }}>
              {[
                { label: "LinkedIn", icon: "💼", href: "#" },
                { label: "GitHub", icon: "🐙", href: "#" },
                { label: "Email", icon: "✉️", href: "mailto:dhiyaa@email.com" },
              ].map(l => (
                <a key={l.label} href={l.href} className="btn-outline" style={{ gap: 10, textDecoration: "none" }}>
                  <span>{l.icon}</span> {l.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid #ede8f5", padding: "24px clamp(20px,5vw,80px)", background: "#f8f7f5" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: "Lora, serif", fontSize: "1rem", color: "#1a1a2e", fontWeight: 600 }}>Dhiyaa<span style={{ color: "#e8b4c0" }}>.</span></span>
          <p style={{ fontSize: "0.8rem", color: "#9b8fb0" }}>Crafted with care · 2025</p>
          <div style={{ display: "flex", gap: 20 }}>
            {NAV_LINKS.map(l => (
              <span key={l} onClick={() => scrollTo(l)} style={{ fontSize: "0.78rem", color: "#9b8fb0", cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#1a1a2e"}
                onMouseLeave={e => e.target.style.color = "#9b8fb0"}>{l}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Portfolio />);