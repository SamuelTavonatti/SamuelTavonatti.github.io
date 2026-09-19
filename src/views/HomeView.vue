<script setup>
import { ref } from 'vue'

defineProps({
  lang: String
})

const formData = ref({ name: '', email: '', message: '', privacy: false })

const handleFormSubmit = () => {
  if (!formData.value.privacy) {
    alert(lang.value === 'it' ? 'Devi accettare la Privacy Policy.' : 'You must accept the Privacy Policy.')
    return
  }
  const subject = encodeURIComponent(`Contatto Portfolio: ${formData.value.name}`)
  const body = encodeURIComponent(`Nome: ${formData.value.name}\nEmail: ${formData.value.email}\n\nMessaggio:\n${formData.value.message}`)
  window.location.href = `mailto:samuel.tavonatti05@gmail.com?subject=${subject}&body=${body}`
  formData.value = { name: '', email: '', message: '', privacy: false }
}
</script>

<template>
  <div class="page-wrapper">
    <!-- HERO -->
    <section class="hero animate-fade-up">
      <div class="hero-layout">
        <div class="hero-content">
          <div class="status-indicator-tag">
            <span class="status-dot"></span>
            <span>{{ lang === 'it' ? 'Studente ITC • UniTrento' : 'ITC Student • UniTrento' }}</span>
          </div>

          <h1 class="hero-title">
            {{ lang === 'it' 
              ? 'Progettista UI/UX & Studente di Interfacce' 
              : 'UI/UX Designer & Interfaces Student' 
            }}
          </h1>
          <p class="hero-subtitle">
            {{ lang === 'it'
              ? 'Samuel Tavonatti. Studente in Interfacce e Tecnologie della Comunicazione all’Università di Trento. Progetto esperienze digitali fondate sull\'ergonomia cognitiva e l\'usabilità.'
              : 'Samuel Tavonatti. Communication Interfaces & Technologies student at UniTrento. Crafting digital experiences based on cognitive ergonomics and usability.'
            }}
          </p>

          <div class="hero-cta-row">
            <a href="#contatti" class="btn-hero-primary">
              <span>{{ lang === 'it' ? 'Contattami' : 'Get in Touch' }}</span>
              <span class="arrow">↓</span>
            </a>
            <router-link to="/progetti" class="btn-hero-secondary">
              <span>{{ lang === 'it' ? 'Vedi Progetti' : 'View Projects' }}</span>
              <span class="arrow">→</span>
            </router-link>
          </div>
        </div>

        <div class="hero-media">
          <div class="photo-frame">
            <img 
              src="/Foto%20personale.jpeg" 
              alt="Samuel Tavonatti" 
              class="profile-img"
              onerror="this.src='/foto-personale.jpeg'"
            />
            <div class="photo-badge">
              <span class="badge-role">Samuel Tavonatti</span>
              <span class="badge-sub">Trento, IT</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="content-sections animate-fade-up" style="animation-delay: 0.2s;">
      
      <!-- 01. CHI SONO -->
      <section id="chi-sono" class="grid-section">
        <div class="section-left">
          <span class="section-num">01 /</span>
          <h2 class="section-title">{{ lang === 'it' ? 'Chi Sono' : 'About Me' }}</h2>
        </div>
        <div class="section-right about-content">
          <p class="lead-paragraph">
            {{ lang === 'it'
              ? 'Ciao, sono Samuel Tavonatti, studente in Interfacce e Tecnologie della Comunicazione (ITC) presso l’Università degli Studi di Trento.'
              : 'Hi, I am Samuel Tavonatti, studying Interfaces and Communication Technologies (ITC) at the University of Trento.'
            }}
          </p>

          <p class="body-paragraph">
            {{ lang === 'it'
              ? 'Ho consolidato la mia esperienza come UX/UI designer sia nei laboratori universitari sia direttamente sul campo durante il tirocinio presso Trentino Marketing. In questo percorso mi sono occupato dell’ottimizzazione e del miglioramento delle interfacce web, della gestione del Content Hub con articoli d’ispirazione e della progettazione di nuove visioni e template per landing page e campagne future, affiancando inoltre il coordinamento operativo e la gestione in prima persona degli eventi sul territorio.'
              : 'I developed my UX/UI design experience through academic coursework and real-world work during my internship at Trentino Marketing. My role involved optimizing web interfaces, managing the Content Hub with editorial features, and conceptualizing new templates and landing pages for upcoming campaigns, alongside on-site operational coordination during live events.'
            }}
          </p>

          <p class="body-paragraph">
            {{ lang === 'it'
              ? 'Utilizzo strumenti come Figma e CMS come Pimcore; conosco i fondamenti della programmazione (HTML, CSS, JavaScript) che applico per comprendere la fattibilità tecnica e dialogare in modo chiaro con i team di sviluppo back-end. Gestisco inoltre gli asset digitali e fotografici tramite la suite Adobe, con nozioni pratiche di Photoshop, Illustrator e soluzioni DAM come Adobe Experience Manager Assets.'
              : 'I work with Figma and CMS platforms like Pimcore; I understand programming fundamentals (HTML, CSS, JavaScript) which I leverage to ensure technical feasibility and communicate effectively with back-end engineering teams. I also manage digital and media assets through the Adobe ecosystem, with practical knowledge of Photoshop, Illustrator, and DAM solutions like Adobe Experience Manager Assets.'
            }}
          </p>

          <p class="interest-paragraph">
            {{ lang === 'it'
              ? 'Nel tempo libero seguo con curiosità l’evoluzione tecnologica, le novità legate all’Intelligenza Artificiale e l’analisi di progetti e creator di riferimento, accrescendo costantemente la mia visione attraverso articoli tecnici, blog e confronti con la community.'
              : 'In my spare time, I follow technological innovation, practical AI workflows, and creative case studies, continuously broadening my design perspective through industry articles, blogs, and community insights.'
            }}
          </p>
        </div>
      </section>

      <!-- 02. COMPETENZE -->
      <section id="competenze" class="grid-section">
        <div class="section-left">
          <span class="section-num">02 /</span>
          <h2 class="section-title">{{ lang === 'it' ? 'Competenze' : 'Expertise' }}</h2>
        </div>
        <div class="section-right">
          <div class="skills-list">
            
            <div class="skill-row">
              <div class="skill-head">
                <span class="material-symbols-outlined icon-moss">design_services</span>
                <h3>User Experience & Visual Layout</h3>
              </div>
              <p>Progettazione di Landing Page, Nuovi Template, UI/UX Design, Design Thinking, Content Hub.</p>
              <span class="skill-context">Contesto: Università di Trento & Trentino Marketing</span>
            </div>
            
            <div class="skill-row">
              <div class="skill-head">
                <span class="material-symbols-outlined icon-moss">psychology</span>
                <h3>Ricerca & Ergonomia</h3>
              </div>
              <p>UserResearch, Test di Usabilità, Nudging, Interfaccia Uomo-Macchina.</p>
              <span class="skill-context">Contesto: Università di Trento</span>
            </div>
            
            <!-- SUITE ADOBE ACCORPATA E ORDINATA -->
            <div class="skill-row">
              <div class="skill-head">
                <span class="material-symbols-outlined icon-moss">build</span>
                <h3>Strumenti & Gestione Asset</h3>
              </div>
              <p>Figma, Pimcore CMS, Suite Adobe (AEM Assets per gestione DAM, Photoshop e Illustrator base), basi HTML/CSS/JS (comunicazione con team back-end).</p>
              <span class="skill-context">Competenze applicate</span>
            </div>

            <div class="skill-row">
              <div class="skill-head">
                <span class="material-symbols-outlined icon-moss">forum</span>
                <h3>Soft Skill & Gestione Operativa</h3>
              </div>
              <p>Coordinamento ed eventi sul campo, Problem solving pratico, Public speaking, Comunicazione, Inglese B2.</p>
              <span class="skill-context">Esperienza sul campo: Trentino Marketing, Al Gusto la cucina di Corrado & UniTrento</span>
            </div>

          </div>
        </div>
      </section>

      <!-- 03. FORMAZIONE -->
      <section class="grid-section">
        <div class="section-left">
          <span class="section-num">03 /</span>
          <h2 class="section-title">{{ lang === 'it' ? 'Formazione' : 'Education' }}</h2>
        </div>
        <div class="section-right">
          <div class="edu-list">
            
            <!-- UniTrento -->
            <article class="edu-item">
              <div class="edu-header-with-logo">
                <div class="edu-logo seal">
                  <img src="/logounitn.png" alt="Logo Università di Trento" />
                </div>
                <div class="edu-info">
                  <div class="edu-title-row">
                    <h3>Università degli Studi di Trento</h3>
                    <span class="edu-date">2024 — {{ lang === 'it' ? 'Presente' : 'Present' }}</span>
                  </div>
                  <p class="edu-course">Interfacce e Tecnologie della Comunicazione (L-20)</p>
                  <p class="edu-desc">Dipartimento di Psicologia e Scienze Cognitive (DiPSCo).</p>
                </div>
              </div>
            </article>

            <!-- Liceo -->
            <article class="edu-item">
              <div class="edu-header-with-logo">
                <div class="edu-logo wide">
                  <img src="/logodavinci.webp" alt="Logo Liceo Leonardo Da Vinci" />
                </div>
                <div class="edu-info">
                  <div class="edu-title-row">
                    <h3>Liceo Scientifico Leonardo Da Vinci</h3>
                    <span class="edu-date">2019 — 2024</span>
                  </div>
                  <p class="edu-course">Scienze Applicate</p>
                  <p class="edu-desc">Trento, Italia.</p>
                </div>
              </div>
            </article>

            <!-- Certificazioni -->
            <article class="edu-item">
              <div class="edu-header">
                <h3>{{ lang === 'it' ? 'Certificazioni Ufficiali' : 'Certifications' }}</h3>
              </div>
              <ul class="cert-ul">
                <li><strong>Cambridge English</strong> — Livello B2 First (2023)</li>
                <li><strong>Tedesco CLA</strong> — Livello A1 (Centro Linguistico UniTrento)</li>
                <li><strong>Public Speaking & Leadership</strong> — School of Innovation UniTrento</li>
                <li><strong>Primo Soccorso / BLSD</strong> — Abilitazione DAE (2023)</li>
              </ul>
            </article>

          </div>
        </div>
      </section>

      <!-- 04. MODULO CONTATTI -->
      <section id="contatti" class="contact-section">
        <div class="contact-header">
          <h2 class="contact-title">{{ lang === 'it' ? 'Contattami' : 'Contact Me' }}</h2>
          <div class="contact-line"></div>
        </div>

        <div class="contact-split">
          <div class="contact-card info-card">
            <div class="email-block">
              <span class="material-symbols-outlined email-icon">mail</span>
              <a href="mailto:samuel.tavonatti05@gmail.com" class="email-link">samuel.tavonatti05@gmail.com</a>
            </div>
            
            <p class="info-text">
              {{ lang === 'it'
                ? 'Sono appassionato allo sviluppo della tecnologia, dell\'IA e del design che funziona. Cerco sempre di applicarmi al meglio e sono disponibile per il lavoro di gruppo e a fare parte di un team.'
                : 'I am passionate about technology development, AI, and functional design. I always strive to apply myself to the fullest and I am highly available for teamwork.'
              }}
            </p>

            <div class="social-icons">
              <a href="https://www.instagram.com/samuel.tavonatti/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="brand-icon">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/samuel-tavonatti-b18a09391/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="brand-icon">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div class="contact-card form-card">
            <form @submit.prevent="handleFormSubmit" class="styled-form">
              <div class="form-group">
                <input v-model="formData.name" type="text" required :placeholder="lang === 'it' ? 'Il tuo Nome' : 'Your Name'" />
              </div>
              
              <div class="form-group">
                <input v-model="formData.email" type="email" required :placeholder="lang === 'it' ? 'La tua Email' : 'Your Email'" />
              </div>

              <div class="form-group">
                <textarea v-model="formData.message" rows="5" required :placeholder="lang === 'it' ? 'Il tuo Messaggio' : 'Your Message'"></textarea>
              </div>

              <div class="privacy-check">
                <input type="checkbox" id="privacy" v-model="formData.privacy" required />
                <label for="privacy">
                  {{ lang === 'it' ? 'Ho letto e accetto la Privacy Policy. *' : 'I read and accept the Privacy Policy. *' }}
                </label>
              </div>

              <button type="submit" class="btn-submit">
                <span class="material-symbols-outlined">send</span>
                {{ lang === 'it' ? 'Invia Messaggio' : 'Send Message' }}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.page-wrapper {
  padding-top: 80px;
}

