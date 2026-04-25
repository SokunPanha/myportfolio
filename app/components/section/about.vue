<script setup>
import { useFetchAboutMe } from '~/compossables/recent-work/useFetchAboutMe';
const { aboutMe } = useFetchAboutMe()
const { t } = useI18n()
</script>

<template>
  <section class="py-24 px-6 md:px-10" id="about">
    <UiReveal>
      <div class="flex flex-col items-center gap-3 text-center mb-16">
        <span class="text-xs font-medium tracking-widest uppercase text-indigo-400">{{ t('about.label') }}</span>
        <UiTextGradient>{{ t('about.title') }}</UiTextGradient>
        <p class="text-sm md:text-base text-white/45 max-w-lg leading-relaxed">
          {{ t('about.description') }}
        </p>
      </div>
    </UiReveal>

    <UiReveal :delay="120">
      <div class="flex justify-center p-4 sm:p-6 md:p-10 max-md:overflow-hidden">
        <div class="relative">
          <!-- Rotating ring -->
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

          <!-- Center image -->
          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img src="/images/meditation.webp" alt="Meditation" class="w-20 h-20 md:w-28 md:h-28" />
          </div>
        </div>
      </div>
    </UiReveal>
  </section>
</template>
