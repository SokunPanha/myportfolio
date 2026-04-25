<script setup>
defineProps({ path: String })
</script>

<template>
    <NuxtLink
        :to="path"
        class="inline-flex items-center px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-px"
    >
        <slot />
    </NuxtLink>
</template>
