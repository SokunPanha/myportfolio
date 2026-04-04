export const useFetchRecentWork = () => {
   
const  projects = [
 
  {
    name: "POS Cashier",
    description: "A real-time point-of-sale cashier system built for food and cafe stores. Features include order management, real-time updates via WebSocket, and a modern responsive UI. Currently deployed and running in production at a food and cafe store in sihanoukville. (Demo: username: cashier, password: cashier123)",
    demo: "https://pos-cashier-portal-dev-snowy.vercel.app/",
    technologies: ["Nuxt.js", "TailwindCSS", "WebSocket", "NuxtUI"],
    image: "/images/pos-cashier.png",
    type: "Side Project",
    process: "90% Complete",
  },
  {
    name: "POS Admin",
    description: "The admin dashboard for the POS Cashier system, providing store management, product catalog, sales analytics, and real-time order monitoring via WebSocket. Built for food and cafe store operations and currently running in production at sihanoukville. (Demo: username: admin, password: admin123)",
    demo: "https://pos-admin-dev.vercel.app/",
    technologies: ["Nuxt.js", "TailwindCSS", "WebSocket", "NuxtUI"],
    image: "/images/pos-admin.png",
    type: "Side Project",
    process: "90% Complete",
  },
  {
    name: "Digital Menu",
    description: "A customer-facing digital menu portal for restaurants and cafes, allowing customers to browse the menu, view product details, and place orders directly from their devices. Part of the POS system and currently running in production at Sihanoukville.",
    demo: "https://pos-store-portal-dev.vercel.app/store/168",
    technologies: ["Nuxt.js", "TailwindCSS", "WebSocket", "NuxtUI"],
    image: "/images/pos-store.png",
    type: "Side Project",
    process: "90% Complete",
  },
 {
    name: "DevToolbox",
    description: "A comprehensive collection of 100+ free, client-side developer tools for formatting, encoding, converting, and analyzing data. Features include JSON/XML formatters, Base64 encoders, hash generators, image compression, PDF tools, and more. All processing happens in the browser - your data never leaves your device.",
    demo: "https://toolbox.cambocoder.com/",
    technologies: ["Next.js", "React", "TailwindCSS", "TypeScript"],
    image: "/images/devtoolbox.webp",
    type: "Personal Project",
    process: "Finished",
  },
  {
    name: "Algo Viz",
    description: "An interactive algorithm visualization platform designed to help users understand data structures and algorithms through step-by-step animations and visual explanations. I developed this website using Vibe Coding and Client-Side Rendering (CSR), applying modern frontend techniques to create a smooth, responsive, and engaging learning experience for users.",
    // github: "https://algo-viz.cambocoder.com/",
    demo: "https://algo-viz.cambocoder.com/",
    technologies: ["Nextjs", "TailwindCss", "TypeScript", "ApexCharts", ],
    image: "/images/algoviz.webp",
    type: "Personal Project",
    process: "Finished",
  },
  {
    name: "Blog Post",
    description: "A comprehensive resource platform for the Cambodian developer community, providing open-source projects, technical documentation, and web development tools. It aims to foster collaboration and knowledge sharing among local programmers to advance the digital ecosystem in Cambodia.",
    github: "https://github.com/SokunPanha/blog-nuxtjs",
    demo: "https://devhub.cambocoder.com/",
    technologies: ["Nuxt", "TailwindCSS", "TypeScript", "NuxtUI"],
    image: "/images/blog-post.png",
    type: "Personal Project",
    process: "Finished",
  },
]
    return projects
}