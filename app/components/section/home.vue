<script setup>
import { useTypingEffect } from '@/compossables/useTypingEffect'
import { useExperienceYears } from '@/compossables/useExperience'

const { t } = useI18n()

const frontendYears = useExperienceYears()
const backendYears = Math.max(frontendYears - 1, 1)
const backendYearUnit = computed(() => t(backendYears === 1 ? 'home.yearSingular' : 'home.yearPlural'))

const greetingText = computed(() => `${t('home.greeting')} Panha`)
const { displayedText: typedGreeting, isComplete: greetingComplete } = useTypingEffect(greetingText, { speed: 80, delay: 500 })

const titleText = computed(() => t('home.title'))
const { displayedText: typedTitle, isComplete: titleComplete, startTyping: startTitleTyping } = useTypingEffect(titleText, { speed: 60, delay: 0, autoStart: false })

watch(greetingComplete, (complete) => {
    if (complete) startTitleTyping()
})

// 3D tilt-away as the hero scrolls out of view
const heroRef = ref(null)
let scrollRaf = 0

function onHeroScroll() {
    cancelAnimationFrame(scrollRaf)
    scrollRaf = requestAnimationFrame(() => {
        const el = heroRef.value
        if (!el) return
        const progress = Math.min(window.scrollY / (window.innerHeight * 0.9), 1)
        el.style.transform = `perspective(1100px) rotateX(${progress * 14}deg) scale(${1 - progress * 0.08}) translateY(${progress * -30}px)`
        el.style.opacity = 1 - progress * 0.7
    })
}

onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    window.addEventListener('scroll', onHeroScroll, { passive: true })
})

onBeforeUnmount(() => {
    cancelAnimationFrame(scrollRaf)
    window.removeEventListener('scroll', onHeroScroll)
})
</script>

<template>
    <section class="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center overflow-hidden px-6 md:px-10 py-16 md:py-20">
        <!-- Background orbs -->
        <div class="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div class="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div ref="heroRef" class="flex flex-col items-center text-center gap-7 max-w-3xl mx-auto will-change-transform [transform-origin:center_top]">
            <!-- Profile Image on layered rings -->
            <div class="relative hero-animate anim-delay-100">
                <div class="absolute -inset-6 rounded-full border border-indigo-500/15 animate-[spin_14s_linear_infinite]">
                    <span class="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.9)]"></span>
                </div>
                <div class="absolute -inset-12 rounded-full border border-purple-500/10 animate-[spin_26s_linear_infinite_reverse]">
                    <span class="absolute top-1/2 -left-1 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.9)]"></span>
                </div>
                <div class="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur opacity-60"></div>
                <div class="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border border-ink/10">
                    <NuxtImg
                        loading="lazy"
                        class="w-full h-full object-contain"
                        src="/images/profile-image.webp"
                        alt="Panha"
                    />
                </div>
                <!-- Floating role badge -->
                <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-panel/70 backdrop-blur-xl border border-ink/[0.08] rounded-full px-4 py-1.5 shadow-xl whitespace-nowrap">
                    <div class="flex items-center gap-2 text-xs text-ink/60">
                        <svg class="w-3.5 h-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        {{ t('home.role') }}
                    </div>
                </div>
            </div>

            <!-- Available badge -->
            <div class="hero-animate anim-delay-200 mt-3">
                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium w-fit">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    {{ t('home.availableForWork') }}
                </span>
            </div>

            <!-- Name + Title -->
            <div class="flex flex-col items-center gap-3">
                <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-ink leading-tight tracking-tight hero-animate anim-delay-300">
                    {{ typedGreeting }}<span class="typing-cursor text-indigo-400" v-if="!greetingComplete">|</span>
                </h1>
                <h2 class="text-xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 hero-animate anim-delay-400">
                    {{ typedTitle }}<span class="typing-cursor text-indigo-400" v-if="greetingComplete && !titleComplete">|</span>
                </h2>
            </div>

            <!-- Description -->
            <p class="text-ink/50 text-base md:text-lg leading-relaxed max-w-xl hero-animate anim-delay-500">
                {{ t('home.description', { frontendYears, backendYears, backendYearUnit }) }}
            </p>

            <!-- CTAs -->
            <div class="flex items-center gap-5 hero-animate anim-delay-600">
                <UiButton path="#contact">
                    {{ t('home.contactBtn') }}
                </UiButton>
                <NuxtLink to="#work" class="text-sm text-ink/40 hover:text-ink transition-colors duration-200 flex items-center gap-1.5">
                    {{ t('home.viewMyWork') }}
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </NuxtLink>
            </div>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-6 left-1/2 -translate-x-1/2 hero-animate anim-delay-700">
            <div class="w-5 h-9 rounded-full border border-ink/15 flex justify-center pt-1.5">
                <span class="w-1 h-2 rounded-full bg-indigo-400 animate-bounce"></span>
            </div>
        </div>
    </section>
</template>

<style scoped>
.typing-cursor {
    animation: blink 0.7s infinite;
}
@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}
</style>
