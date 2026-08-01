<script setup>
// Apply saved theme before paint to avoid a flash of the wrong theme
useHead({
    script: [{
        innerHTML: `(function(){try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light')}catch(e){}})()`,
        tagPosition: 'head',
    }],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UiScrollToTop />
</template>
