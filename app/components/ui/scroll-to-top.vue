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
            class="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full
                   bg-gradient-to-r from-[#5DFFFF] to-[#c72a81]
                   flex items-center justify-center
                   shadow-lg shadow-purple-500/30
                   hover:scale-110 hover:shadow-purple-500/50
                   transition-all duration-300"
            aria-label="Scroll to top"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 15l7-7 7 7"
                />
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
