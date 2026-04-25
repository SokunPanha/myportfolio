<script setup lang="ts">
interface Project {
    name: string
    description: string
    github?: string
    demo?: string
    technologies?: string[]
    image?: string
    type?: string
    process?: string
}

defineProps<{
    index: number
    project: Project
}>()

const { t } = useI18n()
</script>

<template>
    <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center group">
        <!-- Image -->
        <div
            :class="index % 2 === 0 ? 'md:order-1' : 'md:order-2'"
            class="relative rounded-2xl overflow-hidden border border-white/[0.06] hover:border-indigo-500/25 transition-colors duration-500"
        >
            <a :href="project.demo" target="_blank" class="block relative">
                <div class="absolute inset-0 bg-gradient-to-t from-[#06060f]/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span class="text-sm text-white font-medium flex items-center gap-2">
                        {{ t('projects.viewProject') }}
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </span>
                </div>
                <NuxtImg :src="project.image" loading="lazy" alt="" class="w-full object-cover aspect-video" />
            </a>
        </div>

        <!-- Content -->
        <div
            :class="index % 2 === 0 ? 'md:order-2' : 'md:order-1'"
            class="flex flex-col gap-4 text-white"
        >
            <div class="flex items-center gap-2">
                <span class="text-xs text-indigo-400 font-medium uppercase tracking-wider">{{ project.type }}</span>
                <span v-if="project.process" class="text-white/20">•</span>
                <span v-if="project.process" class="text-xs text-emerald-400/80 bg-emerald-400/10 px-2.5 py-0.5 rounded-full border border-emerald-400/15">{{ project.process }}</span>
            </div>

            <h3 class="text-xl md:text-2xl font-semibold text-white">{{ project.name }}</h3>

            <p class="text-white/50 text-sm md:text-base leading-relaxed">{{ project.description }}</p>

            <div class="flex flex-wrap gap-2">
                <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="text-xs text-white/55 bg-white/[0.05] border border-white/[0.08] px-2.5 py-1 rounded-lg"
                >
                    {{ tech }}
                </span>
            </div>

            <div class="flex items-center gap-4 pt-1">
                <a
                    v-if="project.github"
                    :href="project.github"
                    target="_blank"
                    class="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200"
                >
                    <svg class="w-4 h-4" viewBox="0 0 256 256" fill="currentColor">
                        <path d="M128,0C57.307,0,0,57.307,0,128c0,56.556,36.676,104.553,87.535,121.491c6.4,1.176,8.735-2.78,8.735-6.179c0-3.05-.115-13.151-.167-23.87c-35.624,7.744-43.134-15.133-43.134-15.133c-5.826-14.802-14.22-18.742-14.22-18.742c-11.625-7.952.878-7.79.878-7.79c12.852.905,19.62,13.19,19.62,13.19c11.426,19.578,29.978,13.916,37.288,10.64c1.155-8.274,4.47-13.922,8.127-17.116c-28.431-3.237-58.328-14.21-58.328-63.258c0-13.969,4.977-25.394,13.148-34.36c-1.316-3.24-5.699-16.258,1.25-33.878c0,0,10.72-3.43,35.112,13.088c10.183-2.832,21.103-4.25,31.96-4.3c10.855.05,21.78,1.468,31.98,4.3c24.373-16.518,35.077-13.088,35.077-13.088c6.967,17.62,2.582,30.638,1.265,33.878c8.188,8.966,13.131,20.391,13.131,34.36c0,49.17-29.944,59.988-58.456,63.157c4.597,3.96,8.682,11.768,8.682,23.725c0,17.135-.155,30.955-.155,35.14c0,3.42,2.308,7.408,8.786,6.157C219.352,232.506,256,184.536,256,128C256,57.307,198.693,0,128,0z"/>
                    </svg>
                    {{ t('projects.github') }}
                </a>
                <a
                    v-if="project.demo"
                    :href="project.demo"
                    target="_blank"
                    class="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
                >
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {{ t('projects.liveDemo') }}
                </a>
            </div>
        </div>
    </div>
</template>
