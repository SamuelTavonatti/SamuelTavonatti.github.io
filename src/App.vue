<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const lang = ref('it')
const scrolled = ref(false)

const setLang = (newLang) => {
  lang.value = newLang
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="app-layout">
    <header class="header" :class="{ 'is-scrolled': scrolled }">
      <div class="header-container">
        <div class="brand">
          <router-link to="/">© S. Tavonatti</router-link>
        </div>

        <nav class="navigation">
          <router-link to="/" exact-active-class="active-link">{{ lang === 'it' ? 'Home' : 'Home' }}</router-link>
          <a href="/#chi-sono">{{ lang === 'it' ? 'Chi Sono' : 'About' }}</a>
          <a href="/#competenze">{{ lang === 'it' ? 'Competenze' : 'Skills' }}</a>
          <router-link to="/esperienze" active-class="active-link">{{ lang === 'it' ? 'Esperienze' : 'Experience' }}</router-link>
          <router-link to="/progetti" active-class="active-link">{{ lang === 'it' ? 'Progetti' : 'Projects' }}</router-link>
          <a href="/#contatti">{{ lang === 'it' ? 'Contatti' : 'Contact' }}</a>
        </nav>

        <div class="language-toggle">
          <button :class="{ active: lang === 'it' }" @click="setLang('it')">IT</button>
          <span class="separator">/</span>
          <button :class="{ active: lang === 'en' }" @click="setLang('en')">EN</button>
        </div>
      </div>
    </header>

    <main>
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" :lang="lang" />
        </transition>
      </router-view>
    </main>

    <footer class="global-footer">
      <div class="footer-inner">
        <span>© 2026 Samuel Tavonatti — Trento, IT</span>
      </div>
    </footer>
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
  background-color: rgba(10, 17, 40, 0.85);
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
  transition: transform 0.3s ease;
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
  color: var(--text-main);
}

.separator {
  color: var(--border);
}

main {
  flex: 1;
}

.global-footer {
  padding: 2rem;
  border-top: 1px solid var(--border);
}

.footer-inner {
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
  font-size: 0.85rem;
  color: var(--text-muted);
}
</style>