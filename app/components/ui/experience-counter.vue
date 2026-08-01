<script setup>
import { EXPERIENCE_START } from '@/compossables/useExperience'

const { t } = useI18n()

const START_DATE = EXPERIENCE_START

const elapsed = ref({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 })
let timer = 0

// Calendar-accurate breakdown: whole years/months first, then remaining time
function update() {
    const now = new Date()

    let years = now.getFullYear() - START_DATE.getFullYear()
    let months = now.getMonth() - START_DATE.getMonth()
    let days = now.getDate() - START_DATE.getDate()

    if (days < 0) {
        months--
        // days in the month before the current one
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate()
    }
    if (months < 0) {
        years--
        months += 12
    }

    let hours = now.getHours() - START_DATE.getHours()
    let minutes = now.getMinutes() - START_DATE.getMinutes()
    let seconds = now.getSeconds() - START_DATE.getSeconds()

    if (seconds < 0) { seconds += 60; minutes-- }
    if (minutes < 0) { minutes += 60; hours-- }
    if (hours < 0) {
        hours += 24
        days--
        if (days < 0) {
            months--
            days += new Date(now.getFullYear(), now.getMonth(), 0).getDate()
            if (months < 0) { years--; months += 12 }
        }
    }

    elapsed.value = { years, months, days, hours, minutes, seconds }
}

const segments = computed(() => [
    { value: elapsed.value.years, label: t('workExperience.counter.years') },
    { value: elapsed.value.months, label: t('workExperience.counter.months') },
    { value: elapsed.value.days, label: t('workExperience.counter.days') },
    { value: elapsed.value.hours, label: t('workExperience.counter.hours') },
    { value: elapsed.value.minutes, label: t('workExperience.counter.minutes') },
    { value: elapsed.value.seconds, label: t('workExperience.counter.seconds') },
])

onMounted(() => {
    update()
    timer = window.setInterval(update, 1000)
})

onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
    <div class="flex flex-col items-center gap-4">
        <p class="text-xs font-medium tracking-widest uppercase text-ink/35">{{ t('workExperience.counterTitle') }}</p>
        <div class="flex flex-wrap justify-center items-stretch gap-2 md:gap-3">
            <template v-for="(seg, i) in segments" :key="seg.label">
                <div
                    v-tilt
                    class="flex flex-col items-center justify-center min-w-16 md:min-w-20 px-3 py-3 rounded-2xl bg-panel/55 backdrop-blur-xl border border-ink/[0.06] shadow-xl shadow-black/20"
                >
                    <span class="text-2xl md:text-3xl font-bold tabular-nums bg-clip-text text-transparent bg-gradient-to-b from-ink to-indigo-400">
                        {{ String(seg.value).padStart(2, '0') }}
                    </span>
                    <span class="text-[10px] md:text-xs text-ink/35 mt-1">{{ seg.label }}</span>
                </div>
                <span v-if="i < segments.length - 1" class="self-center text-ink/15 font-bold hidden md:inline">·</span>
            </template>
        </div>
    </div>
</template>
