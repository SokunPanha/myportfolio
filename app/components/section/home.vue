<script setup>
    import { useFetchProfile } from '~/compossables/recent-work/useFetchProfile';
    const { profile } = useFetchProfile()
</script>
<template>
    <main class=" min-h-screen md:min-h-[70vh] relative ">
        <div class="absolute top-0 left-0 w-full h-full ">
            <div class="h-full w-full grid grid-cols-10 grid-rows-10">
                <div v-for="_ in 100" class="border border-[#ffffff]/20 opacity-15  "></div>
            </div>
        </div>
        <section class="absolute top-0 left-0 w-full  h-full overflow-hidden   ">
            <div class="rounded-full w-[500px] h-[500px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute 
               md:right-0 bottom-0  max-md:left-1/2 max-md:transform max-md:-translate-x-1/2 blur-2xl animate-pulse">
            </div>

            <div
                class=" w-full  overflow-hidden  h-full  bg-[#ffffff]/10 backdrop-blur-[5px]  grid md:grid-cols-2 grid-cols-1 ">
                <div class="flex flex-col md:p-20 p-5 text-justify justify-center gap-4 items-start md:pl-10">
                    <h1 class="text-4xl  font-bold text-white animate-bounce">Hi, I’m {{ profile.name }}</h1>
                    <h2
                        class="md:text-2xl text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r  from-[#5DFFFF] from-10%  to-[#c72a81] to-70% ">
                        {{ profile.title }}</h2>
                    <p class="md:text-lg text-[14px] text-white/75">{{ profile.description }}</p>
                    <UiButton path="#contact">
                        <span class="text-white"> Contact Me</span>
                    </UiButton>
                </div>

                <div class="relative group">
                  
                    <img class="object-cover group md:w-full w-[400px] mx-auto h-full" src="/images/profile.png" alt="">
                </div>
            </div>
        </section>
    </main>
</template>