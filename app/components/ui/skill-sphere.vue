<script setup>
const props = defineProps({
    skills: { type: Array, required: true },
})

const containerRef = ref(null)
const iconRefs = ref([])

let animationId = 0
let rotX = -0.3
let rotY = 0
let velX = 0
let velY = 0.0035
let dragging = false
let lastX = 0
let lastY = 0
let hovering = false
let reducedMotion = false

// Fibonacci sphere distribution — evenly spreads N points on a sphere
const points = computed(() => {
    const n = props.skills.length
    const pts = []
    const golden = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < n; i++) {
        const y = 1 - (i / (n - 1)) * 2
        const r = Math.sqrt(1 - y * y)
        const theta = golden * i
        pts.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r })
    }
    return pts
})

function render() {
    animationId = requestAnimationFrame(render)

    if (!dragging && !reducedMotion) {
        rotY += hovering ? velY * 0.35 : velY
        rotX += velX
        velX *= 0.95
    }

    const container = containerRef.value
    if (!container) return
    const radius = (container.offsetWidth || 300) * 0.42

    const cosX = Math.cos(rotX), sinX = Math.sin(rotX)
    const cosY = Math.cos(rotY), sinY = Math.sin(rotY)

    points.value.forEach((p, i) => {
        const el = iconRefs.value[i]
        if (!el) return

        // rotate around Y then X
        let x = p.x * cosY + p.z * sinY
        let z = -p.x * sinY + p.z * cosY
        let y = p.y * cosX - z * sinX
        z = p.y * sinX + z * cosX

        const depth = (z + 1) / 2 // 0 (back) → 1 (front)
        const scale = 0.55 + depth * 0.65
        const opacity = 0.25 + depth * 0.75

        el.style.transform = `translate(-50%, -50%) translate3d(${x * radius}px, ${y * radius}px, 0) scale(${scale})`
        el.style.opacity = opacity
        el.style.zIndex = Math.round(depth * 100)
        el.style.filter = depth < 0.35 ? 'blur(1.5px)' : 'none'
    })
}

function onPointerDown(e) {
    dragging = true
    lastX = e.clientX
    lastY = e.clientY
}

function onPointerMove(e) {
    if (!dragging) return
    rotY += (e.clientX - lastX) * 0.005
    rotX -= (e.clientY - lastY) * 0.005
    lastX = e.clientX
    lastY = e.clientY
}

function onPointerUp() {
    dragging = false
}

onMounted(() => {
    reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerup', onPointerUp, { passive: true })
    animationId = requestAnimationFrame(render)
})

onBeforeUnmount(() => {
    cancelAnimationFrame(animationId)
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('pointerup', onPointerUp)
})
</script>

<template>
    <div
        ref="containerRef"
        class="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] cursor-grab active:cursor-grabbing select-none touch-none"
        @pointerdown="onPointerDown"
        @mouseenter="hovering = true"
        @mouseleave="hovering = false"
    >
        <!-- Center glow -->
        <div class="absolute left-1/2 top-1/2 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-indigo-600/25 animate-pulse pointer-events-none"></div>

        <!-- Center figure — z-index above every icon (icons max out at 100) -->
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style="z-index: 150">
            <!-- <img src="/images/medit
             ation.webp" alt="Meditation" class="w-20 h-20 md:w-28 md:h-28 drop-shadow-[0_0_25px_rgba(99,102,241,0.45)]" /> -->
        </div>

        <!-- Orbiting skill icons -->
        <div
            v-for="(image, index) in skills"
            :key="image"
            :ref="el => iconRefs[index] = el"
            class="absolute top-1/2 left-1/2 w-10 h-10 md:w-13 md:h-13 pointer-events-none will-change-transform"
        >
            <div class="w-full h-full rounded-xl bg-panel/70 backdrop-blur-md border border-ink/10 p-2 flex items-center justify-center shadow-lg shadow-black/40">
                <img :src="`/images/${image}`" :alt="image" class="w-full h-full object-contain" draggable="false" />
            </div>
        </div>
    </div>
</template>
