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

function switchLanguage(code: string) {
    setLocale(code)
    isDropdownOpen.value = false
}

const currentLocale = computed(() => {
    return locales.value.find(l => l.code === locale.value)
})

function getFlag(code: string) {
    return flags[code] || '🌐'
}
</script>

<template>
    <nav class="w-full rounded-t-lg bg-[#ffffff]/10 backdrop-blur-[5px] sticky top-0 z-50 text-white">
        <div class="flex justify-between items-center px-4 md:px-10">
            <!-- Navigation Links -->
            <ul class="flex items-center md:gap-10 gap-4 flex-1 justify-center">
                <li class="p-2">
                    <NuxtLink to="/">{{ t('nav.home') }}</NuxtLink>
                </li>
                <li class="p-2">
                    <NuxtLink to="#about">{{ t('nav.about') }}</NuxtLink>
                </li>
                <li class="p-2">
                    <NuxtLink to="#work">{{ t('nav.work') }}</NuxtLink>
                </li>
                <li class="p-2">
                    <NuxtLink to="#contact">{{ t('nav.contact') }}</NuxtLink>
                </li>
            </ul>

            <!-- Language Switcher - Far Right -->
            <div class="relative">
                <button
                    @click="isDropdownOpen = !isDropdownOpen"
                    class="flex items-center gap-1 px-2 py-1.5 rounded-lg hover:bg-white/20 transition-colors justify-center"
                >
                    <span class="text-xl">{{ getFlag(locale) }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <div
                    v-if="isDropdownOpen"
                    class="absolute top-full right-0 mt-1 bg-black/90 backdrop-blur-lg rounded-lg overflow-hidden shadow-lg"
                >
                    <button
                        v-for="loc in availableLocales"
                        :key="loc.code"
                        @click="switchLanguage(loc.code)"
                        class="w-full px-3 py-2 hover:bg-white/20 flex items-center justify-center transition-colors"
                    >
                        <span class="text-xl">{{ getFlag(loc.code) }}</span>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>
