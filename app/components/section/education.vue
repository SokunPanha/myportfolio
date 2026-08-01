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
            <div class="flex items-end gap-6 mb-12">
                <div class="flex flex-col gap-2">
                    <span class="text-xs font-medium tracking-widest uppercase text-indigo-400">{{ t('education.label') }}</span>
                    <UiTextGradient>{{ t('education.title') }}</UiTextGradient>
                </div>
                <div class="hidden md:block flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent mb-3"></div>
            </div>
        </UiReveal>

        <div class="grid lg:grid-cols-5 gap-10 lg:gap-8 items-start">
            <!-- Education: feature cards -->
            <div class="lg:col-span-3">
                <UiReveal>
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                            <svg class="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            </svg>
                        </div>
                        <h3 class="text-base font-semibold text-ink/70">{{ t('education.educationLabel') }}</h3>
                    </div>
                </UiReveal>

                <div class="flex flex-col gap-4">
                    <UiReveal
                        v-for="(item, index) in degrees"
                        :key="index"
                        :delay="index * 100"
                        from="left"
                    >
                        <div v-tilt class="group relative bg-panel/55 backdrop-blur-xl border border-ink/[0.06] rounded-2xl p-6 hover:border-indigo-500/25 transition-colors duration-300 shadow-xl shadow-black/20 overflow-hidden">
                            <div class="absolute -right-8 -top-8 w-32 h-32 bg-indigo-600/10 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-600/20 transition-colors duration-500"></div>
                            <div class="flex flex-wrap items-start justify-between gap-3 mb-3">
                                <div class="flex items-start gap-4">
                                    <span class="text-3xl font-bold text-ink/10 leading-none select-none">{{ String(index + 1).padStart(2, '0') }}</span>
                                    <div>
                                        <h4 class="font-semibold text-ink text-base leading-snug">{{ item.degree }}</h4>
                                        <p class="text-indigo-400 text-xs font-medium mt-1">{{ item.institution }}</p>
                                    </div>
                                </div>
                                <span class="text-xs text-ink/35 bg-ink/[0.04] px-2.5 py-1 rounded-full border border-ink/[0.06] whitespace-nowrap shrink-0">{{ item.date }}</span>
                            </div>
                            <p class="text-ink/50 text-sm leading-relaxed">{{ item.description }}</p>
                        </div>
                    </UiReveal>
                </div>
            </div>

            <!-- Training: compact rail -->
            <div class="lg:col-span-2">
                <UiReveal>
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                            <svg class="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                            </svg>
                        </div>
                        <h3 class="text-base font-semibold text-ink/70">{{ t('education.trainingLabel') }}</h3>
                    </div>
                </UiReveal>

                <div class="relative">
                    <div class="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-purple-500/40 to-transparent pointer-events-none"></div>
                    <div class="flex flex-col gap-5">
                        <UiReveal
                            v-for="(item, index) in trainings"
                            :key="index"
                            :delay="index * 100"
                            from="right"
                        >
                            <div class="relative pl-8">
                                <div class="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center">
                                    <span class="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                                </div>
                                <div class="flex flex-wrap items-center justify-between gap-2">
                                    <h4 class="font-semibold text-ink text-sm leading-snug">{{ item.course }}</h4>
                                    <span class="text-xs text-ink/35 whitespace-nowrap shrink-0">{{ item.date }}</span>
                                </div>
                                <p class="text-purple-400 text-xs font-medium mt-1">{{ item.institution }}</p>
                                <p class="text-ink/50 text-xs leading-relaxed mt-1.5">{{ item.description }}</p>
                            </div>
                        </UiReveal>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
