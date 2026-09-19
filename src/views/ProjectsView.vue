<script setup>
defineProps({
  lang: String
})
</script>

<template>
  <div class="page-wrapper">
    <!-- HERO HEADER PROGETTI -->
    <header class="page-header animate-fade-up">
      <div class="header-content">
        <h1 class="page-title">
          {{ lang === 'it' ? 'Progetti Selezionati.' : 'Selected Works.' }}
        </h1>
        <p class="page-subtitle">
          {{ lang === 'it'
            ? 'Applicazioni autonome focalizzate su usabilità e tracking degli obiettivi, affiancate dagli elaborati didattici di UniTrento.'
            : 'Standalone web applications focusing on usability and habit tracking, alongside academic coursework at UniTrento.'
          }}
        </p>
      </div>
    </header>

    <div class="content-sections animate-fade-up" style="animation-delay: 0.15s;">
      
      <!-- 01. SVILUPPO AUTONOMO -->
      <section class="grid-section">
        <div class="section-left">
          <span class="section-num">01 /</span>
          <h2 class="section-title">{{ lang === 'it' ? 'Sviluppo Personale' : 'Personal Dev' }}</h2>
        </div>
        
        <div class="section-right">
          <div class="projects-list">
            
            <!-- VoltRep -->
            <article class="project-card featured-card">
              <div class="card-top">
                <div class="title-wrap">
                  <span class="status-live">
                    <span class="pulse-dot"></span> LIVE APP
                  </span>
                  <h3>VoltRep</h3>
                </div>
                <span class="domain-tag">voltrep-app.web.app</span>
              </div>

              <p class="project-desc">
                {{ lang === 'it'
                  ? 'Applicazione web minimale pensata per il monitoraggio degli allenamenti in palestra: massimizza la costanza quotidiana tramite un sistema di streak visivi e registra i progressi sui carichi senza distrazioni visive.'
                  : 'Minimal workout tracking web application designed to encourage workout consistency through streak mechanics and simple progressive overload logging.'
                }}
              </p>

              <div class="project-footer">
                <div class="tech-tags">
                  <span>Vue.js</span>
                  <span>UI/UX</span>
                  <span>Responsive</span>
                </div>
                <a href="https://voltrep-app.web.app" target="_blank" rel="noopener noreferrer" class="btn-visit">
                  <span>{{ lang === 'it' ? 'Apri Applicazione' : 'Open Live App' }}</span>
                  <span class="arrow">↗</span>
                </a>
              </div>
            </article>

            <!-- Prossimo Progetto Personale -->
            <article class="project-card slot-card">
              <div class="card-top">
                <div class="title-wrap">
                  <span class="status-pipeline">PIPELINE</span>
                  <h3 class="dimmed">[ Prossimo Progetto Personale ]</h3>
                </div>
              </div>
              <p class="project-desc">
                {{ lang === 'it'
                  ? 'Nuova idea di interfaccia attualmente in fase di ideazione su Figma e sperimentazione dei flussi utente.'
                  : 'New interface concept currently undergoing Figma wireframing and user flow prototyping.'
                }}
              </p>
            </article>

          </div>
        </div>
      </section>

      <!-- 02. ELABORATI ACCADEMICI -->
      <section class="grid-section">
        <div class="section-left">
          <span class="section-num">02 /</span>
          <h2 class="section-title">{{ lang === 'it' ? 'Ambito Universitario' : 'Academic Works' }}</h2>
        </div>
        
        <div class="section-right">
          <div class="projects-list">
            
            <article class="project-card slot-card">
              <div class="card-top">
                <div class="title-wrap">
                  <span class="status-academic">DiPSCo • UniTrento</span>
                  <h3>[ Laboratorio di Interfacce ]</h3>
                </div>
              </div>
              <p class="project-desc">
                {{ lang === 'it'
                  ? 'Spazio dedicato all’analisi euristica e alla riprogettazione di un sistema interattivo per il corso di laurea triennale.'
                  : 'Dedicated space for heuristic evaluation and interactive system redesign for the Bachelor degree curriculum.'
                }}
              </p>
            </article>

            <article class="project-card slot-card">
              <div class="card-top">
                <div class="title-wrap">
                  <span class="status-academic">DiPSCo • UniTrento</span>
                  <h3>[ Ricerca & Usabilità ]</h3>
                </div>
              </div>
              <p class="project-desc">
                {{ lang === 'it'
                  ? 'Spazio riservato ai test di usabilità, metriche cognitive e documentazione di user experience del percorso accademico.'
                  : 'Reserved slot for usability testing, cognitive metrics evaluation, and UX documentation.'
                }}
              </p>
            </article>

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

.page-header {
  max-width: 1400px;
  margin: 0 auto;
  padding: 10vh 2rem 6vh 2rem;
  border-bottom: 1px solid var(--border);
}

.header-content {
  max-width: 1000px;
}

.page-title {
  font-size: clamp(2.75rem, 6vw, 5rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.05;
  color: var(--text-main);
  margin-bottom: 1.5rem;
}

.page-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  color: var(--text-muted);
  max-width: 750px;
  line-height: 1.6;
  font-weight: 400;
}

.content-sections {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.grid-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 5rem 0;
  border-bottom: 1px solid var(--border);
}

.grid-section:last-child {
  border-bottom: none;
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

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 850px;
}

.project-card {
  background-color: var(--surface-slate);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2.25rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.featured-card:hover {
  border-color: var(--accent-amber);
  transform: translateY(-2px);
}

.slot-card {
  background-color: rgba(30, 41, 59, 0.4);
  border-style: dashed;
}

.card-top {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

@media (min-width: 600px) {
  .card-top {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.title-wrap {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.title-wrap h3 {
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--text-main);
  margin: 0;
}

.dimmed {
  color: var(--text-muted) !important;
  font-weight: 500 !important;
}

.status-live {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: #10b981;
  background: rgba(16, 185, 129, 0.12);
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.pulse-dot {
  width: 6px;
  height: 6px;
  background-color: #10b981;
  border-radius: 50%;
}

.domain-tag {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-family: monospace;
}

.status-pipeline {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent-amber);
  background: rgba(245, 158, 11, 0.1);
  padding: 0.25rem 0.55rem;
  border-radius: 6px;
  letter-spacing: 0.05em;
}

.status-academic {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent-moss-light);
  background: rgba(88, 129, 87, 0.15);
  padding: 0.25rem 0.55rem;
  border-radius: 6px;
}

.project-desc {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}

.project-footer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-top: 1px solid var(--border);
  padding-top: 1.25rem;
}

@media (min-width: 600px) {
  .project-footer {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.tech-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tech-tags span {
  font-size: 0.75rem;
  font-family: monospace;
  color: var(--text-main);
  background-color: var(--bg-navy);
  border: 1px solid var(--border);
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
}

.btn-visit {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background-color: var(--accent-amber);
  color: #000000;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.55rem 1rem;
  border-radius: 6px;
  transition: opacity 0.2s ease;
  align-self: flex-start;
}

.btn-visit:hover {
  opacity: 0.9;
}

.arrow {
  font-weight: 700;
}
</style>