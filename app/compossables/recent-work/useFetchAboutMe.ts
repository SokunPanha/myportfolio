
export function useFetchAboutMe() {

    const aboutMe = {
        skills: [
            'html.webp',
            'css.webp',
            'tailwind.webp',
            'javascript.webp',
            'typescript.webp',
            'git.webp',
            'figma.webp',
            'react.webp',
            'nextjs.webp',
            'vuejs.webp',
            'nuxt.webp',
            'ant.webp',
            'shadcn.webp',
            'nestjs.webp',
            'postgres.webp',
            'docker.webp'
        ],
        skillGroups: [
            {
                key: 'frontend',
                skills: ['HTML5', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Figma']
            },
            {
                key: 'backend',
                skills: ['Python', 'Node.js & Express', 'NestJS', 'RESTful API', 'TypeScript', 'OOP']
            },
            {
                key: 'database',
                skills: ['PostgreSQL', 'MongoDB', 'SQL', 'Database Design']
            },
            {
                key: 'versionControl',
                skills: ['Git', 'GitHub']
            },
            {
                key: 'devops',
                skills: ['Docker', 'Nginx', 'Ubuntu', 'Vercel']
            }
        ]
    }
    return { aboutMe }
}
