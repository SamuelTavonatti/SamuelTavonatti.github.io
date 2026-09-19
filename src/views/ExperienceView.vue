<script setup>
defineProps({
  lang: String
})
</script>

<template>
  <div class="page-wrapper">
    <!-- HERO HEADER ESPERIENZE -->
    <header class="page-header animate-fade-up">
      <div class="header-content">
        <h1 class="page-title">
          {{ lang === 'it' ? 'Esperienza sul Campo' : 'Field Experience' }}
        </h1>
        <p class="page-subtitle">
          {{ lang === 'it'
            ? 'Gestione del ritmo operativo, precisione e dinamiche di squadra acquisite a contatto diretto con il pubblico e la ristorazione.'
            : 'Operational pacing, accuracy, and team collaboration developed through direct customer-facing service.'
          }}
        </p>
      </div>
    </header>

    <div class="content-sections animate-fade-up" style="animation-delay: 0.15s;">
      <section class="grid-section">
        <div class="section-left">
          <span class="section-num">01 /</span>
          <h2 class="section-title">{{ lang === 'it' ? 'Percorso Lavorativo' : 'Work History' }}</h2>
        </div>
        
        <div class="section-right">
          <div class="job-list">
            
            <!-- Cameriere Al Gusto la cucina di Corrado -->
            <article class="job-card">
              <div class="job-header">
                <div>
                  <div class="role-badge-row">
                    <span class="material-symbols-outlined icon-moss">restaurant</span>
                    <h3>{{ lang === 'it' ? 'Cameriere / Servizio di Sala' : 'Waiter / Front of House' }}</h3>
                  </div>
                  <span class="company-name">Al Gusto la cucina di Corrado</span>
                </div>
                <span class="job-date">{{ lang === 'it' ? 'Ago 2023 — Presente' : 'Aug 2023 — Present' }}</span>
              </div>
              <p class="job-location">Trento, Italia</p>
              <ul class="job-tasks">
                <li>{{ lang === 'it' ? 'Gestione autonoma delle comande, servizio ai tavoli e cura continua dell’esperienza del cliente.' : 'Autonomous table service management, order handling, and client care.' }}</li>
                <li>{{ lang === 'it' ? 'Coordinamento rapido tra sala e cucina durante i momenti di massima affluenza e pressione.' : 'Fast coordination between kitchen and floor staff under peak service pressure.' }}</li>
                <li>{{ lang === 'it' ? 'Applicazione di problem solving immediato, autocontrollo e comunicazione diretta nel team.' : 'Direct problem solving, composed attitude, and clear communication within the team.' }}</li>
              </ul>
            </article>

            <!-- Barman / Tuttofare Stagionale -->
            <article class="job-card">
              <div class="job-header">
                <div>
                  <div class="role-badge-row">
                    <span class="material-symbols-outlined icon-moss">local_bar</span>
                    <h3>{{ lang === 'it' ? 'Tuttofare / Barman (Stagionale)' : 'All-Rounder / Barman (Seasonal)' }}</h3>
                  </div>
                  <span class="company-name">{{ lang === 'it' ? 'Rifugio / Struttura ricettiva' : 'Hospitality Lodge' }}</span>
                </div>
                <span class="job-date">{{ lang === 'it' ? 'Mag 2023 — Giu 2023' : 'May 2023 — Jun 2023' }}</span>
              </div>
              <p class="job-location">Passo Cereda, Trentino</p>
              <ul class="job-tasks">
                <li>{{ lang === 'it' ? 'Preparazione caffetteria e bevande, supporto logistico e riordino degli spazi.' : 'Beverage preparation, logistical restocking, and venue maintenance.' }}</li>
                <li>{{ lang === 'it' ? 'Accoglienza tempestiva degli avventori e gestione delle necessità operative quotidiane.' : 'Guest reception and daily operational problem resolution.' }}</li>
              </ul>
            </article>

            <!-- Animatore Giovanile -->
            <article class="job-card">
              <div class="job-header">
                <div>
                  <div class="role-badge-row">
                    <span class="material-symbols-outlined icon-moss">groups</span>
                    <h3>{{ lang === 'it' ? 'Volontariato / Animatore Giovanile' : 'Volunteer / Youth Staff' }}</h3>
                  </div>
                  <span class="company-name">{{ lang === 'it' ? 'Attività estive educative' : 'Youth Community Programs' }}</span>
                </div>
                <span class="job-date">{{ lang === 'it' ? 'Estate 2022' : 'Summer 2022' }}</span>
              </div>
              <p class="job-location">Trento, Italia</p>
              <ul class="job-tasks">
                <li>{{ lang === 'it' ? 'Organizzazione e guida di laboratori ricreativi e giochi educativi per gruppi di ragazzi.' : 'Organization and leadership of recreational workshops and group activities.' }}</li>
                <li>{{ lang === 'it' ? 'Responsabilità sulla sicurezza e mediazione nelle dinamiche relazionali del gruppo.' : 'Safety supervision and peer mediation within group dynamics.' }}</li>
              </ul>
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

.job-list {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  max-width: 850px;
}

.job-card {
  background-color: var(--surface-slate);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2.25rem 2rem;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.job-card:hover {
  border-color: rgba(245, 158, 11, 0.4);
  transform: translateY(-2px);
}

.job-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}

@media (min-width: 650px) {
  .job-header {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.role-badge-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.25rem;
}

.role-badge-row h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-main);
}

.icon-moss {
  color: var(--accent-moss-light);
  font-size: 22px;
}

.company-name {
  display: block;
  font-size: 0.95rem;
  color: var(--accent-amber);
  font-weight: 500;
}

.job-date {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-family: monospace;
  background-color: var(--bg-navy);
  padding: 0.3rem 0.65rem;
  border-radius: 6px;
  border: 1px solid var(--border);
  align-self: flex-start;
}

.job-location {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

.job-tasks {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border-top: 1px solid var(--border);
  padding-top: 1.25rem;
}

.job-tasks li {
  position: relative;
  padding-left: 1.5rem;
  color: var(--text-main);
  font-size: 0.95rem;
  line-height: 1.6;
}

.job-tasks li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent-amber);
  font-weight: 700;
}
</style>