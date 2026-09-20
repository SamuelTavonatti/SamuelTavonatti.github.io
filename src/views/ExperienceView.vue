<script setup>
defineProps({
  lang: {
    type: String,
    default: 'it'
  }
})
</script>

<template>
  <div class="page-wrapper">
    <!-- HERO HEADER -->
    <header class="page-header animate-fade-up">
      <div class="header-content">
        <h1 class="page-title">
          {{ lang === 'it' ? 'Esperienza sul Campo' : 'Field Experience' }}
        </h1>
        <p class="page-subtitle">
          {{ lang === 'it'
            ? 'Gestione del ritmo operativo, precisione tecnica su piattaforme digitali e dinamiche di squadra acquisite sul territorio e a contatto con il pubblico.'
            : 'Operational pacing, digital platform precision, and teamwork developed across regional field events and direct customer service.'
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
            
            <!-- 1. TRENTINO MARKETING (TIROCINIO ACCADEMICO & OPERATIVO) -->
            <article class="job-card">
              <div class="job-header">
                <div>
                  <div class="role-badge-row">
                    <span class="material-symbols-outlined icon-moss">desktop_windows</span>
                    <h3>{{ lang === 'it' ? 'Tirocinio UI/UX & Digital Content Specialist' : 'UI/UX & Digital Content Intern' }}</h3>
                  </div>
                  <span class="company-name">Trentino Marketing</span>
                </div>
                <span class="job-date">{{ lang === 'it' ? 'Ago 2026 — Ott 2026' : 'Aug 2026 — Oct 2026' }}</span>
              </div>
              <p class="job-location">{{ lang === 'it' ? 'Trento, Italia' : 'Trento, Italy' }}</p>
              <ul class="job-tasks">
                <li>
                  {{ lang === 'it'
                    ? 'Gestione e popolamento del CMS enterprise (Pimcore), stesura e pubblicazione di articoli editoriali con interlinking strategico per creare flussi di navigazione coerenti, uniti al monitoraggio tecnico e risoluzione di errori 404 e link interrotti.'
                    : 'Enterprise CMS administration (Pimcore), drafting and publishing editorial articles with strategic content linking to build intuitive user flows, alongside technical 404 error auditing and broken link resolution.'
                  }}
                </li>
                <li>
                  {{ lang === 'it'
                    ? 'Manutenzione e aggiornamento continuo dei contenuti per grandi eventi come I Suoni delle Dolomiti e TrentoDoc Festival, curando la correttezza delle posizioni geografiche, sedi d\'evento e dettagli logistici per il pubblico.'
                    : 'Continuous content maintenance and updates for landmark events such as I Suoni delle Dolomiti and TrentoDoc Festival, ensuring accurate geolocation, venue coordinates, and visitor logistics.'
                  }}
                </li>
                <li>
                  {{ lang === 'it'
                    ? 'Partecipazione attiva al coordinamento logistico e organizzativo sul campo durante TrentoDoc Festival, I Suoni delle Dolomiti e Il Festival dello Sport di Trento, garantendo tempestività nel problem solving operativo.'
                    : 'Active involvement in on-site operations and logistical coordination during TrentoDoc Festival, I Suoni delle Dolomiti, and Il Festival dello Sport di Trento.'
                  }}
                </li>
              </ul>
            </article>

            <!-- 2. CAMERIERE AL GUSTO LA CUCINA DI CORRADO -->
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
              <p class="job-location">{{ lang === 'it' ? 'Trento, Italia' : 'Trento, Italy' }}</p>
              <ul class="job-tasks">
                <li>
                  {{ lang === 'it' 
                    ? 'Gestione autonoma delle comande, servizio ai tavoli e cura continua dell’esperienza del cliente.' 
                    : 'Autonomous table service management, order handling, and continuous client care.' 
                  }}
                </li>
                <li>
                  {{ lang === 'it' 
                    ? 'Coordinamento rapido tra sala e cucina durante i momenti di massima affluenza e pressione.' 
                    : 'Fast coordination between kitchen and floor staff under peak service pressure.' 
                  }}
                </li>
                <li>
                  {{ lang === 'it' 
                    ? 'Applicazione di problem solving immediato, autocontrollo e comunicazione diretta nel team.' 
                    : 'Direct problem solving, composed attitude, and clear communication within the operational team.' 
                  }}
                </li>
              </ul>
            </article>

            <!-- 3. BARMAN / TUTTOFARE STAGIONALE -->
            <article class="job-card">
              <div class="job-header">
                <div>
                  <div class="role-badge-row">
                    <span class="material-symbols-outlined icon-moss">local_bar</span>
                    <h3>{{ lang === 'it' ? 'Tuttofare / Barman (Stagionale)' : 'All-Rounder / Barman (Seasonal)' }}</h3>
                  </div>
                  <span class="company-name">{{ lang === 'it' ? 'Rifugio / Struttura ricettiva' : 'Hospitality Mountain Lodge' }}</span>
                </div>
                <span class="job-date">{{ lang === 'it' ? 'Mag 2023 — Giu 2023' : 'May 2023 — Jun 2023' }}</span>
              </div>
              <p class="job-location">Passo Cereda, Trentino</p>
              <ul class="job-tasks">
                <li>
                  {{ lang === 'it' 
                    ? 'Preparazione caffetteria e bevande, supporto logistico e riordino degli spazi.' 
                    : 'Beverage preparation, logistical restocking, and venue maintenance.' 
                  }}
                </li>
                <li>
                  {{ lang === 'it' 
                    ? 'Accoglienza tempestiva degli avventori e gestione delle necessità operative quotidiane.' 
                    : 'Guest reception and daily operational problem resolution in a dynamic hospitality setting.' 
                  }}
                </li>
              </ul>
            </article>

            <!-- 4. ANIMATORE GIOVANILE -->
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
              <p class="job-location">{{ lang === 'it' ? 'Trento, Italia' : 'Trento, Italy' }}</p>
              <ul class="job-tasks">
                <li>
                  {{ lang === 'it' 
                    ? 'Organizzazione e guida di laboratori ricreativi e giochi educativi per gruppi di ragazzi.' 
                    : 'Organization and leadership of recreational workshops and group educational activities.' 
                  }}
                </li>
                <li>
                  {{ lang === 'it' 
                    ? 'Responsabilità sulla sicurezza e mediazione nelle dinamiche relazionali del gruppo.' 
                    : 'Safety supervision and peer mediation within group dynamics.' 
                  }}
                </li>
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
  color: var(--accent-amber);
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
  border-color: var(--accent-amber);
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
  color: var(--accent-amber);
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