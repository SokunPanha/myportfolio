<script setup lang="ts">
const props = withDefaults(defineProps<{
    delay?: number
    from?: 'bottom' | 'left' | 'right'
    tag?: string
}>(), {
    delay: 0,
    from: 'bottom',
    tag: 'div'
})

const el = ref<HTMLElement | null>(null)
const visible = ref(false)

onMounted(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                visible.value = true
                observer.disconnect()
            }
        },
        { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )
    if (el.value) observer.observe(el.value)
})
</script>

<template>
    <component
        :is="tag"
        ref="el"
        class="reveal-item"
        :class="[`reveal-from-${from}`, { revealed: visible }]"
        :style="{ transitionDelay: `${delay}ms` }"
    >
        <slot />
    </component>
</template>
