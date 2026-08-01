<script setup>
const { t, tm, rt } = useI18n()

const jobs = computed(() => {
    const messages = tm('workExperience.jobs')
    if (Array.isArray(messages)) {
        return messages.map(job => ({
            title: rt(job.title),
            company: rt(job.company),
            date: rt(job.date),
            description: rt(job.description)
        }))
    }
    return []
})
</script>

<template>
    <section id="work" class="py-24 px-6 md:px-10 relative overflow-hidden">
        <div class="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[120px] pointer-events-none"></div>

        <UiReveal>
            <div class="flex items-end gap-6 mb-16">
                <div class="flex flex-col gap-2">
                    <span class="text-xs font-medium tracking-widest uppercase text-indigo-400">{{ t('workExperience.label') }}</span>
                    <UiTextGradient>{{ t('workExperience.title') }}</UiTextGradient>
                </div>
                <div class="hidden md:block flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent mb-3"></div>
            </div>
        </UiReveal>

        <!-- Live experience count-up since EXPERIENCE_START -->
        <UiReveal :delay="80">
            <div class="mb-16">
                <UiExperienceCounter />
            </div>
        </UiReveal>

        <div class="relative max-w-4xl mx-auto">
            <!-- Center line on md+, left rail on mobile -->
            <div class="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/40 via-purple-500/20 to-transparent pointer-events-none"></div>

            <div class="flex flex-col gap-10">
                <UiReveal
                    v-for="(work, index) in jobs"
                    :key="index"
                    :delay="index * 120"
                    :from="index % 2 === 0 ? 'left' : 'right'"
                >
                    <div class="relative grid md:grid-cols-2 gap-0 md:gap-12 items-start">
                        <!-- Node dot -->
                        <div class="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-surface shadow-md shadow-indigo-500/50 z-10"></div>

                        <!-- Date column (opposite side of the card on md+) -->
                        <div
                            class="hidden md:flex items-center pt-4"
                            :class="index % 2 === 0 ? 'md:order-2 justify-start pl-2' : 'md:order-1 justify-end pr-2'"
                        >
                            <span class="text-xs text-ink/35 bg-ink/[0.04] px-3 py-1.5 rounded-full border border-ink/[0.06] whitespace-nowrap">{{ work.date }}</span>
                        </div>

                        <!-- Card -->
                        <div
                            class="pl-14 md:pl-0"
                            :class="index % 2 === 0 ? 'md:order-1 md:pr-2' : 'md:order-2 md:pl-2'"
                        >
                            <div v-tilt class="bg-panel/55 backdrop-blur-xl border border-ink/[0.06] rounded-2xl p-5 hover:border-indigo-500/20 transition-colors duration-300 shadow-xl shadow-black/20">
                                <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
                                    <div>
                                        <h3 class="font-semibold text-ink text-base">{{ work.company }}</h3>
                                        <p class="text-indigo-400 text-sm mt-0.5">{{ work.title }}</p>
                                    </div>
                                    <span class="md:hidden text-xs text-ink/35 bg-ink/[0.04] px-2.5 py-1 rounded-full border border-ink/[0.06] whitespace-nowrap">{{ work.date }}</span>
                                </div>
                                <p class="text-ink/50 text-sm leading-relaxed">{{ work.description }}</p>
                            </div>
                        </div>
                    </div>
                </UiReveal>
            </div>
        </div>
    </section>
</template>
