export default defineNuxtPlugin((nuxtApp) => {
    const reducedMotion = import.meta.client && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    nuxtApp.vueApp.directive('tilt', {
        getSSRProps: () => ({}),
        mounted(el: HTMLElement, binding) {
            if (reducedMotion) return

            const maxTilt = binding.value?.max ?? 6
            el.style.transformStyle = 'preserve-3d'
            el.style.willChange = 'transform'

            let frame = 0

            const onMove = (e: MouseEvent) => {
                cancelAnimationFrame(frame)
                frame = requestAnimationFrame(() => {
                    const rect = el.getBoundingClientRect()
                    const x = (e.clientX - rect.left) / rect.width - 0.5
                    const y = (e.clientY - rect.top) / rect.height - 0.5
                    el.style.transform = `perspective(900px) rotateX(${-y * maxTilt}deg) rotateY(${x * maxTilt}deg) translateZ(6px)`
                    el.style.transition = 'transform 0.1s ease-out'
                })
            }

            const onLeave = () => {
                cancelAnimationFrame(frame)
                el.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)'
            }

            el.addEventListener('mousemove', onMove)
            el.addEventListener('mouseleave', onLeave)
            ;(el as any).__tiltCleanup = () => {
                cancelAnimationFrame(frame)
                el.removeEventListener('mousemove', onMove)
                el.removeEventListener('mouseleave', onLeave)
            }
        },
        unmounted(el: HTMLElement) {
            ;(el as any).__tiltCleanup?.()
        },
    })
})
