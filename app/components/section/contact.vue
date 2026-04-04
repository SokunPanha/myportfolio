<script setup>
import emailjs from '@emailjs/browser'

const { t } = useI18n()
const config = useRuntimeConfig()

const form = ref({
    name: '',
    email: '',
    message: ''
})

const isLoading = ref(false)
const statusMessage = ref('')
const isSuccess = ref(false)

async function handleSubmit() {
    if (!form.value.name || !form.value.email || !form.value.message) {
        statusMessage.value = t('contact.form.required')
        isSuccess.value = false
        return
    }

    isLoading.value = true
    statusMessage.value = ''

    try {
        await emailjs.send(
            config.public.emailjsServiceId,
            config.public.emailjsTemplateId,
            {
                from_name: form.value.name,
                from_email: form.value.email,
                message: form.value.message,
                message_html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #6366f1;">New Contact Form Submission</h2>
                    <div style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
                        <p><strong>Name:</strong> ${form.value.name}</p>
                        <p><strong>Email:</strong> ${form.value.email}</p>
                        <p><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap;">${form.value.message}</p>
                    </div>
                    <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
                        This message was sent from your portfolio contact form.
                    </p>
                </div>`,
            },
            config.public.emailjsPublicKey
        )

        isSuccess.value = true
        statusMessage.value = t('contact.form.success')
        form.value = { name: '', email: '', message: '' }
    } catch (error) {
        isSuccess.value = false
        statusMessage.value = t('contact.form.error')
    } finally {
        isLoading.value = false
    }
}
</script>

<template>
    <section class="px-10" id="contact">
        <div class="flex justify-center items-center py-5">
            <UiTextGradient>{{ t('contact.title') }}</UiTextGradient>
        </div>

        <main class="grid md:grid-cols-2 items-center grid-cols-1 md:gap-20 gap-10">
            <div>
                <div class="flex flex-col gap-4">
                    <h1 class="text-xl md:text-2xl font-bold text-blue-400 animate-bounce">{{ t('contact.heading') }}</h1>
                    <p class="text-base md:text-lg text-white">
                        {{ t('contact.description') }}
                    </p>
                </div>

                <div class="flex flex-col gap-4 mt-6">
                    <a href="tel:+855011816899"
                        class="flex items-center gap-3 text-white hover:text-[#5DFFFF] group">
                        <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#5DFFFF]/20">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <span class="text-sm md:text-base">+855 011 816 899</span>
                    </a>

                    <a href="https://t.me/sokunpanha168" target="_blank"
                        class="flex items-center gap-3 text-white hover:text-[#5DFFFF] group">
                        <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#5DFFFF]/20">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                            </svg>
                        </div>
                        <span class="text-sm md:text-base">@sokunpanha168</span>
                    </a>
                </div>
            </div>
            <div>
                <form @submit.prevent="handleSubmit">
                    <div
                        class="flex flex-col gap-4 bg-gradient-to-b from-pink-500/10 to-[#34156b3a] backdrop-blur-lg p-4 rounded-lg">
                        <div class="flex flex-col gap-2">
                            <label for="name" class="text-white text-[14px]">{{ t('contact.form.name') }}</label>
                            <input
                                v-model="form.name"
                                type="text"
                                id="name"
                                required
                                class="bg-white/10 text-[14px] p-2 text-white border-none outline-none rounded-lg">
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="email" class="text-white text-[14px]">{{ t('contact.form.email') }}</label>
                            <input
                                v-model="form.email"
                                type="email"
                                id="email"
                                required
                                class="border-none text-[14px] outline-none bg-white/10 p-2 rounded-lg text-white">
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="message" class="text-white text-[14px]">{{ t('contact.form.message') }}</label>
                            <textarea
                                v-model="form.message"
                                id="message"
                                rows="4"
                                required
                                class="bg-white/10 text-[14px] p-2 text-white border-none outline-none rounded-lg resize-none"></textarea>
                        </div>

                        <div v-if="statusMessage"
                            :class="isSuccess ? 'text-green-400' : 'text-red-400'"
                            class="text-sm">
                            {{ statusMessage }}
                        </div>

                        <button
                            type="submit"
                            :disabled="isLoading"
                            class="bg-gradient-to-r from-blue-600/30 text-[14px] to-pink-500/30 text-white p-2 rounded-lg w-fit disabled:opacity-50 disabled:cursor-not-allowed">
                            <span v-if="isLoading">{{ t('contact.form.sending') }}</span>
                            <span v-else>{{ t('contact.form.send') }}</span>
                        </button>
                    </div>
                </form>
            </div>
        </main>
    </section>
</template>
