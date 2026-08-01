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
            <div class="flex items-end gap-6 mb-12">
                <div class="flex flex-col gap-2">
                    <span class="text-xs font-medium tracking-widest uppercase text-indigo-400">{{ t('projects.label') }}</span>
                    <UiTextGradient>{{ t('projects.title') }}</UiTextGradient>
                </div>
                <div class="hidden md:block flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent mb-3"></div>
            </div>
        </UiReveal>

        <div class="grid md:grid-cols-2 gap-6">
            <UiReveal
                v-for="(project, index) in projects"
                :key="index"
                :delay="(index % 2) * 100"
                :class="{ 'md:mt-12': index % 2 === 1 }"
            >
                <UiWorkCard :index="index" :project="project" class="h-full" />
            </UiReveal>
        </div>
    </section>
</template>
