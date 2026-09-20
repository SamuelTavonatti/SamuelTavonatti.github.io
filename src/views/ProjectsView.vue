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
    <header class="page-header animate-fade-up">
      <div class="header-content">
        <h1 class="page-title">
          {{ lang === 'it' ? 'Progetti & Case Study' : 'Projects & Case Studies' }}
        </h1>
        <p class="page-subtitle">
          {{ lang === 'it'
            ? 'Una selezione dei miei lavori incentrati su UI/UX design, ergonomia cognitiva e sviluppo di interfacce.'
            : 'A curated selection of my works focused on UI/UX design, cognitive ergonomics, and interface development.'
          }}
        </p>
      </div>
    </header>

    <div class="content-sections animate-fade-up" style="animation-delay: 0.15s;">
      
      <div class="projects-grid">
        
        <article class="project-card">
          <div class="project-image-wrapper">
            <!-- Immagine aggiornata con il file IA -->
            <img src="/VoltRep-icon.jpg" alt="Logo del progetto Voltrep" class="project-img" />
            <div class="project-overlay">
              <span class="read-time-badge">{{ lang === 'it' ? 'Progetto Attivo' : 'Active Project' }}</span>
            </div>
          </div>
          
          <div class="project-content">
            <div class="project-header">
              <span class="project-category">UI/UX Design & Development</span>
              <h2 class="project-title">Voltrep</h2>
            </div>
            
            <p class="project-desc">
              {{ lang === 'it'
                ? 'Voltrep nasce da un\'esigenza personale: trovare un\'app per la palestra che non fosse né troppo complessa né a pagamento. Ho deciso di mettermi alla prova sviluppando un\'alternativa intuitiva e totalmente gratuita. Questo progetto mi ha permesso di risolvere un problema reale e, al contempo, di consolidare le mie competenze nello sviluppo di interfacce e nella gestione dei dati.'
                : 'Voltrep stems from a personal need: finding a gym app that wasn\'t overly complex or hidden behind a paywall. I decided to challenge myself by developing an intuitive and completely free alternative. This project allowed me to solve a real problem while strengthening my skills in interface development and data management.'
              }}
            </p>
            
            <div class="project-tags">
              <span class="tech-tag">UI/UX Design</span>
              <span class="tech-tag">Front-End</span>
              <span class="tech-tag">Data Management</span>
              <span class="tech-tag">Problem Solving</span>
            </div>
            
            <div class="project-actions">
              <a href="https://voltrep-app.web.app/" target="_blank" rel="noopener noreferrer" class="btn-project-primary">
                <span>{{ lang === 'it' ? 'Vai al Progetto' : 'View Project' }}</span>
                <span class="arrow-diag">↗</span>
              </a>
            </div>
          </div>
        </article>

      </div>
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

.page-header {
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 1.25rem 2.5rem 1.25rem;
  border-bottom: 1px solid var(--border);
}

@media (min-width: 768px) {
  .page-header {
    padding: 8vh 2rem 5vh 2rem;
  }
}

.header-content {
  max-width: 1000px;
}

.page-title {
  font-size: clamp(2.15rem, 7vw, 4.5rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--text-main);
  margin-bottom: 1.25rem;
  word-wrap: break-word;
}

.page-subtitle {
  font-size: clamp(1rem, 3.2vw, 1.3rem);
  color: var(--text-muted);
  max-width: 750px;
  line-height: 1.6;
}

.content-sections {
  max-width: 1400px;
  margin: 0 auto;
  padding: 3.5rem 1.25rem 5rem 1.25rem;
}

@media (min-width: 768px) {
  .content-sections {
    padding: 5rem 2rem 6rem 2rem;
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 900px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    gap: 2.5rem;
  }
}

@media (min-width: 1200px) {
  .projects-grid {
    gap: 3.5rem;
  }
}

.project-card {
  background-color: var(--surface-slate);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, border-color 0.3s ease;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-amber);
}

.project-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background-color: #121316;
  border-bottom: 1px solid var(--border);
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-img {
  transform: scale(1.03);
}

.project-overlay {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
}

.read-time-badge {
  background: rgba(18, 19, 22, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid var(--border);
  color: var(--text-main);
  font-family: monospace;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.4rem 0.75rem;
  border-radius: 8px;
}

.project-content {
  padding: 1.75rem 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

@media (min-width: 768px) {
  .project-content {
    padding: 2.25rem 2rem;
  }
}

.project-header {
  margin-bottom: 1rem;
}

.project-category {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--accent-amber);
  font-weight: 700;
  font-family: monospace;
  margin-bottom: 0.65rem;
  display: block;
}

.project-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-main);
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.project-desc {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1.75rem;
  flex: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.tech-tag {
  background-color: var(--bg-navy);
  border: 1px solid var(--border);
  color: var(--text-muted);
  font-size: 0.75rem;
  font-family: monospace;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.project-card:hover .tech-tag {
  border-color: rgba(194, 165, 126, 0.3);
  color: var(--text-main);
}

.project-actions {
  margin-top: auto;
}

.btn-project-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  transition: var(--transition);
  width: 100%;
  background-color: var(--accent-amber);
  color: #121316;
  font-weight: 700;
}

@media (min-width: 480px) {
  .btn-project-primary {
    width: auto;
  }
}

.btn-project-primary:hover {
  background-color: var(--accent-amber-hover);
  transform: translateY(-2px);
}

.arrow-diag {
  font-weight: 700;
  font-size: 1.1em;
  transition: transform 0.2s ease;
}

.project-card:hover .arrow-diag {
  transform: translate(2px, -2px);
}
</style>