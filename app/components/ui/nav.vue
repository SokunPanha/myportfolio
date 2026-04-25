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
    <nav class="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/[0.06] bg-[#06060f]/80 backdrop-blur-xl text-white">
        <div class="flex items-center justify-between h-16 px-6 md:px-10">
            <!-- Logo -->
            <NuxtLink to="/" class="text-white font-semibold text-lg tracking-tight shrink-0">
                Panha<span class="text-indigo-400">.</span>
            </NuxtLink>

            <!-- Desktop Nav -->
            <ul class="hidden md:flex items-center gap-1">
                <li v-for="link in navLinks" :key="link.to">
                    <NuxtLink
                        :to="link.to"
                        class="px-4 py-2 rounded-lg text-sm text-white/50 hover:text-white hover:bg-white/[0.06] transition-colors duration-200"
                    >
                        {{ link.label }}
                    </NuxtLink>
                </li>
            </ul>

            <!-- Right: Language + Mobile toggle -->
            <div class="flex items-center gap-1">
                <div class="relative">
                    <button
                        @click="isDropdownOpen = !isDropdownOpen"
                        class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/[0.06] transition-colors duration-200 text-sm"
                    >
                        <span>{{ getFlag(locale) }}</span>
                        <svg class="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div
                        v-if="isDropdownOpen"
                        class="absolute top-full right-0 mt-1 bg-[#0d0d20] border border-white/[0.08] rounded-xl overflow-hidden shadow-xl shadow-black/50"
                    >
                        <button
                            v-for="loc in availableLocales"
                            :key="loc.code"
                            @click="switchLanguage(loc.code)"
                            class="w-full px-4 py-2.5 hover:bg-white/[0.06] flex items-center justify-center transition-colors duration-200 text-lg"
                        >
                            {{ getFlag(loc.code) }}
                        </button>
                    </div>
                </div>

                <button
                    class="md:hidden p-2 rounded-lg hover:bg-white/[0.06] transition-colors duration-200"
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
        <div v-if="isMobileMenuOpen" class="md:hidden border-t border-white/[0.06] px-4 py-3">
            <ul class="flex flex-col gap-1">
                <li v-for="link in navLinks" :key="link.to">
                    <NuxtLink
                        :to="link.to"
                        class="block px-4 py-2.5 rounded-lg text-sm text-white/50 hover:text-white hover:bg-white/[0.06] transition-colors duration-200"
                        @click="closeMobileMenu"
                    >
                        {{ link.label }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>
