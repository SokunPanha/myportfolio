<script setup>
import { useTypingEffect } from '@/compossables/useTypingEffect'

const { t } = useI18n()

// Typing effect for greeting
const greetingText = computed(() => `${t('home.greeting')} Panha`)
const { displayedText: typedGreeting, isComplete: greetingComplete } = useTypingEffect(greetingText, { speed: 80, delay: 500 })

// Typing effect for title (starts after greeting completes)
const titleText = computed(() => t('home.title'))
const { displayedText: typedTitle, isComplete: titleComplete, startTyping: startTitleTyping } = useTypingEffect(titleText, { speed: 60, delay: 0, autoStart: false })

// Start title typing when greeting is complete
watch(greetingComplete, (complete) => {
    if (complete) {
        startTitleTyping()
    }
})
</script>
<template>
    <main class=" min-h-screen md:min-h-[70vh] relative ">
        <div class="absolute top-0 left-0 w-full h-full ">
            <div class="h-full w-full grid grid-cols-10 grid-rows-10">
                <div v-for="_ in 100" class="border border-[#ffffff]/20 opacity-15  "></div>
            </div>
        </div>
        <section class="absolute top-0 left-0 w-full  h-full overflow-hidden   ">
            <div class="rounded-full w-[500px] h-[500px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute
               md:right-0 bottom-0  max-md:left-1/2 max-md:transform max-md:-translate-x-1/2 blur-2xl animate-pulse hero-animate-scale anim-delay-100">
            </div>

            <div
                class=" w-full  overflow-hidden  h-full  bg-[#ffffff]/10 backdrop-blur-[5px]   grid md:grid-cols-2 grid-cols-1 ">
                <div class="flex flex-col md:p-20 p-5 text-justify md:justify-start justify-center  gap-4  items-start md:pl-10">
                    <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white hero-animate anim-delay-100">
                        {{ typedGreeting }}<span class="typing-cursor" v-if="!greetingComplete">|</span>
                    </h1>
                    <h2
                        class="md:text-2xl text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#5DFFFF] from-10% to-[#c72a81] to-70% hero-animate anim-delay-200">
                        {{ typedTitle }}<span class="typing-cursor text-[#5DFFFF]" v-if="greetingComplete && !titleComplete">|</span>
                    </h2>
                    <p class="md:text-lg text-[14px] text-white/75 hero-animate anim-delay-300">{{ t('home.description') }}</p>
                    <div class="hero-animate anim-delay-400">
                        <UiButton path="#contact">
                            <span class="text-white">{{ t('home.contactBtn') }}</span>
                        </UiButton>
                    </div>
                </div>

                <div class="relative group hero-animate-right anim-delay-300">
                    <NuxtImg loading="lazy" class="object-cover group md:w-full w-[400px] mx-auto h-full" src="/images/profile-image.webp" alt=""/>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
.typing-cursor {
    animation: blink 0.7s infinite;
}

@keyframes blink {
    0%, 50% {
        opacity: 1;
    }
    51%, 100% {
        opacity: 0;
    }
}
</style>
