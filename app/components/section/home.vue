<template>
    <main class=" min-h-[100vh] md:min-h-[70vh] relative ">

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
                class=" w-full overflow-hidden  h-full  bg-[#ffffff]/10 backdrop-blur-[5px]  grid md:grid-cols-2 grid-cols-1 ">
                <div class="flex flex-col p-20 justify-center gap-4 items-start pl-10">
                    <h1 class="text-4xl  font-bold text-white animate-bounce">Hi, I’m Anurag</h1>
                    <h2
                        class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r  from-[#5DFFFF] from-10%  to-[#c72a81] to-70% ">
                        Front-End Developer.</h2>
                    <p class="text-white/75">A self-taught front-end developer with over 2 months of experience, I build
                        responsive and user-friendly websites & app. I focus on clean code and efficient design,
                        ensuring seamless interactions that align with both user expectations and business objectives.
                    </p>
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