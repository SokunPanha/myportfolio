<script setup>

defineProps({
    path: String,
})
</script>

<template>
    <NuxtLink :to="path" class="p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full px-10 hover:scale-110 transition-all duration-100!">
        <slot />
    </NuxtLink>
</template>