<template>
    <section class="px-10" id="contact">
        <div class="flex justify-center items-center py-5">
            <UiTextGradient>Contact</UiTextGradient>
        </div>

        <main class="grid md:grid-cols-2 grid-cols-1 md:gap-30 gap-10">
            <div>
                <div class="flex flex-col gap-4">
                    <h1 class=" text-2xl font-bold text-blue-400 animate-bounce"> Get in touch</h1>
                    <p class="text-[14px] text-white">
                        I'm always open to new opportunities and collaborations. Whether you have a project in mind or
                        just want to chat, feel free to reach out!
                    </p>

                </div>
                <div>

                </div>
            </div>
            <div>
                <div>
                    <form @submit.prevent="">
                    <div
                        class="flex flex-col gap-4 bg-gradient-to-b from-pink-500/10   to-[#34156b3a] backdrop-blur-lg p-4 rounded-lg">
                        <div class="flex flex-col gap-2">
                            <label for="name" class="text-white text-[14px]">Name</label>
                            <input type="text" id="name"
                                class="bg-white/10 text-[14px] p-2 text-white border-none outline-none rounded-lg">
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="email" class="text-white text-[14px]">Email</label>
                            <input type="email" id="email"
                                class=" border-none text-[14px] outline-none bg-white/10 p-2 rounded-lg text-white">
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="message" class="text-white text-[14px]">Message</label>
                            <textarea name="" id=""
                                class="bg-white/10 text-[14px] p-2 text-white border-none outline-none rounded-lg   "></textarea>
                        </div>
                        <button
                        type="submit"
                            class="bg-gradient-to-r from-blue-600/30 text-[14px] to-pink-500/30 text-white p-2 rounded-lg w-fit">Send
                            Message</button>
                    </div>
                    </form>
                </div>
            </div>
        </main>
    </section>
</template>