<script setup>
const isVisible = ref(false)

function checkScroll() {
    isVisible.value = window.scrollY > 300
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

onMounted(() => {
    window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
    <Transition name="fade">
        <button
            v-if="isVisible"
            @click="scrollToTop"
            class="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full
                   bg-[#0d0d20] border border-white/[0.10]
                   flex items-center justify-center
                   shadow-lg shadow-black/50
                   hover:border-indigo-500/40 hover:-translate-y-0.5
                   transition-all duration-200"
            aria-label="Scroll to top"
        >
            <svg class="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
            </svg>
        </button>
    </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
</style>
