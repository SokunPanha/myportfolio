<template>
    <main class="bg-[#06060f] min-h-screen">
        <UiNav />
        <div class="max-w-[1100px] w-full mx-auto pt-16">
            <slot />
            <UiFooter />
        </div>
    </main>
</template>