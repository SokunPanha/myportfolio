export function useTypingEffect(text: Ref<string> | string, options: { speed?: number; delay?: number; autoStart?: boolean } = {}) {
    const { speed = 50, delay = 0, autoStart = true } = options
    const displayedText = ref('')
    const isComplete = ref(false)
    const isTyping = ref(false)

    const textValue = computed(() => unref(text))
    const hasStarted = ref(false)

    let timeoutId: ReturnType<typeof setTimeout> | null = null

    function startTyping() {
        hasStarted.value = true
        displayedText.value = ''
        isComplete.value = false
        isTyping.value = true

        let index = 0
        const currentText = textValue.value

        function typeNextChar() {
            if (index < currentText.length) {
                displayedText.value += currentText[index]
                index++
                timeoutId = setTimeout(typeNextChar, speed)
            } else {
                isComplete.value = true
                isTyping.value = false
            }
        }

        timeoutId = setTimeout(typeNextChar, delay)
    }

    function reset() {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        displayedText.value = ''
        isComplete.value = false
        isTyping.value = false
    }

    onMounted(() => {
        if (autoStart) {
            startTyping()
        }
    })

    onUnmounted(() => {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
    })

    // Watch for text changes (e.g., language switch)
    // Only restart if autoStart is true or if typing has already started
    watch(textValue, () => {
        if (autoStart || hasStarted.value) {
            reset()
            startTyping()
        }
    })

    return {
        displayedText,
        isComplete,
        isTyping,
        reset,
        startTyping
    }
}
