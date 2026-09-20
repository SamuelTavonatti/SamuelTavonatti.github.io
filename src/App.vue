<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import PrivacyModal from './views/PrivacyModal.vue'

const route = useRoute()

const lang = ref('it')
const scrolled = ref(false)
const isPrivacyOpen = ref(false)
const isMobileMenuOpen = ref(false)

// Traccia la sezione attiva nella Home: 'hero' | 'chi-sono' | 'competenze' | 'contatti'
const activeSection = ref('hero')

let observer = null

const setLang = (newLang) => {
  lang.value = newLang
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
  
  if (route.path === '/' && window.scrollY < 200) {
    activeSection.value = 'hero'
  }
}

const setupScrollSpy = () => {
  if (observer) {
    observer.disconnect()
  }

  if (route.path !== '/') {
    activeSection.value = ''
    return
  }

  const sections = document.querySelectorAll('section[id]')
  if (!sections.length) return

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, observerOptions)

  sections.forEach((section) => observer.observe(section))
}

watch(
  () => route.fullPath,
  async () => {
    closeMobileMenu()
    await nextTick()
    setTimeout(() => {
      setupScrollSpy()
      if (route.hash) {
        activeSection.value = route.hash.replace('#', '')
      }
    }, 350)
  }
)

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  nextTick(() => {
    setTimeout(setupScrollSpy, 350)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (observer) observer.disconnect()
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="app-layout">
    <!-- NAVBAR FISSA -->
    <header class="header" :class="{ 'is-scrolled': scrolled }">
      <div class="header-container">
        <div class="brand">
          <router-link to="/" @click="closeMobileMenu">© S. Tavonatti</router-link>
        </div>

        <!-- NAV DESKTOP (>= 860px) -->
        <nav class="navigation">
          <router-link 
            to="/" 
            :class="{ 'active-link': route.path === '/' && activeSection === 'hero' }"
          >
            {{ lang === 'it' ? 'Home' : 'Home' }}
          </router-link>

          <router-link 
            :to="{ path: '/', hash: '#chi-sono' }"
            :class="{ 'active-link': route.path === '/' && activeSection === 'chi-sono' }"
          >
            {{ lang === 'it' ? 'Chi Sono' : 'About' }}
          </router-link>

          <router-link 
            :to="{ path: '/', hash: '#competenze' }"
            :class="{ 'active-link': route.path === '/' && activeSection === 'competenze' }"
          >
            {{ lang === 'it' ? 'Competenze' : 'Skills' }}
          </router-link>

          <router-link 
            to="/esperienze" 
            :class="{ 'active-link': route.path === '/esperienze' }"
          >
            {{ lang === 'it' ? 'Esperienze' : 'Experience' }}
          </router-link>

          <router-link 
            to="/progetti" 
            :class="{ 'active-link': route.path === '/progetti' }"
          >
            {{ lang === 'it' ? 'Progetti' : 'Projects' }}
          </router-link>

          <router-link 
            :to="{ path: '/', hash: '#contatti' }"
            :class="{ 'active-link': route.path === '/' && activeSection === 'contatti' }"
          >
            {{ lang === 'it' ? 'Contatti' : 'Contact' }}
          </router-link>
        </nav>

        <div class="header-right-actions">
          <div class="language-toggle">
            <button :class="{ active: lang === 'it' }" @click="setLang('it')">IT</button>
            <span class="separator">/</span>
            <button :class="{ active: lang === 'en' }" @click="setLang('en')">EN</button>
          </div>

          <!-- PULSANTE HAMBURGER MOBILE -->
          <button 
            class="mobile-menu-btn" 
            @click="toggleMobileMenu" 
            :aria-label="isMobileMenuOpen ? 'Chiudi menu' : 'Apri menu'"
            :aria-expanded="isMobileMenuOpen"
          >
            <span class="hamburger-bar" :class="{ 'open-1': isMobileMenuOpen }"></span>
            <span class="hamburger-bar" :class="{ 'open-2': isMobileMenuOpen }"></span>
          </button>
        </div>
      </div>
    </header>

    <!-- MENU DRAWER MOBILE OVERLAY (< 860px) -->
    <Transition name="drawer">
      <div v-if="isMobileMenuOpen" class="mobile-drawer" @click.self="closeMobileMenu">
        <nav class="mobile-nav-links">
          <router-link to="/" @click="closeMobileMenu" :class="{ 'active-m': route.path === '/' && activeSection === 'hero' }">
            {{ lang === 'it' ? 'Home' : 'Home' }}
          </router-link>
          <router-link :to="{ path: '/', hash: '#chi-sono' }" @click="closeMobileMenu" :class="{ 'active-m': route.path === '/' && activeSection === 'chi-sono' }">
            {{ lang === 'it' ? 'Chi Sono' : 'About' }}
          </router-link>
          <router-link :to="{ path: '/', hash: '#competenze' }" @click="closeMobileMenu" :class="{ 'active-m': route.path === '/' && activeSection === 'competenze' }">
            {{ lang === 'it' ? 'Competenze' : 'Skills' }}
          </router-link>
          <router-link to="/esperienze" @click="closeMobileMenu" :class="{ 'active-m': route.path === '/esperienze' }">
            {{ lang === 'it' ? 'Esperienze' : 'Experience' }}
          </router-link>
          <router-link to="/progetti" @click="closeMobileMenu" :class="{ 'active-m': route.path === '/progetti' }">
            {{ lang === 'it' ? 'Progetti' : 'Projects' }}
          </router-link>
          <router-link :to="{ path: '/', hash: '#contatti' }" @click="closeMobileMenu" :class="{ 'active-m': route.path === '/' && activeSection === 'contatti' }">
            {{ lang === 'it' ? 'Contatti' : 'Contact' }}
          </router-link>
        </nav>
      </div>
    </Transition>

    <!-- VISTA PRINCIPALE -->
    <main>
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" :lang="lang" />
        </transition>
      </router-view>
    </main>

    <!-- FOOTER GLOBALE CON PRIVACY POLICY -->
    <footer class="global-footer">
      <div class="footer-inner">
        <span>© 2026 Samuel Tavonatti — Trento, IT</span>
        <span class="footer-dot">•</span>
        <button type="button" class="footer-privacy-btn" @click="isPrivacyOpen = true">
          {{ lang === 'it' ? 'Privacy & Cookie Policy' : 'Privacy & Cookie Policy' }}
        </button>
      </div>
    </footer>

    <!-- MODALE PRIVACY GLOBALE -->
    <PrivacyModal :is-open="isPrivacyOpen" :lang="lang" @close="isPrivacyOpen = false" />
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 1.5rem 0;
  transition: var(--transition);
  border-bottom: 1px solid transparent;
}

.header.is-scrolled {
  padding: 1rem 0;
  background-color: rgba(18, 19, 22, 0.94);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand a {
  text-decoration: none;
  color: var(--text-main);
  font-weight: 600;
  font-size: 1rem;
  transition: var(--transition);
}

.brand a:hover {
  color: var(--accent-amber);
}

.navigation {
  display: none;
  gap: 2.25rem;
}

@media (min-width: 860px) {
  .navigation {
    display: flex;
  }
}

.navigation a {
  text-decoration: none;
  color: var(--text-muted);
  font-size: 0.95rem;
  font-weight: 500;
  position: relative;
  padding-bottom: 6px;
  transition: var(--transition);
}

.navigation a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--accent-amber);
  transform: scaleX(0);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: right;
}

