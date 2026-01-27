import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export function useScrollReveal(options: IntersectionObserverInit = {}) {
  const elementRef: Ref<HTMLElement | null> = ref(null)
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null

  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options
  }

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          // Once visible, stop observing (one-time animation)
          observer?.unobserve(entry.target)
        }
      })
    }, defaultOptions)

    if (elementRef.value) {
      observer.observe(elementRef.value)
    }
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return {
    elementRef,
    isVisible
  }
}