/* HERO */
.hero {
  max-width: 1400px;
  margin: 0 auto;
  padding: 8vh 2rem 8vh 2rem;
  border-bottom: 1px solid var(--border);
}

.hero-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem;
  align-items: center;
}

@media (min-width: 960px) {
  .hero-layout {
    grid-template-columns: 1.35fr 0.85fr;
    gap: 4.5rem;
  }
}

.status-indicator-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--surface-slate);
  border: 1px solid var(--border);
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  color: var(--accent-moss-light);
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: var(--accent-moss);
  box-shadow: 0 0 8px var(--accent-moss);
}

.hero-title {
  font-size: clamp(2.5rem, 5.2vw, 4.75rem);
  font-weight: 600;
  letter-spacing: -0.035em;
  line-height: 1.08;
  color: var(--text-main);
  margin-bottom: 1.75rem;
}

.hero-subtitle {
  font-size: clamp(1.05rem, 1.6vw, 1.25rem);
  color: var(--text-muted);
  max-width: 680px;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 2.25rem;
}

.hero-cta-row {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.btn-hero-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--accent-amber);
  color: #000000;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  transition: var(--transition);
}

.btn-hero-primary:hover {
  background-color: var(--accent-amber-hover);
  transform: translateY(-2px);
}

.btn-hero-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--surface-slate);
  border: 1px solid var(--border);
  color: var(--text-main);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.8rem 1.4rem;
  border-radius: 8px;
  transition: var(--transition);
}

