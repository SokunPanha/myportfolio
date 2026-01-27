export const useFetchRecentWork = () => {
   
const  projects = [

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

]
    return projects
}