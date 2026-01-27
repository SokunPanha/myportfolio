<script setup>
import { useScrollReveal } from '~/compossables/useScrollReveal'

const { elementRef: aboutRef, isVisible: aboutVisible } = useScrollReveal()
const { elementRef: workExpRef, isVisible: workExpVisible } = useScrollReveal()
const { elementRef: recentWorkRef, isVisible: recentWorkVisible } = useScrollReveal()
const { elementRef: contactRef, isVisible: contactVisible } = useScrollReveal()
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
