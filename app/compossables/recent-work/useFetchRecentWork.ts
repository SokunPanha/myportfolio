export const useFetchRecentWork = () => {
   
const  projects = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio website built with Vue 3 and Tailwind CSS to showcase projects, skills, and contact information.",
    github: "https://github.com/username/portfolio-website",
    demo: "https://portfolio-demo.netlify.app",
    technologies: ["Vue", "Tailwind CSS", "TypeScript"],
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    name: "Task Manager App",
    description: "A full-featured task management application with CRUD functionality, local storage support, and clean UI.",
    github: "https://github.com/username/task-manager",
    demo: "https://task-manager-demo.vercel.app",
    technologies: ["Vue", "Pinia", "Tailwind CSS"],
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    name: "Weather Dashboard",
    description: "A weather dashboard that fetches real-time weather data from an API and displays forecasts with dynamic icons.",
    github: "https://github.com/username/weather-dashboard",
    demo: "https://weather-dashboard-demo.netlify.app",
    technologies: ["Vue", "API", "JavaScript"],
    image: "https://picsum.photos/600/400?random=3"
  },
  {
    name: "E-commerce Landing Page",
    description: "A responsive e-commerce landing page with modern UI, product cards, and call-to-action sections.",
    github: "https://github.com/username/ecommerce-landing",
    demo: "https://ecommerce-landing-demo.vercel.app",
    technologies: ["Vue", "Tailwind CSS", "HTML"],
    image: "https://picsum.photos/600/400?random=4"
  },
  {
    name: "Code Snippet Manager",
    description: "A developer tool to save, organize, and search code snippets efficiently with tags and categories.",
    github: "https://github.com/username/code-snippet-manager",
    demo: "https://code-snippet-demo.netlify.app",
    technologies: ["Vue", "TypeScript", "LocalStorage"],
    image: "https://picsum.photos/600/400?random=5"
  }
]
    return projects
}