<script setup>
import { useTypingEffect } from '@/compossables/useTypingEffect'

const { t } = useI18n()

const greetingText = computed(() => `${t('home.greeting')} Panha`)
const { displayedText: typedGreeting, isComplete: greetingComplete } = useTypingEffect(greetingText, { speed: 80, delay: 500 })

const titleText = computed(() => t('home.title'))
const { displayedText: typedTitle, isComplete: titleComplete, startTyping: startTitleTyping } = useTypingEffect(titleText, { speed: 60, delay: 0, autoStart: false })

watch(greetingComplete, (complete) => {
    if (complete) startTitleTyping()
})
</script>

<template>
    <section class="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden px-6 md:px-10 py-16 md:py-20">
        <!-- Background orbs -->
        <div class="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div class="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div class="w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <!-- Text Content -->
            <div class="flex flex-col gap-6 md:order-1 order-2">
                <!-- Available badge -->
                <div class="hero-animate anim-delay-100">
                    <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium w-fit">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        {{ t('home.availableForWork') }}
                    </span>
                </div>

                <!-- Name + Title -->
                <div class="flex flex-col gap-2">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight hero-animate anim-delay-200">
                        {{ typedGreeting }}<span class="typing-cursor text-indigo-400" v-if="!greetingComplete">|</span>
                    </h1>
                    <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 hero-animate anim-delay-300">
                        {{ typedTitle }}<span class="typing-cursor text-indigo-400" v-if="greetingComplete && !titleComplete">|</span>
                    </h2>
                </div>

                <!-- Description -->
                <p class="text-white/50 text-base md:text-lg leading-relaxed max-w-lg hero-animate anim-delay-400">
                    {{ t('home.description') }}
                </p>

                <!-- CTAs -->
                <div class="flex items-center gap-5 hero-animate anim-delay-500">
                    <UiButton path="#contact">
                        {{ t('home.contactBtn') }}
                    </UiButton>
                    <NuxtLink to="#work" class="text-sm text-white/40 hover:text-white transition-colors duration-200 flex items-center gap-1.5">
                        {{ t('home.viewMyWork') }}
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </NuxtLink>
                </div>
            </div>

            <!-- Profile Image -->
            <div class="flex justify-center md:justify-end md:order-2 order-1 hero-animate-right anim-delay-300">
                <div class="relative">
                    <!-- Glow ring -->
                    <div class="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur opacity-60"></div>
                    <div class="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border border-white/10">
                        <NuxtImg
                            loading="lazy"
                            class="w-full h-full object-contain"
                            src="/images/profile-image.webp"
                            alt="Panha"
                        />
                    </div>
                    <!-- Floating badge -->
                    <div class="absolute -bottom-2 -right-2 bg-[#0d0d20] border border-white/[0.08] rounded-xl px-3 py-2 shadow-xl">
                        <div class="flex items-center gap-2 text-xs text-white/60">
                            <svg class="w-3.5 h-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            {{ t('home.role') }}
                        </div>
                    </div>
                </div>
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