.btn-hero-secondary:hover {
  border-color: var(--accent-amber);
  transform: translateY(-2px);
}

.arrow {
  transition: transform 0.2s ease;
}

.btn-hero-secondary:hover .arrow {
  transform: translateX(3px);
}

/* FOTO PERSONALE */
.hero-media {
  display: flex;
  justify-content: center;
}

.photo-frame {
  position: relative;
  width: 100%;
  max-width: 380px;
  aspect-ratio: 3 / 4;
  border-radius: 16px;
  overflow: hidden;
  background-color: var(--surface-slate);
  border: 1px solid var(--border);
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.6);
  transition: border-color 0.3s ease, transform 0.3s ease;
}

.photo-frame:hover {
  border-color: var(--accent-amber);
  transform: translateY(-3px);
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.photo-badge {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  background: rgba(10, 17, 40, 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  padding: 0.75rem 1rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.badge-role {
  font-size: 0.85rem;
  font-weight: 600;
  color: #ffffff;
}

.badge-sub {
  font-size: 0.75rem;
  color: var(--accent-amber);
  font-family: monospace;
}

/* CONTENT SECTIONS */
.content-sections {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.grid-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 6rem 0;
  border-bottom: 1px solid var(--border);
}

@media (min-width: 900px) {
  .grid-section {
    grid-template-columns: 300px 1fr;
    gap: 4rem;
  }
}

.section-left {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-num {
  font-size: 0.95rem;
  color: var(--accent-moss);
  font-family: monospace;
  font-weight: 700;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--text-main);
}

/* ABOUT SECTION RIGHE DI TESTO */
.about-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 850px;
}

.lead-paragraph {
  font-size: clamp(1.2rem, 1.8vw, 1.55rem);
  line-height: 1.5;
  color: var(--text-main);
  font-weight: 500;
  margin: 0;
}

.body-paragraph {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-muted);
  margin: 0;
}

.interest-paragraph {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-muted);
  border-left: 2px solid var(--accent-moss);
  padding-left: 1.25rem;
  margin: 0.5rem 0 0 0;
}

