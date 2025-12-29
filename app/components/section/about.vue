<script setup>
const images = [
  'html.webp',
  'css.webp',
  'tailwind.webp',
  'javascript.webp',
  'typescript.webp',
  'git.webp',
  'figma.webp',
  'react.webp',
  'nextjs.webp',
  'vuejs.webp',
  'nuxt.webp',
  'ant.webp',
  'shadcn.webp',
  'nestjs.webp',
  'postgres.webp',
  'docker.webp'
]
import { useFetchAboutMe } from '~/compossables/recent-work/useFetchAboutMe';
const { aboutMe } = useFetchAboutMe()

</script>

<template>
  <section class="py-20" id="about">
    <!-- Title -->
    <div class="flex flex-col items-center gap-3 text-center">
      <UiTextGradient>About Me</UiTextGradient>
      <p class="text-white/70 max-w-[90%] md:max-w-[60%]">
        {{ aboutMe.description }}
      </p>
    </div>

    <!-- ORBIT -->
    <div class="flex justify-center mt-16  p-10  max-md:overflow-hidden ">
      <div class="relative">

        <!-- Rotating ring -->
        <div
          class="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]
                 rounded-full animate-[spin_35s_linear_infinite]
                 [--orbit-radius:140px] md:[--orbit-radius:180px]"
        >
          <!-- Orbiting icons -->
          <div
            v-for="(image, index) in aboutMe.skills"
            :key="image"
            class="absolute top-1/2 left-1/2
                   w-12 h-12 md:w-16 md:h-16
                   -translate-x-1/2 -translate-y-1/2"
            :style="{
              transform: `
                rotate(${index * (360 / aboutMe.skills.length)}deg)
                translate(var(--orbit-radius))
                rotate(-${index * (360 / aboutMe.skills.length)}deg)
              `
            }"
          >
            <img
              :src="`/images/${image}`"
              :alt="image"
              class="w-full h-full rounded-full
                     bg-gradient-to-r from-indigo-500/20 to-pink-500/20
                     backdrop-blur-lg p-2 object-contain"
            />
          </div>
          <!-- Glow pulse -->
          <div
            class="absolute left-1/2 top-1/2 md:w-2/3 md:h-2/3
                   w-1/3 h-1/3
                   -translate-x-1/2 -translate-y-1/2
                   rounded-full blur-2xl
                   bg-gradient-to-r from-indigo-500/70 to-pink-500/70
                   animate-[ping_3s_linear_infinite]"
          ></div>

        </div>

        <!-- Center image (NOT rotating) -->
        <div
          class="absolute left-1/2 top-1/2
                 -translate-x-1/2 -translate-y-1/2"
        >
          <img
            src="/images/meditation.webp"
            alt="Meditation"
            class="w-24 h-24 md:w-30 md:h-30"
          />
        </div>

      </div>
    </div>
  </section>
</template>
