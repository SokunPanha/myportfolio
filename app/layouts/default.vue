<template>
    <main class="bg-[#100327] p-2 ">
     <div class="md:max-w-[1280px] w-full mx-auto">
           <nav class="w-full rounded-t-lg bg-[#ffffff]/10 backdrop-blur-[5px]  sticky top-0 z-50  text-white ">
            <ul class="flex justify-center items-center md:gap-10 gap-4 ">
                <li class="p-2">
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li class="p-2">
                    <NuxtLink to="#about">About</NuxtLink>
                </li>
                <div class="bg-black h-full text-black w-[100px] p-2" style="clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);">
                  t
                </div>
                  <li class="p-2">
                    <NuxtLink to="/work">Work</NuxtLink>
                </li>
                  <li class="p-2">
                    <NuxtLink to="/contact">Contact</NuxtLink>
                </li>
            </ul>
        </nav>
        <slot />
     </div>
    </main>
</template>