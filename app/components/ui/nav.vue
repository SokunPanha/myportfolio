<script setup lang="ts">
const { locale, locales, setLocale, t } = useI18n()

const flags: Record<string, string> = {
    en: '🇺🇸',
    km: '🇰🇭',
    zh: '🇨🇳'
}

const availableLocales = computed(() => {
    return locales.value.filter(l => l.code !== locale.value)
})

const isDropdownOpen = ref(false)
const isMobileMenuOpen = ref(false)

const isLight = ref(false)

onMounted(() => {
    isLight.value = document.documentElement.classList.contains('light')
})

function toggleTheme() {
    isLight.value = !isLight.value
    document.documentElement.classList.toggle('light', isLight.value)
    try { localStorage.setItem('theme', isLight.value ? 'light' : 'dark') } catch {}
}

function switchLanguage(code: string) {
    setLocale(code)
    isDropdownOpen.value = false
}

function getFlag(code: string) {
    return flags[code] || '🌐'
}

function closeMobileMenu() {
    isMobileMenuOpen.value = false
}

const navLinks = computed(() => [
    { to: '/', label: t('nav.home') },
    { to: '#about', label: t('nav.about') },
    { to: '#work', label: t('nav.work') },
    { to: '#contact', label: t('nav.contact') },
])
</script>

<template>
    <nav class="fixed top-0 left-0 right-0 z-50 w-full border-b border-ink/[0.06] bg-surface/80 backdrop-blur-xl text-ink">
        <div class="flex items-center justify-between h-16 px-6 md:px-10">
            <!-- Logo -->
            <NuxtLink to="/" class="text-ink font-semibold text-lg tracking-tight shrink-0">
                Panha<span class="text-indigo-400">.</span>
            </NuxtLink>

            <!-- Desktop Nav -->
            <ul class="hidden md:flex items-center gap-1">
                <li v-for="link in navLinks" :key="link.to">
                    <NuxtLink
                        :to="link.to"
                        class="px-4 py-2 rounded-lg text-sm text-ink/50 hover:text-ink hover:bg-ink/[0.06] transition-colors duration-200"
                    >
                        {{ link.label }}
                    </NuxtLink>
                </li>
            </ul>

            <!-- Right: Theme + Language + Mobile toggle -->
            <div class="flex items-center gap-1">
                <button
                    @click="toggleTheme"
                    class="p-2 rounded-lg text-ink/50 hover:text-ink hover:bg-ink/[0.06] transition-colors duration-200"
                    aria-label="Toggle theme"
                >
                    <!-- Sun (shown in dark mode → switch to light) -->
                    <svg v-if="!isLight" class="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <!-- Moon (shown in light mode → switch to dark) -->
                    <svg v-else class="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </button>

                <div class="relative">
                    <button
                        @click="isDropdownOpen = !isDropdownOpen"
                        class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-ink/50 hover:text-ink hover:bg-ink/[0.06] transition-colors duration-200 text-sm"
                    >
                        <span>{{ getFlag(locale) }}</span>
                        <svg class="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div
                        v-if="isDropdownOpen"
                        class="absolute top-full right-0 mt-1 bg-panel border border-ink/[0.08] rounded-xl overflow-hidden shadow-xl shadow-black/50"
                    >
                        <button
                            v-for="loc in availableLocales"
                            :key="loc.code"
                            @click="switchLanguage(loc.code)"
                            class="w-full px-4 py-2.5 hover:bg-ink/[0.06] flex items-center justify-center transition-colors duration-200 text-lg"
                        >
                            {{ getFlag(loc.code) }}
                        </button>
                    </div>
                </div>

                <button
                    class="md:hidden p-2 rounded-lg hover:bg-ink/[0.06] transition-colors duration-200"
                    @click="isMobileMenuOpen = !isMobileMenuOpen"
                    aria-label="Toggle menu"
                >
                    <svg v-if="!isMobileMenuOpen" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div v-if="isMobileMenuOpen" class="md:hidden border-t border-ink/[0.06] px-4 py-3">
            <ul class="flex flex-col gap-1">
                <li v-for="link in navLinks" :key="link.to">
                    <NuxtLink
                        :to="link.to"
                        class="block px-4 py-2.5 rounded-lg text-sm text-ink/50 hover:text-ink hover:bg-ink/[0.06] transition-colors duration-200"
                        @click="closeMobileMenu"
                    >
                        {{ link.label }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>
