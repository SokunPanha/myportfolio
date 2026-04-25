<script setup>
import { useFetchRecentWork } from '@/compossables/recent-work/useFetchRecentWork'
const staticProjects = useFetchRecentWork()

const { t, tm, rt } = useI18n()

const projects = computed(() => {
    const messages = tm('projects.items')
    if (!Array.isArray(messages)) return staticProjects

    return staticProjects.map((project, index) => {
        const translated = messages[index]
        if (!translated) return project
        return {
            ...project,
            name: rt(translated.name),
            description: rt(translated.description),
            type: rt(translated.type),
            process: rt(translated.process)
        }
    })
})
</script>

<template>
    <section class="py-24 px-6 md:px-10">
        <UiReveal>
            <div class="flex flex-col items-center gap-3 text-center mb-16">
                <span class="text-xs font-medium tracking-widest uppercase text-indigo-400">{{ t('projects.label') }}</span>
                <UiTextGradient>{{ t('projects.title') }}</UiTextGradient>
            </div>
        </UiReveal>

        <div class="flex flex-col gap-20 md:gap-28">
            <UiReveal
                v-for="(project, index) in projects"
                :key="index"
                :from="index % 2 === 0 ? 'left' : 'right'"
            >
                <UiWorkCard :index="index" :project="project" />
            </UiReveal>
        </div>
    </section>
</template>
