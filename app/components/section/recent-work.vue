<script setup>
import { useFetchRecentWork } from '@/compossables/recent-work/useFetchRecentWork'
const staticProjects = useFetchRecentWork()

const { t, tm, rt } = useI18n()

// Merge static data (images, links, technologies) with translated content
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
    <section class="py-20" >
        <div class="flex justify-center items-center">
            <UiTextGradient>{{ t('projects.title') }}</UiTextGradient>
        </div>
        <main >
            <div class= " grid grid-cols-1 gap-30 p-10">
             <UiWorkCard v-for="(project, index) in projects" :key="index" :index="index" :project="project" />
            </div>
        </main>
    </section>
</template>