/* COMPETENZE */
.skills-list {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 800px;
}

.skill-head {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.icon-moss {
  color: var(--accent-moss-light);
  font-size: 22px;
}

.skill-row h3 {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-main);
}

.skill-row p {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 0.25rem;
}

.skill-context {
  display: block;
  font-size: 0.8rem;
  color: var(--text-muted);
  opacity: 0.8;
  font-family: monospace;
}

/* FORMAZIONE */
.edu-list {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 800px;
}

.edu-header-with-logo {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.edu-logo {
  flex-shrink: 0;
  background-color: #f8fafc;
  border: 1px solid var(--border);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
}

.edu-logo.seal {
  width: 65px;
  height: 65px;
}

.edu-logo.wide {
  width: 120px;
  height: 52px;
}

.edu-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.edu-info {
  flex: 1;
}

.edu-title-row {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
}

@media (min-width: 600px) {
  .edu-title-row {
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  }
}

.edu-title-row h3 {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-main);
}

.edu-date {
  font-size: 0.9rem;
  color: var(--text-muted);
}

.edu-course {
  font-size: 1rem;
  color: var(--text-main);
  margin-bottom: 0.25rem;
}

.edu-desc {
  font-size: 0.95rem;
  color: var(--text-muted);
}

.cert-ul {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cert-ul li {
  font-size: 0.95rem;
  color: var(--text-muted);
}

.cert-ul strong {
  color: var(--text-main);
  font-weight: 500;
}

/* SEZIONE CONTATTI */
.contact-section {
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-header {
  text-align: center;
  margin-bottom: 4rem;
}

.contact-title {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
}

.contact-line {
  width: 60px;
  height: 4px;
  background-color: var(--accent-amber);
  margin: 0 auto;
  border-radius: 2px;
}

.contact-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 1100px;
}

@media (min-width: 860px) {
  .contact-split {
    grid-template-columns: 1fr 1.5fr;
  }
}

.contact-card {
  background-color: var(--surface-slate);
  border-radius: 12px;
  padding: 3rem 2.5rem;
  border: 1px solid var(--border);
}

.info-card {
  display: flex;
  flex-direction: column;
}

.email-block {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.email-icon {
  color: var(--accent-amber);
  font-size: 24px;
}

.email-link {
  color: #ffffff;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: var(--transition);
}

.email-link:hover {
  color: var(--accent-amber);
}

.info-text {
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 3rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: auto;
}

.social-icons a {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background-color: var(--bg-navy);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: var(--transition);
  border: 1px solid var(--border);
}

.brand-icon {
  width: 20px;
  height: 20px;
}

.social-icons a:hover {
  background-color: var(--surface-slate-light);
  color: var(--accent-amber);
  transform: translateY(-2px);
}

/* FORM */
.styled-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.styled-form input,
.styled-form textarea {
  width: 100%;
  background-color: var(--bg-navy);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1rem 1.25rem;
  color: #ffffff;
  font-family: inherit;
  font-size: 1rem;
  outline: none;
  transition: var(--transition);
}

.styled-form input:focus,
.styled-form textarea:focus {
  border-color: var(--accent-amber);
}

.privacy-check {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1rem;
}

.privacy-check input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: var(--accent-amber);
  cursor: pointer;
}

.privacy-check label {
  font-size: 0.85rem;
  color: var(--text-muted);
  cursor: pointer;
}

.btn-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  background-color: var(--accent-amber);
  color: #000000;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: var(--transition);
  margin-top: 1rem;
}

.btn-submit:hover {
  background-color: var(--accent-amber-hover);
}
</style>