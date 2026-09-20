<script setup>
import { ref } from 'vue'

defineProps({
  lang: {
    type: String,
    default: 'it'
  }
})

const copied = ref(false)

const copyEmail = () => {
  navigator.clipboard.writeText('samuel.tavonatti05@gmail.com')
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2200)
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
              ? 'Designer UI/UX & Studente di Interfacce' 
              : 'UI/UX Designer & Interfaces Student' 
            }}
          </h1>
          <p class="hero-subtitle">
            {{ lang === 'it'
              ? 'Samuel Tavonatti. Studente in Interfacce e Tecnologie della Comunicazione all’Università di Trento. Progetto esperienze digitali fondate sull\'ergonomia cognitiva, gestione di CMS e usabilità.'
              : 'Samuel Tavonatti. Communication Interfaces & Technologies student at UniTrento. Crafting digital experiences based on cognitive ergonomics, CMS workflows, and usability.'
            }}
          </p>

          <div class="hero-cta-row">
            <router-link :to="{ path: '/', hash: '#contatti' }" class="btn-hero-primary">
              <span>{{ lang === 'it' ? 'Contattami' : 'Get in Touch' }}</span>
              <span class="arrow">↓</span>
            </router-link>
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
              width="380"
              height="506"
              fetchpriority="high"
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

    <div class="content-sections animate-fade-up" style="animation-delay: 0.15s;">
      
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
              ? 'Ho consolidato la mia esperienza come UX/UI designer e content specialist sia nei laboratori universitari sia direttamente sul campo durante il tirocinio presso Trentino Marketing (agosto – ottobre 2026). In questo percorso mi sono occupato della gestione di CMS enterprise (Pimcore), della creazione di articoli editoriali con interlinking strategico, del controllo e risoluzione di errori 404, e dell\'aggiornamento puntuale dei contenuti e della geolocalizzazione per grandi eventi come I Suoni delle Dolomiti e TrentoDoc Festival, partecipando attivamente al presidio organizzativo sul territorio con Il Festival dello Sport di Trento.'
              : 'I refined my UX/UI design and digital operations through academic labs and direct field work during my internship at Trentino Marketing (August – October 2026). My responsibilities included enterprise CMS administration (Pimcore), crafting articles with strategic interlinking, 404 auditing and link resolution, and updating location details for landmark events like I Suoni delle Dolomiti and TrentoDoc Festival, alongside on-site operational coordination during Il Festival dello Sport di Trento.'
            }}
          </p>

          <p class="body-paragraph">
            {{ lang === 'it'
              ? 'Lavoro quotidianamente con Figma e piattaforme CMS come Pimcore; possiedo una solida comprensione della programmazione web front-end (HTML, CSS, JavaScript) che impiego per dialogare con i team tecnici e garantire la fattibilità dei progetti. Gestisco inoltre gli asset multimediali tramite la suite Adobe (Photoshop, Illustrator e soluzioni DAM).'
              : 'I work daily with Figma and CMS platforms like Pimcore; I leverage front-end foundations (HTML, CSS, JavaScript) to interface effectively with engineering teams. I also manage digital assets across the Adobe ecosystem (Photoshop, Illustrator, and DAM tools).'
            }}
          </p>

          <p class="interest-paragraph">
            {{ lang === 'it'
              ? 'Nel tempo libero approfondisco con costanza le novità sull\'Intelligenza Artificiale, l\'ergonomia delle interfacce e i principi di interaction design per creare prodotti digitali sempre più funzionali, chiari e accessibili.'
              : 'In my spare time, I continuously study AI developments, interface ergonomics, and interaction design principles to create increasingly functional, clean, and accessible digital tools.'
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
                <span class="material-symbols-outlined icon-accent">web</span>
                <h3>{{ lang === 'it' ? 'Gestione CMS, Content Flow & Quality Assurance' : 'CMS Operations, Content Flow & QA' }}</h3>
              </div>
              <p>
                {{ lang === 'it'
                  ? 'Amministrazione di CMS enterprise (Pimcore), stesura e pubblicazione articoli, architetture di interlinking per creare flussi di navigazione coerenti, monitoraggio e bonifica errori 404.'
                  : 'Enterprise CMS administration (Pimcore), drafting and publishing editorial articles, strategic interlinking to create intuitive user flows, and 404 error auditing.'
                }}
              </p>
              <span class="skill-context">{{ lang === 'it' ? 'Applicazione pratica: Trentino Marketing' : 'Practical Context: Trentino Marketing' }}</span>
            </div>

            <div class="skill-row">
              <div class="skill-head">
                <span class="material-symbols-outlined icon-accent">event_available</span>
                <h3>{{ lang === 'it' ? 'Manutenzione Contenuti Eventi & Supporto Operativo' : 'Event Content Maintenance & Operations' }}</h3>
              </div>
              <p>
                {{ lang === 'it'
                  ? 'Aggiornamento e verifica di dettagli logistici e geolocalizzazione sedi evento per il pubblico; presidio e coordinamento organizzativo direttamente sul territorio.'
                  : 'Updating and verifying venue coordinates, geolocation, and visitor logistics; on-site logistical support and operational coordination.'
                }}
              </p>
              <span class="skill-context">{{ lang === 'it' ? 'Casi sul campo: I Suoni delle Dolomiti, TrentoDoc Festival & Festival dello Sport' : 'Field Cases: I Suoni delle Dolomiti, TrentoDoc Festival & Sports Festival' }}</span>
            </div>

            <div class="skill-row">
              <div class="skill-head">
                <span class="material-symbols-outlined icon-accent">design_services</span>
                <h3>{{ lang === 'it' ? 'UI/UX & Ergonomia Cognitiva' : 'UI/UX & Cognitive Ergonomics' }}</h3>
              </div>
              <p>
                {{ lang === 'it'
                  ? 'Progettazione di Landing Page, Wireframing, Prototipazione su Figma, Design Thinking, User Research e test di usabilità per interfacce web.'
                  : 'Landing page design, wireframing, Figma prototyping, Design Thinking, User Research, and usability testing for web interfaces.'
                }}
              </p>
              <span class="skill-context">{{ lang === 'it' ? 'Contesto: Università degli Studi di Trento & Progetti personali' : 'Context: University of Trento & Personal Projects' }}</span>
            </div>

            <div class="skill-row">
              <div class="skill-head">
                <span class="material-symbols-outlined icon-accent">handyman</span>
                <h3>{{ lang === 'it' ? 'Strumenti Digitali, Front-End & Problem Solving' : 'Digital Tools, Front-End & Problem Solving' }}</h3>
              </div>
              <p>
                {{ lang === 'it'
                  ? 'Pimcore CMS, Figma, Suite Adobe (Photoshop, Illustrator, gestione DAM), basi HTML/CSS/JS per dialogo con sviluppatori, public speaking, inglese B2.'
                  : 'Pimcore CMS, Figma, Adobe Suite (Photoshop, Illustrator, DAM workflows), HTML/CSS/JS fundamentals for dev handoffs, public speaking, B2 English.'
                }}
              </p>
              <span class="skill-context">{{ lang === 'it' ? 'Esperienza sul campo: Trentino Marketing, UniTrento & contesti lavorativi' : 'Field Experience: Trentino Marketing, UniTrento & working roles' }}</span>
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
                  <img src="/logounitn.png" alt="Logo Università di Trento" width="65" height="65" loading="lazy" />
                </div>
                <div class="edu-info">
                  <div class="edu-title-row">
                    <h3>{{ lang === 'it' ? 'Università degli Studi di Trento' : 'University of Trento' }}</h3>
                    <span class="edu-date">2024 — {{ lang === 'it' ? 'Presente' : 'Present' }}</span>
                  </div>
                  <p class="edu-course">{{ lang === 'it' ? 'Interfacce e Tecnologie della Comunicazione (L-20)' : 'Interfaces and Communication Technologies (BSc)' }}</p>
                  <p class="edu-desc">{{ lang === 'it' ? 'Dipartimento di Psicologia e Scienze Cognitive (DiPSCo).' : 'Department of Psychology and Cognitive Science (DiPSCo).' }}</p>
                </div>
              </div>
            </article>

            <!-- Liceo -->
            <article class="edu-item">
              <div class="edu-header-with-logo">
                <div class="edu-logo wide">
                  <img src="/logodavinci.webp" alt="Logo Liceo Leonardo Da Vinci" width="120" height="52" loading="lazy" />
                </div>
                <div class="edu-info">
                  <div class="edu-title-row">
                    <h3>Liceo Scientifico Leonardo Da Vinci</h3>
                    <span class="edu-date">2019 — 2024</span>
                  </div>
                  <p class="edu-course">{{ lang === 'it' ? 'Scienze Applicate' : 'Applied Sciences Diploma' }}</p>
                  <p class="edu-desc">Trento, Italia.</p>
                </div>
              </div>
            </article>

            <!-- Certificazioni Bilingui -->
            <article class="edu-item">
              <div class="edu-header">
                <h3>{{ lang === 'it' ? 'Certificazioni Ufficiali' : 'Certifications' }}</h3>
              </div>
              <ul class="cert-ul">
                <li><strong>Cambridge English</strong> — {{ lang === 'it' ? 'Livello B2 First (2023)' : 'Level B2 First (2023)' }}</li>
                <li><strong>{{ lang === 'it' ? 'Tedesco CLA' : 'German CLA' }}</strong> — {{ lang === 'it' ? 'Livello A1 (Centro Linguistico UniTrento)' : 'Level A1 (UniTrento Language Centre)' }}</li>
                <li><strong>Public Speaking & Leadership</strong> — School of Innovation UniTrento</li>
                <li><strong>{{ lang === 'it' ? 'Primo Soccorso / BLSD' : 'First Aid / BLSD' }}</strong> — {{ lang === 'it' ? 'Abilitazione DAE (2023)' : 'AED Certification (2023)' }}</li>
              </ul>
            </article>

          </div>
        </div>
      </section>

      <!-- 04. CONTATTI -->
      <section id="contatti" class="grid-section contact-grid">
        <div class="section-left">
          <span class="section-num">04 /</span>
          <h2 class="section-title">{{ lang === 'it' ? 'Contattami' : 'Get in Touch' }}</h2>
        </div>

        <div class="section-right">
          <div class="contact-editorial-layout">
            <p class="large-text">
              {{ lang === 'it'
                ? 'Se hai un progetto, un\'idea da sviluppare o vuoi avviare un confronto sul design di interfaccia e l\'usabilità, scrivimi pure.'
                : 'If you have a project, an interface concept to develop, or want to discuss interaction design and usability, feel free to reach out.'
              }}
            </p>

            <div class="contact-channels-grid">
              <!-- Canale Diretto Email / Gmail -->
              <div class="channel-card main-channel">
                <span class="channel-tag">{{ lang === 'it' ? 'Canale Diretto' : 'Direct Channel' }}</span>
                
                <div 
                  class="email-interactive-row" 
                  :class="{ 'is-copied': copied }"
                  @click="copyEmail" 
                  role="button" 
                  tabindex="0" 
                  @keyup.enter="copyEmail"
                  :aria-label="lang === 'it' ? 'Copia indirizzo email samuel.tavonatti05@gmail.com' : 'Copy email address samuel.tavonatti05@gmail.com'"
                >
                  <div class="email-details">
                    <span class="material-symbols-outlined email-icon-at">alternate_email</span>
                    <span class="email-val">samuel.tavonatti05@gmail.com</span>
                  </div>
                  
                  <div class="btn-copy-tag" aria-live="polite">
                    <span class="material-symbols-outlined icon-copy">{{ copied ? 'check' : 'content_copy' }}</span>
                    <span>{{ copied ? (lang === 'it' ? 'Copiato!' : 'Copied!') : (lang === 'it' ? 'Copia' : 'Copy') }}</span>
                  </div>
                </div>

                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=samuel.tavonatti05@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn-open-gmail"
                >
                  <svg class="gmail-svg-icon" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>{{ lang === 'it' ? 'Componi in Gmail' : 'Compose in Gmail' }}</span>
                  <span class="arrow-diag">↗</span>
                </a>
              </div>

              <!-- Network Social -->
              <div class="channel-card network-channel">
                <span class="channel-tag">{{ lang === 'it' ? 'Network & Profili' : 'Network & Profiles' }}</span>
                <div class="social-links-vertical">
                  <a href="https://www.linkedin.com/in/samuel-tavonatti-b18a09391/" target="_blank" rel="noopener noreferrer" class="social-item">
                    <div class="social-left">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="social-svg">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      <span>LinkedIn</span>
                    </div>
                    <span class="arrow-diag">↗</span>
                  </a>

                  <a href="https://www.instagram.com/samuel.tavonatti/" target="_blank" rel="noopener noreferrer" class="social-item">
                    <div class="social-left">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="social-svg">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      <span>Instagram</span>
                    </div>
                    <span class="arrow-diag">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<style scoped>
.page-wrapper {
  padding-top: 70px;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}

/* HERO */
.hero {
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 1.25rem;
  border-bottom: 1px solid var(--border);
}

@media (min-width: 768px) {
  .hero {
    padding: 8vh 2rem;
  }
}

.hero-layout {
  display: flex;
  flex-direction: column-reverse;
  gap: 2.5rem;
  align-items: center;
}

@media (min-width: 960px) {
  .hero-layout {
    display: grid;
    grid-template-columns: 1.35fr 0.85fr;
    gap: 4.5rem;
    align-items: center;
  }
}

.hero-content {
  width: 100%;
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
  color: var(--accent-amber);
  margin-bottom: 1.25rem;
  font-weight: 500;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: var(--accent-amber);
}

.hero-title {
  font-size: clamp(2.15rem, 7vw, 4.75rem);
  font-weight: 600;
  letter-spacing: -0.035em;
  line-height: 1.1;
  color: var(--text-main);
  margin-bottom: 1.25rem;
  word-wrap: break-word;
}

.hero-subtitle {
  font-size: clamp(1rem, 3.5vw, 1.25rem);
  color: var(--text-muted);
  max-width: 680px;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.hero-cta-row {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  width: 100%;
}

@media (min-width: 520px) {
  .hero-cta-row {
    flex-direction: row;
    align-items: center;
    gap: 1.25rem;
    width: auto;
  }
}

.btn-hero-primary,
.btn-hero-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  font-size: 0.95rem;
  padding: 0.8rem 1.4rem;
  border-radius: 8px;
  width: 100%;
  transition: var(--transition);
}

@media (min-width: 520px) {
  .btn-hero-primary,
  .btn-hero-secondary {
    width: auto;
  }
}

.btn-hero-primary {
  background-color: var(--accent-amber);
  color: #121316;
  font-weight: 700;
}

.btn-hero-primary:hover {
  background-color: var(--accent-amber-hover);
}

.btn-hero-secondary {
  background-color: var(--surface-slate);
  border: 1px solid var(--border);
  color: var(--text-main);
  font-weight: 600;
}

.btn-hero-secondary:hover {
  border-color: var(--accent-amber);
}

.arrow {
  transition: transform 0.2s ease;
}

/* FOTO PERSONALE */
.hero-media {
  display: flex;
  justify-content: center;
  width: 100%;
}

.photo-frame {
  position: relative;
  width: 100%;
  max-width: 320px;
  aspect-ratio: 3 / 4;
  border-radius: 16px;
  overflow: hidden;
  background-color: var(--surface-slate);
  border: 1px solid var(--border);
  box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.6);
}

@media (min-width: 768px) {
  .photo-frame {
    max-width: 380px;
  }
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
  bottom: 0.85rem;
  left: 0.85rem;
  right: 0.85rem;
  background: rgba(18, 19, 22, 0.92);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  padding: 0.65rem 0.85rem;
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
  padding: 0 1.25rem;
}

@media (min-width: 768px) {
  .content-sections {
    padding: 0 2rem;
  }
}

.grid-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 3.5rem 0;
  border-bottom: 1px solid var(--border);
}

