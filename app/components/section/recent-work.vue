<template>
    <section class="py-20" id="work">
        <div class="flex justify-center items-center">
            <UiTextGradient>Recent Work</UiTextGradient>
        </div>

        <main >
            <div class= " grid grid-cols-1 gap-30 p-10">
             <UiWorkCard v-for="(project, index) in projects" :index="index" :project="project" />
            </div>

        </main>
    </section>
</template>

<script setup>
import { useFetchRecentWork } from '@/compossables/recent-work/useFetchRecentWork'
const projects = useFetchRecentWork()

</script>