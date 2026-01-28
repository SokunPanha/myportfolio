<script setup>
import { useScrollReveal } from '~/compossables/useScrollReveal'

const { elementRef: aboutRef, isVisible: aboutVisible } = useScrollReveal()
const { elementRef: workExpRef, isVisible: workExpVisible } = useScrollReveal()
const { elementRef: recentWorkRef, isVisible: recentWorkVisible } = useScrollReveal()
const { elementRef: contactRef, isVisible: contactVisible } = useScrollReveal()
useHead({
    title: 'Panha - My Portfolio',
    meta: [
        {
            name: 'description',
            content: 'Welcome to my portfolio website where I showcase my projects and skills.'
        },
        {
            name: 'keywords',
            content: 'portfolio, projects, web development, skills, about me'
        }
    ],
    link: [
        {
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }
    ]
})

useSeoMeta({
    title: 'Panha - My Portfolio',
    description: 'Welcome to my portfolio website where I showcase my projects and skills.',
    keywords: 'portfolio, projects, web development, skills, about me',
    ogType: 'website',
    ogImage: '/images/profile-image.webp',
    twitterCard: 'summary_large_image',
    twitterImage: '/images/profile-image.webp',    
})
</script>

<template>
    <SectionHome/>

    <div
        ref="aboutRef"
        class="scroll-reveal"
        :class="{ 'visible': aboutVisible }"
    >
        <SectionAbout/>
    </div>

    <div
        ref="workExpRef"
        class="scroll-reveal-fade-left"
        :class="{ 'visible': workExpVisible }"
    >
        <SectionWorkExperience/>
    </div>

    <div
        ref="recentWorkRef"
        class="scroll-reveal-fade-right"
        :class="{ 'visible': recentWorkVisible }"
    >
        <SectionRecentWork/>
    </div>

    <div
        ref="contactRef"
        class="scroll-reveal-scale"
        :class="{ 'visible': contactVisible }"
    >
        <SectionContact/>
    </div>
</template>