.navigation a:hover,
.navigation a.active-link {
  color: #ffffff;
}

.navigation a:hover::after,
.navigation a.active-link::after {
  transform: scaleX(1);
  transform-origin: left;
}

.header-right-actions {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.language-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  font-weight: 600;
}

.language-toggle button {
  background: none;
  border: none;
  color: var(--text-muted);
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  cursor: pointer;
  transition: var(--transition);
  padding: 0;
}

.language-toggle button.active, 
.language-toggle button:hover {
  color: var(--accent-amber);
}

.separator {
  color: var(--border);
}

/* HAMBURGER BUTTON PER SMARTPHONE */
.mobile-menu-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  z-index: 120;
}

@media (min-width: 860px) {
  .mobile-menu-btn {
    display: none;
  }
}

.hamburger-bar {
  display: block;
  width: 22px;
  height: 2px;
  background-color: var(--text-main);
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.hamburger-bar.open-1 {
  transform: translateY(4px) rotate(45deg);
}

.hamburger-bar.open-2 {
  transform: translateY(-4px) rotate(-45deg);
}

/* MOBILE DRAWER OVERLAY */
.mobile-drawer {
  position: fixed;
  inset: 0;
  background-color: rgba(18, 19, 22, 0.98);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  z-index: 90;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.mobile-nav-links a {
  text-decoration: none;
  color: var(--text-muted);
  font-size: 1.5rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.mobile-nav-links a.active-m,
.mobile-nav-links a:hover {
  color: var(--accent-amber);
}

.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.25s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

main {
  flex: 1;
}

.global-footer {
  padding: 2.5rem 2rem;
  border-top: 1px solid var(--border);
}

.footer-inner {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  flex-wrap: wrap;
}

.footer-dot {
  color: var(--border);
}

.footer-privacy-btn {
  background: none;
  border: none;
  color: var(--text-muted);
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  padding: 0;
  transition: var(--transition);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.footer-privacy-btn:hover {
  color: var(--accent-amber);
}
</style>