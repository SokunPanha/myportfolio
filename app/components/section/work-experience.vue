<template>
    <section id="work" class="py-20 relative">
        <div class="rounded-full z-0 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 absolute 
               md:right-0 top-1/2 -translate-y-1/2 max-md:left-1/2 max-md:transform max-md:-translate-x-1/2 blur-3xl ">
        </div>
        <div class="absolute top-0 left-0 w-full h-full ">
            <div class="h-full w-full grid grid-cols-10 grid-rows-10">
                <div v-for="_ in 100" class="border border-[#ffffff]/20 opacity-15  "></div>
            </div>
        </div>
        <div class="flex justify-center items-center h-full">
            <UiTextGradient>Work Experience</UiTextGradient>
        </div>

        <main class="flex flex-col md:gap-5 gap-0 mt-10 ">
            <div v-for="(work, index) in workExperience" :key="index">
                <div class="flex justify-center h-[50px]" v-if="index !== workExperience.length && index !== 0">
                    <div class="w-[5px] bg-gradient-to-b from-indigo-500  to-pink-500/20 z-10">

                    </div>
                </div>
                <div class="relative">
                    <div class=" z-10 absolute md:hidden text-white top-4 right-2 bg-black/40 px-2">{{ work.date }}
                    </div>

                    <div
                        class="flex md:bg-transparent bg-white/10 backdrop-blur-[5px]  md:p-5  max-md:rounded-lg p-5  md:gap-16 gap-5 md:px-20  px-5 text-white">
                        <div class=" md:flex flex-1  flex-col  hidden  justify-center items-center">
                            <h1 class=" text-nowrap text-gray-400">
                                {{ work.date }}
                            </h1>
                            <div class=" h-full flex items-center justify-center">
                                <div
                                    class="h-[76%] md:h-[80%] w-[2px] rounded-4xl  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

                                </div>
                            </div>
                        </div>

                        <div class="md:w-2/3 w-full">
                            <h1 class="text-lg font-bold text-orange-300 max-md:w-2/3">{{ work.company }}</h1>
                            <h2 class="text-md text-indigo-300 font-bold ">{{ work.title }}</h2>
                            <p class="text-white/70 text-justify">{{ work.description }}</p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    </section>
</template>
<script setup>
import { useFetchWorkExperience } from '~/compossables/recent-work/useFetchWorkExperience';
const { workExperience } = useFetchWorkExperience()
</script>