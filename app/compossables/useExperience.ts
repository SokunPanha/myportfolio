// Single source of truth for career start — used by the live counter and the hero description
export const EXPERIENCE_START = new Date(2024, 4, 1, 0, 0, 0) // 1 May 2024

// Whole calendar years elapsed since EXPERIENCE_START
export function useExperienceYears(): number {
    const now = new Date()
    let years = now.getFullYear() - EXPERIENCE_START.getFullYear()
    const monthDiff = now.getMonth() - EXPERIENCE_START.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < EXPERIENCE_START.getDate())) years--
    return years
}