@media (min-width: 900px) {
  .grid-section {
    grid-template-columns: 300px 1fr;
    gap: 4rem;
    padding: 5rem 0;
  }
}

.contact-grid {
  border-bottom: none;
}

.section-left {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.section-num {
  font-size: 0.9rem;
  color: var(--accent-amber);
  font-family: monospace;
  font-weight: 700;
}

.section-title {
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--text-main);
}

.large-text {
  font-size: clamp(1.15rem, 3.2vw, 1.55rem);
  line-height: 1.5;
  color: var(--text-main);
  font-weight: 500;
  margin-bottom: 2rem;
}

/* ABOUT */
.about-content {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.lead-paragraph {
  font-size: clamp(1.15rem, 3vw, 1.45rem);
  line-height: 1.5;
  color: var(--text-main);
  font-weight: 500;
}

.body-paragraph {
  font-size: 1rem;
  line-height: 1.65;
  color: var(--text-muted);
}

.interest-paragraph {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--text-muted);
  border-left: 2px solid var(--accent-amber);
  padding-left: 1rem;
  margin-top: 0.25rem;
}

/* COMPETENZE */
.skills-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 768px) {
  .skills-list {
    gap: 2.75rem;
  }
}

.skill-head {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.4rem;
}

.icon-accent {
  color: var(--accent-amber);
  font-size: 20px;
}

