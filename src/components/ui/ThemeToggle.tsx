import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true)
            document.documentElement.classList.add('dark')
        } else {
            setIsDark(false)
            document.documentElement.classList.remove('dark')
        }
    }, [])

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
            setIsDark(false)
        } else {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
            setIsDark(true)
        }
    }

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-6 right-6 z-50 p-3 bg-white dark:bg-slate-800 border-2 border-neo-border dark:border-white rounded-full shadow-neo dark:shadow-[4px_4px_0px_0px_#ffffff] hover:translate-y-[-2px] hover:shadow-none transition-all"
        >
            {isDark ? <Sun className="text-white" size={24} /> : <Moon className="text-neo-text" size={24} />}
        </button>
    )
}
