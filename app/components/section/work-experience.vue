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
            <div class="flex flex-col items-center gap-3 text-center mb-16">
                <span class="text-xs font-medium tracking-widest uppercase text-indigo-400">{{ t('workExperience.label') }}</span>
                <UiTextGradient>{{ t('workExperience.title') }}</UiTextGradient>
            </div>
        </UiReveal>

        <div class="relative max-w-2xl mx-auto">
            <div class="absolute left-5 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/40 via-purple-500/20 to-transparent pointer-events-none"></div>

            <div class="flex flex-col gap-8">
                <UiReveal
                    v-for="(work, index) in jobs"
                    :key="index"
                    :delay="index * 120"
                    from="left"
                >
                    <div class="relative pl-14 md:pl-16">
                        <div class="absolute left-[15px] md:left-[18px] top-5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-[#06060f] shadow-md shadow-indigo-500/50"></div>

                        <div class="bg-[#0d0d20] border border-white/[0.06] rounded-2xl p-5 hover:border-indigo-500/20 transition-colors duration-300">
                            <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
                                <div>
                                    <h3 class="font-semibold text-white text-base">{{ work.company }}</h3>
                                    <p class="text-indigo-400 text-sm mt-0.5">{{ work.title }}</p>
                                </div>
                                <span class="text-xs text-white/35 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.06] whitespace-nowrap">{{ work.date }}</span>
                            </div>
                            <p class="text-white/50 text-sm leading-relaxed">{{ work.description }}</p>
                        </div>
                    </div>
                </UiReveal>
            </div>
        </div>
    </section>
</template>
