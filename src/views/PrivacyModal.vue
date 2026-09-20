<script setup>
defineProps({
  isOpen: Boolean,
  lang: {
    type: String,
    default: 'it'
  }
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>

<template>
  <Transition name="fade">
    <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-container" role="dialog" aria-modal="true" aria-labelledby="policy-title">
        <!-- HEADER -->
        <div class="modal-header">
          <h2 id="policy-title">
            {{ lang === 'it' ? 'Note Legali, Privacy & Cookie Policy' : 'Legal Notice, Privacy & Cookie Policy' }}
          </h2>
          <button class="btn-close" @click="closeModal" :aria-label="lang === 'it' ? 'Chiudi' : 'Close'">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>

        <!-- CONTENUTO COMPLETO -->
        <div class="modal-body">
          <div class="modal-badge-row">
            <span class="status-badge">GDPR Compliant • Reg. (UE) 2016/679</span>
            <span class="modal-date">
              {{ lang === 'it' ? 'Ultimo aggiornamento: 20 Settembre 2026' : 'Last updated: September 20, 2026' }}
            </span>
          </div>

          <!-- VERSIONE ITALIANO -->
          <template v-if="lang === 'it'">
            <section class="policy-section">
              <h3>1. Titolare del Trattamento</h3>
              <p>
                Il Titolare del trattamento dei dati relativi a questo portfolio personale è <strong>Samuel Tavonatti</strong>, domiciliato a Trento (TN), Italia, contattabile per qualsiasi chiarimento in materia di protezione dei dati via email all'indirizzo:
                <a href="mailto:samuel.tavonatti05@gmail.com" class="link-highlight">samuel.tavonatti05@gmail.com</a>.
              </p>
              <p class="sub-clause">
                Ai sensi dell'art. 37 del Regolamento (UE) 2016/679 (GDPR), non sussiste l'obbligo di nomina del Responsabile della Protezione dei Dati (DPO/RPD).
              </p>
            </section>

            <section class="policy-section">
              <h3>2. Dati Raccolti e Finalità del Trattamento</h3>
              <p>
                Questo sito web è strutturato secondo il principio di <em>Minimizzazione dei Dati</em> (art. 5, par. 1, lett. c del GDPR) e non acquisisce dati per finalità commerciali, di profilazione o di marketing:
              </p>
              <ul>
                <li>
                  <strong>Assenza di moduli attivi su database:</strong> Il sito non memorizza informazioni su database remoti né gestisce invii server-side. La sezione contatti predispone unicamente un'interazione manuale all'interno del client email prescelto dal visitatore (es. web app Gmail o client di sistema).
                </li>
                <li>
                  <strong>Comunicazioni volontarie via email:</strong> L'eventuale invio spontaneo di comunicazioni via email comporta l'acquisizione dell'indirizzo del mittente e delle informazioni contenute nel testo, trattati <strong>esclusivamente</strong> per rispondere alle richieste ricevute o valutare collaborazioni professionali.
                </li>
                <li>
                  <strong>Dati tecnici di rete (Log di sistema):</strong> Durante la navigazione, i sistemi informatici acquisiscono automaticamente alcuni dati tecnici di trasmissione (indirizzo IP, tipo di browser, data e ora della richiesta). Questi dati non sono raccolti per identificare l'utente, ma sono strettamente indispensabili alla corretta trasmissione telematica dei file e alla sicurezza della rete.
                </li>
              </ul>
            </section>

            <section class="policy-section">
              <h3>3. Hosting Provider & Fornitori Terzi (GitHub & Google)</h3>
              <p>
                Il sito è sviluppato come Single Page Application statica e si appoggia esclusivamente a infrastrutture tecniche essenziali:
              </p>
              <ul>
                <li>
                  <strong>Hosting Web (GitHub Pages — GitHub, Inc. / Microsoft):</strong> Il sito è ospitato tramite il servizio GitHub Pages (88 Colin P Kelly Jr St, San Francisco, CA 94107, USA). GitHub elabora i metadati di connessione e i file di log di rete unicamente a fini di distribuzione dei contenuti e sicurezza infrastrutturale.
                </li>
                <li>
                  <strong>Tipografia e Icone (Google Fonts & Material Symbols — Google LLC):</strong> Utilizzati per la resa visiva e l'ergonomia dell'interfaccia. Ad ogni visita, il browser richiede le risorse tipografiche ai server CDN di Google, trasmettendo l'indirizzo IP del dispositivo per la sola durata del download delle risorse.
                </li>
                <li>
                  <strong>Garanzia sui Trasferimenti Dati (EU-U.S. DPF):</strong> Sia GitHub, Inc. (tramite Microsoft Corporation) sia Google LLC aderiscono all'<strong>EU-U.S. Data Privacy Framework</strong> (decisione di adeguatezza della Commissione Europea del 10 luglio 2023, ex art. 45 GDPR), assicurando un livello di protezione dei dati conforme agli standard europei.
                </li>
              </ul>
            </section>

            <section class="policy-section">
              <h3>4. Cookie Policy e Archiviazione Locale</h3>
              <p>
                In conformità alle direttive europee (Direttiva ePrivacy) e alle Linee Guida del Garante per la Protezione dei Dati Personali:
              </p>
              <ul>
                <li><strong>Nessun cookie tracciante:</strong> Il sito non utilizza cookie di profilazione, cookie pubblicitari, identificatori di tracciamento commerciale o strumenti di web analytics (né proprietari né di terze parti).</li>
                <li><strong>Esonero dal banner preventivo:</strong> Data l'assenza totale di cookie non tecnici o traccianti, la normativa esonera espressamente il sito dall'obbligo di mostrare banner di consenso o blocchi della navigazione.</li>
              </ul>
            </section>

            <section class="policy-section">
              <h3>5. Basi Giuridiche e Tempi di Conservazione (Retention)</h3>
              <p>
                Il trattamento si fonda sull'art. 6, par. 1, lett. b) del GDPR (misure precontrattuali su richiesta dell'interessato) per le comunicazioni email, e sul legittimo interesse del Titolare (lett. f) alla salvaguardia tecnica e sicurezza del sito.
              </p>
              <p>
                Le email ricevute vengono conservate per il tempo strettamente necessario a gestire la corrispondenza e cancellate entro un massimo di <strong>12 mesi</strong> dall'ultimo contatto utile, salvo obblighi di tutela legale. I log tecnici di rete vengono gestiti e ruotati dai server di hosting secondo le policy di sicurezza del provider (normalmente non oltre 30 giorni).
              </p>
            </section>

            <section class="policy-section">
              <h3>6. Diritti dell'Interessato e Diritto di Reclamo</h3>
              <p>
                Ai sensi degli articoli 15-22 del GDPR, l'utente ha diritto in qualunque momento di chiedere conferma dell'esistenza di dati che lo riguardano, richiederne la rettifica, la cancellazione (diritto all'oblio) o la limitazione inviando una comunicazione a:
                <a href="mailto:samuel.tavonatti05@gmail.com" class="link-highlight">samuel.tavonatti05@gmail.com</a>.
              </p>
              <p>
                L'interessato ha inoltre il diritto di proporre reclamo all'autorità nazionale di controllo competente: <strong>Garante per la Protezione dei Dati Personali</strong> (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" class="link-highlight">www.garanteprivacy.it</a>).
              </p>
            </section>

            <!-- 7. NOTE LEGALI & MARCHI TERZI AGGIORNATA CON IA -->
            <section class="policy-section">
              <h3>7. Proprietà Intellettuale, Intelligenza Artificiale & Marchi Terzi (Disclaimer)</h3>
              <p>
                Il design, il codice sorgente, l'impostazione grafica e i contenuti originali presenti in questo sito sono tutelati dalle vigenti norme sul diritto d'autore e appartengono a Samuel Tavonatti. A fini di piena trasparenza, si dichiara che alcuni specifici asset visivi di natura concettuale presentati nei case study (inclusi mockup o icone di progetto) sono stati ideati e generati proceduralmente con il supporto di sistemi di Intelligenza Artificiale generativa.
              </p>
              <p>
                Tutti i marchi, loghi istituzionali, denominazioni sociali e segni distintivi citati o riprodotti in questo portfolio (inclusi <strong>Università degli Studi di Trento</strong>, <strong>Liceo Scientifico Leonardo Da Vinci</strong> e <strong>Trentino Marketing</strong>) appartengono ai rispettivi legittimi proprietari. Il loro utilizzo è effettuato a titolo puramente descrittivo, identificativo, informativo e curriculare, al fine di attestare veridicamente il percorso accademico e professionale svolto, in conformità all'<strong>art. 21 del D.Lgs. 30/2005</strong> (Codice della Proprietà Industriale) e all'<strong>art. 70 della Legge 633/1941</strong> sul diritto d'autore. Tale menzione non sottintende alcun vincolo di sponsorizzazione o affiliazione commerciale esclusiva con i titolari dei rispettivi marchi.
              </p>
            </section>
          </template>

          <!-- VERSIONE INGLESE -->
          <template v-else>
            <section class="policy-section">
              <h3>1. Data Controller</h3>
              <p>
                The Data Controller for this portfolio is <strong>Samuel Tavonatti</strong>, residing in Trento (TN), Italy, reachable for any data protection inquiries at:
                <a href="mailto:samuel.tavonatti05@gmail.com" class="link-highlight">samuel.tavonatti05@gmail.com</a>.
              </p>
              <p class="sub-clause">
                Under Article 37 GDPR, appointing a Data Protection Officer (DPO) is not legally required for this website.
              </p>
            </section>

            <section class="policy-section">
              <h3>2. Data Processing Principles & Categories</h3>
              <p>
                This website adheres strictly to the principle of <em>Data Minimization</em> (GDPR Art. 5(1)(c)) and collects no data for marketing or behavioral profiling:
              </p>
              <ul>
                <li>
                  <strong>No Backend Database Forms:</strong> No user credentials or inputs are captured or stored on remote databases. The contact interface solely opens a message draft in your selected email client.
                </li>
                <li>
                  <strong>Voluntary Email Inquiries:</strong> Any details sent voluntarily via email are processed <strong>strictly</strong> to reply to professional inquiries or discuss project proposals.
                </li>
                <li>
                  <strong>Technical Connection Logs:</strong> HTTP connection metadata (IP addresses, User-Agents, request timestamps) are processed by hosting edge nodes strictly to deliver web assets securely.
                </li>
              </ul>
            </section>

            <section class="policy-section">
              <h3>3. Hosting & Third-Party Technical Providers (GitHub & Google)</h3>
              <ul>
                <li>
                  <strong>Web Hosting (GitHub Pages — GitHub, Inc. / Microsoft):</strong> This site is hosted via GitHub Pages (San Francisco, CA, USA). Edge nodes record standard HTTP traffic logs strictly for infrastructure stability and security monitoring.
                </li>
                <li>
                  <strong>Typography & Icons (Google Fonts & Material Symbols — Google LLC):</strong> Used to deliver visual layout and cognitive ergonomics. Visitor IP addresses are transmitted to Google CDN servers only during asset downloading.
                </li>
                <li>
                  <strong>Data Transfer Guarantees (EU-U.S. DPF):</strong> Both GitHub, Inc. (via Microsoft Corporation) and Google LLC are certified under the <strong>EU-U.S. Data Privacy Framework</strong> (adequacy decision of July 10, 2023, Art. 45 GDPR), ensuring European-standard data protection levels.
                </li>
              </ul>
            </section>

            <section class="policy-section">
              <h3>4. Cookie Policy</h3>
              <ul>
                <li><strong>No Profiling or Marketing Cookies:</strong> This website does not use tracking cookies, retargeting pixels, or web analytics scripts.</li>
                <li><strong>Banner Exemption:</strong> In the complete absence of non-technical cookies or trackers, European and Italian law exempts the site from requiring cookie consent banners or blocking overlays.</li>
              </ul>
            </section>

            <section class="policy-section">
              <h3>5. Legal Bases & Retention Period</h3>
              <p>
                Processing operations rely on Art. 6(1)(b) GDPR (pre-contractual communication) and Art. 6(1)(f) (legitimate interest in network security and correspondence).
              </p>
              <p>
                Direct email exchanges are retained only as long as necessary to complete communication and erased within <strong>12 months</strong>, unless legal defense claims apply. Technical access logs are rotated according to hosting security protocols (typically within 30 days).
              </p>
            </section>

            <section class="policy-section">
              <h3>6. User Rights & Supervisory Authority</h3>
              <p>
                Under Articles 15-22 GDPR, you may request confirmation, access, correction, or deletion of your email records at any time by contacting:
                <a href="mailto:samuel.tavonatti05@gmail.com" class="link-highlight">samuel.tavonatti05@gmail.com</a>.
              </p>
              <p>
                You also hold the legal right to submit a complaint to the Italian Data Protection Authority (<strong>Garante per la Protezione dei Dati Personali</strong> — <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" class="link-highlight">www.garanteprivacy.it</a>).
              </p>
            </section>

            <!-- 7. LEGAL NOTICE & THIRD-PARTY TRADEMARKS AGGIORNATA CON IA -->
            <section class="policy-section">
              <h3>7. Intellectual Property, Artificial Intelligence & Third-Party Trademarks</h3>
              <p>
                The visual layout, design system, source code, and original materials published on this website are protected under copyright law and belong to Samuel Tavonatti. For full transparency, it is hereby declared that certain conceptual visual assets presented in the case studies (such as project mockups or icons) were conceptualized and procedurally generated with the assistance of generative Artificial Intelligence systems.
              </p>
              <p>
                All institutional trademarks, organizational logos, and brand emblems shown or referenced across this portfolio (including <strong>University of Trento</strong>, <strong>Liceo Scientifico Leonardo Da Vinci</strong>, and <strong>Trentino Marketing</strong>) belong entirely to their respective lawful owners. They are displayed strictly for descriptive, identification, and curriculum vitae verification purposes, as allowed under applicable intellectual property laws (including Art. 21 Italian Legislative Decree 30/2005 and fair use / nominative use standards). Their inclusion does not imply any official commercial partnership, endorsement, or sponsorship.
              </p>
            </section>
          </template>
        </div>

        <!-- FOOTER -->
        <div class="modal-footer">
          <button class="btn-primary" @click="closeModal">
            {{ lang === 'it' ? 'Chiudi' : 'Close' }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(18, 19, 22, 0.88);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.modal-container {
  background-color: var(--surface-slate);
  border: 1px solid var(--border);
  border-radius: 16px;
  width: 100%;
  max-width: 720px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
  overflow: hidden;
}

.modal-header {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(18, 19, 22, 0.4);
}

.modal-header h2 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-main);
  letter-spacing: -0.01em;
}

.btn-close {
  background: transparent;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 8px;
  transition: var(--transition);
}

.btn-close:hover {
  color: var(--text-main);
  background-color: var(--surface-slate-light);
}

.modal-body {
  padding: 2rem;
  overflow-y: auto;
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.7;
}

.modal-badge-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);
}

.status-badge {
  font-family: monospace;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent-amber);
  background-color: rgba(194, 165, 126, 0.1);
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
  border: 1px solid rgba(194, 165, 126, 0.25);
}

.modal-date {
  font-size: 0.8rem;
  font-family: monospace;
  color: var(--accent-moss-light);
}

.policy-section {
  margin-bottom: 2rem;
}

.policy-section h3 {
  color: var(--text-main);
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 0.65rem;
}

.policy-section p {
  margin-bottom: 0.75rem;
}

.sub-clause {
  font-size: 0.85rem;
  opacity: 0.85;
}

.policy-section ul {
  padding-left: 1.25rem;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.policy-section li strong {
  color: var(--text-main);
}

.link-highlight {
  color: var(--accent-amber);
  text-decoration: none;
  font-weight: 500;
}

.link-highlight:hover {
  text-decoration: underline;
}

.modal-footer {
  padding: 1.25rem 2rem;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: flex-end;
  background-color: rgba(18, 19, 22, 0.5);
}

.btn-primary {
  background-color: var(--accent-amber);
  color: #121316;
  border: none;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.65rem 1.6rem;
  border-radius: 8px;
  cursor: pointer;
  transition: var(--transition);
}

.btn-primary:hover {
  background-color: var(--accent-amber-hover);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>