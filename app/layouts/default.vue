<template>
    <main class="bg-surface min-h-screen">
        <ClientOnly>
            <UiThreeBackground />
        </ClientOnly>
        <UiNav />
        <div class="relative max-w-[1100px] w-full mx-auto pt-16">
            <slot />
            <UiFooter />
        </div>
    </main>
</template>