.skill-row h3 {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-main);
}

.skill-row p {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.55;
  margin-bottom: 0.25rem;
}

.skill-context {
  display: block;
  font-size: 0.8rem;
  color: var(--accent-moss-light);
  font-family: monospace;
}

/* FORMAZIONE */
.edu-list {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.edu-header-with-logo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
}

@media (min-width: 520px) {
  .edu-header-with-logo {
    flex-direction: row;
    align-items: flex-start;
    gap: 1.25rem;
  }
}

.edu-logo {
  flex-shrink: 0;
  background-color: #f8fafc;
  border: 1px solid var(--border);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
}

.edu-logo.seal {
  width: 55px;
  height: 55px;
}

.edu-logo.wide {
  width: 105px;
  height: 48px;
}

.edu-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.edu-info {
  flex: 1;
  width: 100%;
}

.edu-title-row {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 0.4rem;
}

@media (min-width: 600px) {
  .edu-title-row {
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  }
}

.edu-title-row h3 {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-main);
}

.edu-date {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-family: monospace;
}

.edu-course {
  font-size: 0.95rem;
  color: var(--text-main);
  margin-bottom: 0.2rem;
}

.edu-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
}

.cert-ul {
  list-style: none;
  padding: 0;
  margin-top: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.cert-ul li {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.cert-ul strong {
  color: var(--text-main);
  font-weight: 600;
}

/* 04. CONTATTI */
.contact-editorial-layout {
  width: 100%;
}

.contact-channels-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  width: 100%;
}

@media (min-width: 780px) {
  .contact-channels-grid {
    grid-template-columns: 1.35fr 1fr;
    gap: 1.75rem;
  }
}

.channel-card {
  background-color: var(--surface-slate);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.35rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
}

@media (min-width: 600px) {
  .channel-card {
    padding: 1.75rem;
  }
}

.channel-tag {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--accent-amber);
  font-weight: 700;
  font-family: monospace;
  margin-bottom: 1.25rem;
}

