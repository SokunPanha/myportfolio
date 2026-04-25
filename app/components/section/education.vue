<script setup>
const { t, tm, rt } = useI18n()

const degrees = computed(() => {
    const messages = tm('education.degrees')
    if (Array.isArray(messages)) {
        return messages.map(item => ({
            degree: rt(item.degree),
            institution: rt(item.institution),
            date: rt(item.date),
            description: rt(item.description)
        }))
    }
    return []
})

const trainings = computed(() => {
    const messages = tm('education.trainings')
    if (Array.isArray(messages)) {
        return messages.map(item => ({
            course: rt(item.course),
            institution: rt(item.institution),
            date: rt(item.date),
            description: rt(item.description)
        }))
    }
    return []
})
</script>

<template>
    <section class="py-24 px-6 md:px-10" id="education">
        <!-- Header -->
        <UiReveal>
            <div class="flex flex-col items-center gap-3 text-center mb-16">
                <span class="text-xs font-medium tracking-widest uppercase text-indigo-400">{{ t('education.label') }}</span>
                <UiTextGradient>{{ t('education.title') }}</UiTextGradient>
            </div>
        </UiReveal>

        <!-- Education -->
        <div class="mb-16">
            <UiReveal>
                <div class="flex items-center gap-3 mb-8">
                    <div class="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                        <svg class="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                    </div>
                    <h3 class="text-base font-semibold text-white/70">{{ t('education.educationLabel') }}</h3>
                </div>
            </UiReveal>

            <div class="grid md:grid-cols-2 gap-4">
                <UiReveal
                    v-for="(item, index) in degrees"
                    :key="index"
                    :delay="index * 100"
                    from="left"
                >
                    <div class="bg-[#0d0d20] border border-white/[0.06] rounded-2xl p-5 hover:border-indigo-500/20 transition-colors duration-300 h-full">
                        <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
                            <h4 class="font-semibold text-white text-sm md:text-base leading-snug">{{ item.degree }}</h4>
                            <span class="text-xs text-white/35 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.06] whitespace-nowrap shrink-0">{{ item.date }}</span>
                        </div>
                        <p class="text-indigo-400 text-xs font-medium mb-2">{{ item.institution }}</p>
                        <p class="text-white/50 text-sm leading-relaxed">{{ item.description }}</p>
                    </div>
                </UiReveal>
            </div>
        </div>

        <!-- Training -->
        <div>
            <UiReveal>
                <div class="flex items-center gap-3 mb-8">
                    <div class="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                        <svg class="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                        </svg>
                    </div>
                    <h3 class="text-base font-semibold text-white/70">{{ t('education.trainingLabel') }}</h3>
                </div>
            </UiReveal>

            <div class="grid md:grid-cols-3 gap-4">
                <UiReveal
                    v-for="(item, index) in trainings"
                    :key="index"
                    :delay="index * 100"
                >
                    <div class="bg-[#0d0d20] border border-white/[0.06] rounded-2xl p-5 hover:border-purple-500/20 transition-colors duration-300 h-full flex flex-col gap-3">
                        <div class="flex items-start justify-between gap-2">
                            <h4 class="font-semibold text-white text-sm leading-snug">{{ item.course }}</h4>
                            <span class="text-xs text-white/35 bg-white/[0.04] px-2 py-1 rounded-full border border-white/[0.06] whitespace-nowrap shrink-0">{{ item.date }}</span>
                        </div>
                        <p class="text-purple-400 text-xs font-medium">{{ item.institution }}</p>
                        <p class="text-white/50 text-xs leading-relaxed mt-auto">{{ item.description }}</p>
                    </div>
                </UiReveal>
            </div>
        </div>
    </section>
</template>
