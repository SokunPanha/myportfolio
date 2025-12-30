<template>
    <section id="work" class="py-20">
        <div class="flex justify-center items-center h-full">
            <UiTextGradient>Work Experience</UiTextGradient>
        </div>

        <main class="flex flex-col gap-5 mt-10 ">
            <div v-for="work in workExperience" :key="work" class="flex  md:gap-10 gap-5 md:px-20  px-5 text-white">
                <div class=" flex flex-col w-fit justify-between items-center">
                    <h1 class="w-fit text-nowrap text-gray-400">
                        {{ work.date }}
                    </h1>
                    <div class="h-[76%] w-1 rounded-4xl  bg-indigo-200">

                    </div>
                </div>
                <div class="">
                    <h1 class="text-lg font-bold text-orange-300">{{ work.company }}</h1>
                    <h2 class="text-md text-indigo-300 font-bold">{{ work.title }}</h2>
                    <p class="text-white/70 text-justify">{{ work.description }}</p>
                </div>
            </div>
        </main>
    </section>
</template>
<script setup >
import { useFetchWorkExperience } from '~/compossables/recent-work/useFetchWorkExperience';
const { workExperience } = useFetchWorkExperience()
</script>