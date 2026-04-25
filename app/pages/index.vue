<script setup>
useHead({
    title: 'Panha - My Portfolio',
    meta: [
        { name: 'description', content: 'Welcome to my portfolio website where I showcase my projects and skills.' },
        { name: 'keywords', content: 'portfolio, projects, web development, skills, about me' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
    <SectionHome />
    <SectionAbout />
    <SectionWorkExperience />
    <SectionEducation />
    <SectionRecentWork />
    <SectionContact />
</template>
