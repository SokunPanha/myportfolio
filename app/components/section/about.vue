<script setup lang="ts">
import { useFetchAboutMe } from '~/compossables/recent-work/useFetchAboutMe';
const { aboutMe } = useFetchAboutMe()
const { t } = useI18n()

const groupIcons: Record<string, string> = {
    frontend: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    backend: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2',
    database: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
    versionControl: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    devops: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
}

const groupColors: Record<string, string> = {
    frontend: 'indigo',
    backend: 'purple',
    database: 'violet',
    versionControl: 'blue',
    devops: 'fuchsia',
}

const colorClasses: Record<string, { border: string; icon: string; badge: string }> = {
    indigo: {
        border: 'border-indigo-500/20 hover:border-indigo-500/40',
        icon: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
        badge: 'bg-indigo-500/10 border-indigo-500/15 text-indigo-300',
    },
    purple: {
        border: 'border-purple-500/20 hover:border-purple-500/40',
        icon: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
        badge: 'bg-purple-500/10 border-purple-500/15 text-purple-300',
    },
    violet: {
        border: 'border-violet-500/20 hover:border-violet-500/40',
        icon: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
        badge: 'bg-violet-500/10 border-violet-500/15 text-violet-300',
    },
    blue: {
        border: 'border-blue-500/20 hover:border-blue-500/40',
        icon: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
        badge: 'bg-blue-500/10 border-blue-500/15 text-blue-300',
    },
    fuchsia: {
        border: 'border-fuchsia-500/20 hover:border-fuchsia-500/40',
        icon: 'bg-fuchsia-500/10 border-fuchsia-500/20 text-fuchsia-400',
        badge: 'bg-fuchsia-500/10 border-fuchsia-500/15 text-fuchsia-300',
    },
}

const versionControlIcon = 'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4'
</script>

<template>
  <section class="py-24 px-6 md:px-10" id="about">
    <!-- Section Header -->
    <UiReveal>
      <div class="flex flex-col items-center gap-3 text-center mb-16">
        <span class="text-xs font-medium tracking-widest uppercase text-indigo-400">{{ t('about.label') }}</span>
        <UiTextGradient>{{ t('about.title') }}</UiTextGradient>
        <p class="text-sm md:text-base text-white/45 max-w-lg leading-relaxed">
          {{ t('about.description') }}
        </p>
      </div>
    </UiReveal>

    <!-- Orbit -->
    <UiReveal :delay="120">
      <div class="flex justify-center p-4 sm:p-6 md:p-10 max-md:overflow-hidden">
        <div class="relative">
          <div
            class="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px]
                   rounded-full animate-[spin_35s_linear_infinite]
                   [--orbit-radius:130px] md:[--orbit-radius:170px]"
          >
            <div
              v-for="(image, index) in aboutMe.skills"
              :key="image"
              class="absolute top-1/2 left-1/2 w-10 h-10 md:w-14 md:h-14 -translate-x-1/2 -translate-y-1/2"
              :style="{
                transform: `
                  rotate(${index * (360 / aboutMe.skills.length)}deg)
                  translate(var(--orbit-radius))
                  rotate(-${index * (360 / aboutMe.skills.length)}deg)
                `
              }"
            >
              <div class="w-full h-full rounded-xl bg-[#0d0d20] border border-white/[0.08] p-2 flex items-center justify-center shadow-lg shadow-black/40">
                <img :src="`/images/${image}`" :alt="image" class="w-full h-full object-contain" />
              </div>
            </div>

            <div class="absolute left-1/2 top-1/2 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-indigo-600/25 animate-pulse pointer-events-none"></div>
          </div>

          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img src="/images/meditation.webp" alt="Meditation" class="w-20 h-20 md:w-28 md:h-28" />
          </div>
        </div>
      </div>
    </UiReveal>

    <!-- Skill Groups -->
    <div class="mt-8">
      <UiReveal>
        <p class="text-center text-sm font-medium text-white/40 tracking-widest uppercase mb-10">{{ t('about.skillsTitle') }}</p>
      </UiReveal>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <UiReveal
          v-for="(group, index) in aboutMe.skillGroups"
          :key="group.key"
          :delay="index * 80"
        >
          <div
            class="bg-[#0d0d20] border rounded-2xl p-5 transition-colors duration-300 h-full"
            :class="colorClasses[groupColors[group.key]].border"
          >
            <!-- Group header -->
            <div class="flex items-center gap-2.5 mb-4">
              <div
                class="w-7 h-7 rounded-lg border flex items-center justify-center shrink-0"
                :class="colorClasses[groupColors[group.key]].icon"
              >
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="groupIcons[group.key]" />
                </svg>
              </div>
              <h3 class="text-sm font-semibold text-white/80">{{ t(`about.groups.${group.key}`) }}</h3>
            </div>

            <!-- Skill tags -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in group.skills"
                :key="skill"
                class="text-xs px-2.5 py-1 rounded-lg border font-medium"
                :class="colorClasses[groupColors[group.key]].badge"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </UiReveal>
      </div>
    </div>
  </section>
</template>