/* EMAIL INTERATTIVA ANTI-OVERFLOW */
.email-interactive-row {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background-color: var(--bg-navy);
  border: 1px solid var(--border);
  padding: 0.75rem 0.85rem;
  border-radius: 8px;
  cursor: pointer;
  transition: var(--transition);
  margin-bottom: 1.25rem;
  width: 100%;
  box-sizing: border-box;
}

@media (min-width: 480px) {
  .email-interactive-row {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.email-details {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
}

.email-icon-at {
  font-size: 16px;
  color: var(--text-muted);
  flex-shrink: 0;
}

.email-val {
  font-family: monospace;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-main);
  word-break: break-all;
}

.btn-copy-tag {
  background: none;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--text-muted);
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  align-self: flex-end;
}

@media (min-width: 480px) {
  .btn-copy-tag {
    align-self: auto;
  }
}

.icon-copy {
  font-size: 16px;
  color: var(--accent-amber);
}

.email-interactive-row.is-copied {
  border-color: var(--accent-amber);
  background-color: rgba(194, 165, 126, 0.08);
}

.email-interactive-row.is-copied .email-val,
.email-interactive-row.is-copied .email-icon-at,
.email-interactive-row.is-copied .btn-copy-tag {
  color: var(--accent-amber);
}

/* BOTTONE GMAIL */
.btn-open-gmail {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  background-color: var(--accent-amber);
  color: #121316;
  text-decoration: none;
  padding: 0.8rem 1.25rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 700;
  width: 100%;
  box-sizing: border-box;
}

.gmail-svg-icon {
  width: 18px;
  height: 18px;
}

.arrow-diag {
  font-weight: 700;
}

/* LINK SOCIAL */
.social-links-vertical {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

.social-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: var(--bg-navy);
  border: 1px solid var(--border);
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-main);
  font-size: 0.95rem;
  font-weight: 500;
  width: 100%;
  box-sizing: border-box;
}

.social-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.social-svg {
  width: 18px;
  height: 18px;
  color: var(--accent-amber);
}
</style>